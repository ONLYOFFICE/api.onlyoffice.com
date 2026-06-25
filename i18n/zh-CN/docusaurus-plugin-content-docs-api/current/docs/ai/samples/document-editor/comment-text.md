---
description: 为选中的文本添加批注。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
hide_table_of_contents: true
---

import Video from '@site/src/components/Video/Video';

# 批注文本

此函数为文本添加说明或批注。如果未指定文本或段落编号，则默认使用当前段落。可指定说明的添加方式为批注或脚注。AI 将根据您的提示生成内容，并以所选格式插入文档。

## 提示词

- 解释此文本
- 为此文本添加脚注
- 批注此文本

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "commentText",
    description:
        "Use this function if you asked to comment or explain anything. If text or paragraph number is not specified assume that we are working with the current paragraph. Specify whether the explanation should be added as a comment or as a footnote. The AI will generate the content based on your prompt and insert it in the chosen format.",
    parameters: {
        type: "object",
        properties: {
            type: {
                type: "string",
                description:
                    "Whether to add as a 'comment' or as a 'footnote' (default is 'comment')",
            },
        },
        required: ["type"],
    },
    examples: [
        {
            prompt: "Explain this text",
            arguments: { type: "comment" },
        },
        {
            prompt: "Add a footnote to this text",
            arguments: { type: "footnote" },
        },
        {
            prompt: "Comment this text",
            arguments: { type: "comment" },
        },
        {
            prompt: "Explain this text as a footnote",
            arguments: { type: "footnote" },
        },
        {
            prompt: "Explain selected text as a comment",
            arguments: { type: "comment" },
        },
    ],
});
```

### 参数

| Name | Type   | Example   | Description                                                                                                |
|------|--------|-----------|------------------------------------------------------------------------------------------------------------|
| type | string | "comment" | 指定以 "comment"（批注）还是 "footnote"（脚注）方式添加说明。默认值为 "comment"。 |

## 函数执行 {#function-execution}

```ts
(function () {
    let func = new RegisteredFunction({
        name: "commentText",
        description:
            "Use this function if you asked to comment or explain anything. If text or paragraph number is not specified assume that we are working with the current paragraph. Specify whether the explanation should be added as a comment or as a footnote. The AI will generate the content based on your prompt and insert it in the chosen format.",
        parameters: {
            type: "object",
            properties: {
                type: {
                    type: "string",
                    description:
                        "Whether to add as a 'comment' or as a 'footnote' (default is 'comment')",
                },
            },
            required: ["type"],
        },
        examples: [
            {
                prompt: "Explain this text",
                arguments: { type: "comment" },
            },
            {
                prompt: "Add a footnote to this text",
                arguments: { type: "footnote" },
            },
            {
                prompt: "Comment this text",
                arguments: { type: "comment" },
            },
            {
                prompt: "Explain this text as a footnote",
                arguments: { type: "footnote" },
            },
            {
                prompt: "Explain selected text as a comment",
                arguments: { type: "comment" },
            },
        ],
    });

    func.call = async function (params) {
        let type = params.type;
        let isFootnote = "footnote" === type;

        let text = await Asc.Editor.callCommand(function () {
            let doc = Api.GetDocument();
            let range = doc.GetRangeBySelect();
            let text = range ? range.GetText() : "";
            if (!text) {
                text = doc.GetCurrentWord();
                doc.SelectCurrentWord();
            }

            return text;
        });

        let argPrompt = params.prompt + ":\n" + text;

        let requestEngine = AI.Request.create(AI.ActionType.Chat);
        if (!requestEngine) return;

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

        await Asc.Editor.callMethod("StartAction", [
            "Block",
            "AI (" + requestEngine.modelUI.name + ")",
        ]);
        await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

        if (isFootnote) {
            let addFootnote = true;
            let result = await requestEngine.chatRequest(
                argPrompt,
                false,
                async function (data) {
                    if (!data) return;

                    await checkEndAction();
                    Asc.scope.data = data;
                    Asc.scope.model = requestEngine.modelUI.name;

                    if (addFootnote) {
                        await Asc.Editor.callCommand(function () {
                            Api.GetDocument().AddFootnote();
                        });
                        addFootnote = false;
                    }
                    await Asc.Library.PasteText(data);
                },
            );
        } else {
            let commentId = null;
            let result = await requestEngine.chatRequest(
                argPrompt,
                false,
                async function (data) {
                    if (!data) return;

                    await checkEndAction();
                    Asc.scope.data = data;
                    Asc.scope.model = requestEngine.modelUI.name;
                    Asc.scope.commentId = commentId;

                    commentId = await Asc.Editor.callCommand(function () {
                        let doc = Api.GetDocument();

                        let commentId = Asc.scope.commentId;
                        if (!commentId) {
                            let range = doc.GetRangeBySelect();
                            if (!range) return null;

                            let comment = range.AddComment(
                                Asc.scope.data,
                                Asc.scope.model,
                                "uid" + Asc.scope.model,
                            );
                            if (!comment) return null;
                            doc.ShowComment([comment.GetId()]);
                            return comment.GetId();
                        }

                        let comment = doc.GetCommentById(commentId);
                        if (!comment) return commentId;

                        comment.SetText(comment.GetText() + Asc.scope.data);
                        return commentId;
                    });
                },
            );
        }

        await checkEndAction();
        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    };

    return func;
})();
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [AddComment](../../../office-api/usage-api/document-api/ApiRange/Methods/AddComment.md), [GetCurrentWord](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentWord.md), [SelectCurrentWord](../../../office-api/usage-api/document-api/ApiDocument/Methods/SelectCurrentWord.md), [AddFootnote](../../../office-api/usage-api/document-api/ApiDocument/Methods/AddFootnote.md), [ShowComment](../../../office-api/usage-api/document-api/ApiDocument/Methods/ShowComment.md), [GetCommentById](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCommentById.md), [GetId](../../../office-api/usage-api/document-api/ApiComment/Methods/GetId.md), [SetText](../../../office-api/usage-api/document-api/ApiComment/Methods/SetText.md), [GetText](../../../office-api/usage-api/document-api/ApiComment/Methods/GetText.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/comment-text" dark />
