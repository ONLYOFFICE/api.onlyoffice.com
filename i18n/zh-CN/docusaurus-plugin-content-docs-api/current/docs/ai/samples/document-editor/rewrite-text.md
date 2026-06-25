---
description: 借助 AI 改写选中的文本。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 改写文本

此函数改写或替换文本。如果未指定文本或段落编号，则默认使用当前段落。

## 提示词

- 改写
- 重新措辞
- 使文本更有感染力
- 换一种说法
- 以正式风格改写

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "rewriteText",
    description:
        "Use this function when you asked to rewrite or replace some text. If text or paragraph number is not specified assume that we are working with the current paragraph.",
    parameters: {
        type: "object",
        properties: {
            parNumber: {
                type: "number",
                description: "The paragraph number to change",
            },
            prompt: {
                type: "string",
                description: "Instructions on how to change the text",
            },
            showDifference: {
                type: "boolean",
                description:
                    "Whether to show the difference between the original and new text, or just replace it",
            },
            type: {
                type: "string",
                description:
                    "Which part of the text to be rewritten (e.g., 'sentence' or 'paragraph')",
            },
        },
        required: [],
    },
    examples: [
        {
            prompt: "Rewrite",
            arguments: { type: "paragraph" },
        },
        {
            prompt: "Rephrase sentence",
            arguments: { type: "sentence" },
        },
        {
            prompt: "Make the text more emotional",
            arguments: { parNumber: 2, type: "paragraph" },
        },
        {
            prompt: "Rewrite in official style",
            arguments: { type: "paragraph" },
        },
        {
            prompt: "Rewrite the first paragraph",
            arguments: { parNumber: 1, type: "paragraph" },
        },
        {
            prompt: "Rewrite the current paragraph to be more official",
            arguments: { type: "paragraph" },
        },
    ],
});
```

### 参数

| Name           | Type    | Example     | Description                                                                                     |
|----------------|---------|-------------|-------------------------------------------------------------------------------------------------|
| parNumber      | number  | 1           | 要更改的段落编号。                                                          |
| prompt         | string  | "Rewrite"   | 有关如何更改文本的指令。                                                     |
| showDifference | boolean | true        | 指定是否显示原始文本与新文本之间的差异，或直接替换。 |
| type           | string  | "paragraph" | 要改写的文本部分（例如 "sentence"（句子）或 "paragraph"（段落））。                         |

## 函数执行 {#function-execution}

```ts
(function () {
    let func = new RegisteredFunction({
        name: "rewriteText",
        description:
            "Use this function when you asked to rewrite or replace some text. If text or paragraph number is not specified assume that we are working with the current paragraph.",
        parameters: {
            type: "object",
            properties: {
                parNumber: {
                    type: "number",
                    description: "The paragraph number to change",
                },
                prompt: {
                    type: "string",
                    description: "Instructions on how to change the text",
                },
                showDifference: {
                    type: "boolean",
                    description:
                        "Whether to show the difference between the original and new text, or just replace it",
                },
                type: {
                    type: "string",
                    description:
                        "Which part of the text to be rewritten (e.g., 'sentence' or 'paragraph')",
                },
            },
            required: [],
        },
        examples: [
            {
                prompt: "Rewrite",
                arguments: { type: "paragraph" },
            },
            {
                prompt: "Rephrase sentence",
                arguments: { type: "sentence" },
            },
            {
                prompt: "Make the text more emotional",
                arguments: { parNumber: 2, type: "paragraph" },
            },
            {
                prompt: "Rewrite in official style",
                arguments: { type: "paragraph" },
            },
            {
                prompt: "Rewrite the first paragraph",
                arguments: { parNumber: 1, type: "paragraph" },
            },
            {
                prompt: "Rewrite the current paragraph to be more official",
                arguments: { type: "paragraph" },
            },
        ],
    });

    func.call = async function (params) {
        let text = "";
        if ("paragraph" === params.type) {
            Asc.scope.parNumber = params.parNumber;
            text = await Asc.Editor.callCommand(function () {
                let doc = Api.GetDocument();
                let par =
                    undefined === Asc.scope.parNumber
                        ? doc.GetCurrentParagraph()
                        : doc.GetElement(Asc.scope.parNumber - 1);
                if (!par) return "";
                par.Select();
                return par.GetText();
            });
        } else // if ("sentence" === params.type)
        {
            text = await Asc.Editor.callCommand(function () {
                return Api.GetDocument().GetCurrentSentence();
            });
        }

        let argPrompt =
            params.prompt +
            ":\n" +
            text +
            "\n Answer with only the new one sentence, no need of any explanations";

        let requestEngine = AI.Request.create(AI.ActionType.Chat);
        if (!requestEngine) return;

        await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

        let turnOffTrackChanges = false;
        if (params.showDifference) {
            let isTrackChanges = await Asc.Editor.callCommand(function () {
                return Api.GetDocument().IsTrackRevisions();
            });

            if (!isTrackChanges) {
                await Asc.Editor.callCommand(function () {
                    Api.GetDocument().SetTrackRevisions(true);
                });
                turnOffTrackChanges = true;
            }
        }

        await Asc.Editor.callMethod("StartAction", [
            "Block",
            "AI (" + requestEngine.modelUI.name + ")",
        ]);

        let isSendedEndLongAction = false;
        async function checkEndAction() {
            if (!isSendedEndLongAction) {
                await Asc.Editor.callMethod("EndAction", [
                    "Block",
                    "AI (" + requestEngine.modelUI.name + ")",
                ]);
                isSendedEndLongAction = true;
            }
        }

        let result = await requestEngine.chatRequest(
            argPrompt,
            false,
            async function (data) {
                if (!data) return;
                await checkEndAction();

                if (text && "sentence" === params.type) {
                    Asc.scope.data = data;
                    await Asc.Editor.callCommand(function () {
                        let doc = Api.GetDocument();
                        doc.ReplaceCurrentSentence("");
                    });
                    text = null;
                }

                await Asc.Library.PasteText(data);
            },
        );

        await checkEndAction();

        if (turnOffTrackChanges)
            await Asc.Editor.callCommand(function () {
                return Api.GetDocument().SetTrackRevisions(false);
            });

        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    };

    return func;
})();
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetCurrentParagraph](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentParagraph.md), [GetElement](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetElement.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [Select](../../../office-api/usage-api/document-api/ApiParagraph/Methods/Select.md), [GetCurrentSentence](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentSentence.md), [IsTrackRevisions](../../../office-api/usage-api/document-api/ApiDocument/Methods/IsTrackRevisions.md), [SetTrackRevisions](../../../office-api/usage-api/document-api/ApiDocument/Methods/SetTrackRevisions.md), [ReplaceCurrentSentence](../../../office-api/usage-api/document-api/ApiDocument/Methods/ReplaceCurrentSentence.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/rewrite-text" dark />
