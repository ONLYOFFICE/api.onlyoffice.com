---
description: 检查并修正当前段落中的拼写错误。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 检查拼写

此函数检查当前段落的拼写或修正其他类型的文本错误。

## 提示词

- 检查拼写

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "checkSpelling",
    description:
        "Use this function if you asked to check spelling for current paragraph or fix other type of text errors in the current paragraph.",
    parameters: {
        type: "object",
        properties: {},
        required: [],
    },
    examples: [
        {
            prompt: "Check spelling for the current paragraph",
            arguments: {},
        },
        {
            prompt: "Fix grammar in current paragraph",
            arguments: {},
        },
        {
            prompt: "Check for text errors",
            arguments: {},
        },
    ],
});
```

## 函数执行 {#function-execution}

```ts
(function () {
    let func = new RegisteredFunction({
        name: "checkSpelling",
        description:
            "Use this function if you asked to check spelling for current paragraph or fix other type of text errors in the current paragraph.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
        },
        examples: [
            {
                prompt: "Check spelling for the current paragraph",
                arguments: {},
            },
            {
                prompt: "Fix grammar in current paragraph",
                arguments: {},
            },
            {
                prompt: "Check for text errors",
                arguments: {},
            },
        ],
    });

    func.call = async function (params) {
        let text = await Asc.Editor.callCommand(function () {
            let par = Api.GetDocument().GetCurrentParagraph();
            if (!par) return "";
            par.Select();
            return par.GetText();
        });

        let argPrompt =
            "Check spelling and grammar for text:\n" +
            text +
            "\n Answer with only the new corrected text, no need of any explanations.";

        let isTrackChanges = await Asc.Editor.callCommand(function () {
            let isOn = Api.GetDocument().IsTrackRevisions();
            if (isOn) Api.GetDocument().SetTrackRevisions(false);
            return isOn;
        });

        let requestEngine = AI.Request.create(AI.ActionType.Chat);
        if (!requestEngine) return;

        await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

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

        let resultText = "";

        let result = await requestEngine.chatRequest(
            argPrompt,
            false,
            async function (data) {
                if (!data) return;
                await checkEndAction();

                resultText += data;

                await Asc.Editor.callMethod("EndAction", [
                    "GroupActions",
                    "",
                    "cancel",
                ]);
                await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

                Asc.scope.text = resultText;
                await Asc.Editor.callCommand(function () {
                    let par = Api.GetDocument().GetCurrentParagraph();
                    if (!par) return "";
                    par.Select();
                    Api.ReplaceTextSmart([Asc.scope.text]);
                });
            },
        );

        await checkEndAction();

        await Asc.Editor.callMethod("EndAction", [
            "GroupActions",
            "",
            "cancel",
        ]);
        await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

        Asc.scope.modelName = requestEngine.modelUI.name;
        await Asc.Editor.callCommand(function () {
            return Api.GetDocument().SetAssistantTrackRevisions(
                true,
                Asc.scope.modelName,
            );
        });

        Asc.scope.text = resultText;
        await Asc.Editor.callCommand(function () {
            let par = Api.GetDocument().GetCurrentParagraph();
            if (!par) return "";
            par.Select();
            Api.ReplaceTextSmart([Asc.scope.text]);
        });

        await Asc.Editor.callCommand(function () {
            return Api.GetDocument().SetAssistantTrackRevisions(false);
        });

        if (isTrackChanges) {
            await Asc.Editor.callCommand(function () {
                Api.GetDocument().SetTrackRevisions(true);
            });
        }

        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    };

    return func;
})();
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetCurrentParagraph](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentParagraph.md), [Select](../../../office-api/usage-api/document-api/ApiParagraph/Methods/Select.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [IsTrackRevisions](../../../office-api/usage-api/document-api/ApiDocument/Methods/IsTrackRevisions.md), [SetTrackRevisions](../../../office-api/usage-api/document-api/ApiDocument/Methods/SetTrackRevisions.md), [ReplaceTextSmart](../../../office-api/usage-api/document-api/Api/Methods/ReplaceTextSmart.md), [SetAssistantTrackRevisions](../../../office-api/usage-api/document-api/ApiDocument/Methods/SetAssistantTrackRevisions.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/check-spelling" dark />
