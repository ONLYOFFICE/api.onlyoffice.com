---
sidebar_position: -1
---

# 创建自定义函数（测试版）

AI 函数定义了 AI 代理的功能。它们指定：

- 要向 AI 模型发送什么请求；
- 要对文档执行什么操作。

添加自定义 AI 函数可以扩展 AI 代理的功能，并使其能够适应特定的使用场景。无论是处理文档、电子表格还是演示文稿，自定义函数都能让你将 AI 驱动的操作直接集成到工作流程中，并使代理的行为符合你的需求。

你可以在[此处](../samples/custom-ai-functions-samples/custom-ai-functions-samples.md)找到现成的自定义 AI 函数，也可以创建自己的函数。

## 如何使用 AI 函数 {#usage}

要使用 AI 函数，请按照以下步骤操作：

1. 向 AI 插件[添加模型](ai-plugin.md#configuring)。
2. 按 `CTRL + /` 打开 AI 代理对话框。
3. 输入你的提示词并按 Enter。

## 示例：commentText 函数 {#example}

`commentText` 函数允许直接向文档中添加 AI 生成的评论。其工作方式如下：

1. 选择要添加评论的单词。
2. 打开 AI 代理对话框（`CTRL + /`）。
3. 输入对 AI 代理的指令。例如：`解释这段文字`。
4. 按 Enter。

![commentText 执行过程](/assets/images/plugins/comment-text-function.png#gh-light-mode-only)![commentText 执行过程](/assets/images/plugins/comment-text-function.dark.png#gh-dark-mode-only)

AI 代理将运行 `commentText` 函数，并在文档中插入相关评论。

![commentText 结果](/assets/images/plugins/comment-text-result.png#gh-light-mode-only)![commentText 结果](/assets/images/plugins/comment-text-result.dark.png#gh-dark-mode-only)

## 如何添加自定义 AI 函数 {#adding-functions}

添加自定义函数的过程包括两个主要阶段：

- [函数注册](#registration)：在代理环境中注册 AI 函数及其元数据。
- [函数执行](#execution)：实现核心逻辑，包括向 AI 模型发送请求以及使用我们的[Office API](../../office-api/get-started/overview.md)操作文档内容。

### 函数注册 {#registration}

要添加新函数，需使用 `RegisteredFunction` 对象，该对象将自定义函数的元数据和逻辑添加到 AI 代理中。

#### 参数 {#parameters}

| 名称 | 类型 | 示例 | 描述 |
| --- | --- | --- | --- |
| name | string | `"commentText"` | 函数名称。 |
| params | 字符串列表 | `["type (string): 是作为 'comment'（评论）还是 'footnote'（脚注）添加（默认是 'comment'）"]` | 函数期望从 AI 获得的参数列表。 |
| examples | 字符串列表 | `["如果需要将选定文本作为评论进行解释，请回复：\n" + "[functionCalling (commentText)]: {'prompt' : '解释这段文字', 'type': 'comment'}"]` | 供 AI 参考的正确函数调用示例。 |
| description | 字符串列表 | `"当需要评论或解释任何内容时使用此函数。"` | 向 AI 说明该函数用途的描述。 |

#### 示例 {#example}

``` ts
let func = new RegisteredFunction();
func.name = "commentText";
func.params = [
    "type (string): 是作为 'comment'（评论）还是 'footnote'（脚注）添加（默认是 'comment'）"
];

func.examples = [
    "如果需要将选定文本作为评论进行解释，请回复：\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"解释这段文字\", \"type\": \"comment\"}",


    "如果需要为选定文本添加脚注，请回复：\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"为这段文字添加脚注\", \"type\": \"footnote\"}",


    "如果需要对选定文本进行评论，请回复：\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"评论这段文字\"}",


    "如果需要将选定文本作为脚注进行解释，请回复：\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"解释这段文字\", \"type\": \"footnote\"}"
]
```

这些参数供 AI 使用。`RegisteredFunction()` 对象在 [helperFuncs.js](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ai/scripts/helpers/helperFuncs.js) 文件中定义。

### 函数执行 {#execution}

注册函数后，需实现当 AI 调用该函数时实际执行的逻辑：

1. 使用 `Asc.Editor.callCommand()` 检索选定的文本：

    ``` ts
    func.call = async function(params) {
        let type = params.type;
        let isFootnote = "footnote" === type;

        // 使用 office-js API 在编辑器上下文中中执行一段代码。
        let text = await Asc.Editor.callCommand(function(){
            let doc = Api.GetDocument();
            // 获取当前选定的文本范围。
            let range = doc.GetRangeBySelect();
            let text = range ? range.GetText() : "";
            if (!text)
            {
                text = doc.GetCurrentWord();
                // 选中当前单词，以便对其添加评论。
                doc.SelectCurrentWord();
            }

            return text;
        });
    };
    ```

2. 结合 `params.prompt` 和选定的文本构建给 AI 的提示词：

    ``` ts
    let argPromt = params.prompt + ":\n" + text;
    ```

3. 使用 `AI.Request.create` 初始化一个用于与 AI 模型通信的请求引擎。该对象在 [engine.js](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ai/scripts/engine/engine.js#L554) 文件中定义。此对象有助于向 AI 模型发送请求：

    ``` ts
    // 初始化用于与 AI 模型（如聊天、翻译）通信的请求引擎。
    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine)
        return;
    ```

4. 使用 `chatRequest()` 发送请求，并在回调中接收结果：

    ``` ts
    // 向 AI 模型发送提示词，并通过回调处理响应。可以流式传输或等待结果。
    let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
        if (!data)
            return;
    });
    ```

5. 使用 [AddFootnote()](../../office-api/usage-api/text-document-api/ApiDocument/Methods/AddFootnote.md) 或 [AddComment()](../../office-api/usage-api/text-document-api/ApiDocument/Methods/AddComment.md) 将响应作为评论或脚注插入。

    `AddFootnote` 实现：

    ``` ts
    if (isFootnote)
    {
        let addFootnote = true;
        // 向 AI 模型发送送提示词，并通过回调处理响应。可以流式传输或等待结果。
        let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
            if (!data)
                return;

            // 标记编辑器中逻辑组或块操作的结束。
            await checkEndAction();
            Asc.scope.data = data;
            Asc.scope.model = requestEngine.modelUI.name;

            if (addFootnote)
            {
                // 使用文档模型 API 在编辑器上下文中执行一段代码。
                await Asc.Editor.callCommand(function(){
                    // 返回主文档对象，通过它可以访问所有编辑、结构和选择 API。
                    Api.GetDocument().AddFootnote();
                });
                addFootnote = false;
            }
            // 将 AI 生成的结果插入到文档中当前选择或光标位置。
            await Asc.Library.PasteText(data);
        });
    };
    ```

    `AddComment` 实现：

    ``` ts
    let commentId = null;
    // 向 AI 模型发送提示词，并通过回调处理响应。可以流式传输或等待结果。
    let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
        if (!data)
            return;

        // 标记编辑器中逻辑组或块操作的结束。
        await checkEndAction();
        Asc.scope.data = data;
        Asc.scope.model = requestEngine.modelUI.name;
        Asc.scope.commentId = commentId;

        // 使用文档模型 API 在编辑器上下文中执行一段代码。
        commentId = await Asc.Editor.callCommand(function(){
            // 返回主文档对象，通过它可以访问所有编辑、结构和选择 API。
            let doc = Api.GetDocument();

            let commentId = Asc.scope.commentId;
            if (!commentId)
            {
                // 获取当前选定的文本范围，该范围可以被修改或添加注释。
                let range = doc.GetRangeBySelect();
                if (!range)
                    return null;

                let comment = range.AddComment(Asc.scope.data, Asc.scope.model, "uid" + Asc.scope.model);
                if (!comment)
                    return null;
                doc.ShowComment([comment.GetId()]);
                    return comment.GetId();
            }

            let comment = doc.GetCommentById(commentId);
            if (!comment)
                return commentId;

            comment.SetText(comment.GetText() + scope.data);
                return commentId;
        });
    });
    ```

> 为了确保在请求执行后可以回滚整个更改块，我们在 `commentText` 函数中使用了 [StartAction](../interacting-with-editors/text-document-api/Methods/StartAction.md) 和 [EndAction](../interacting-with-editors/text-document-api/Methods/EndAction.md) 方法。

带注释的 `commentText` 函数完整实现：

``` ts
(function(){
    // 定义 commentText 函数 — 让 AI 使用 AI 响应为选定文本插入评论或脚注。
    WORD_FUNCTIONS.commentText = function()
    {
        // 创建一个新的函数对象，该对象将被注册并暴露给 AI。
        let func = new RegisteredFunction();
        func.name = "commentText";
        // 列出函数期望的参数。这些参数由 AI 代理作为 JSON 对象传递。
        func.params = [
            "type (string): 是作为 'comment'（评论）还是 'footnote'（脚注）添加（默认是 'comment'）"
        ];

        // 提供示例 JSON 输入，以教导 AI 如何正确调用此函数。
        func.examples = [
            "如果需要将选定文本作为评论进行解释，请回复：\n" +
            "[functionCalling (commentText)]: {\"prompt\" : \"解释这段文字\", \"type\": \"comment\"}",


            "如果需要为选定文本添加脚注，请回复：\n" +
            "[functionCalling (commentText)]: {\"prompt\" : \"为这段文字添加脚注\", \"type\": \"footnote\"}",


            "如果需要对选定文本进行评论，请回复：\n" +
            "[functionCalling (commentText)]: {\"prompt\" : \"评论这段文字\"}",


            "如果需要将选定文本作为脚注进行解释，请回复：\n" +
            "[functionCalling (commentText)]: {\"prompt\" : \"解释这段文字\", \"type\": \"footnote\"}"
        ];
        
        // 当 AI 调用此函数时实际执行的逻辑。
        func.call = async function(params) {
            let type = params.type;
            let isFootnote = "footnote" === type;

            // 使用 office-js API 在编辑器上下文中执行一段代码。
            let text = await Asc.Editor.callCommand(function(){
                let doc = Api.GetDocument();
                // 获取当前选定的文本范围。
                let range = doc.GetRangeBySelect();
                let text = range ? range.GetText() : "";
                if (!text)
                {
                    text = doc.GetCurrentWord();
                    // 选中当前单词，以便对其添加评论。
                    doc.SelectCurrentWord();
                }

                return text;
            });

            let argPromt = params.prompt + ":\n" + text;

            // 初始化用于与 AI 模型（如聊天、翻译）通信的请求引擎。
            let requestEngine = AI.Request.create(AI.ActionType.Chat);
            if (!requestEngine)
                return;

            let isSendedEndLongAction = false;
            // 标记编辑器中逻辑组或块操作的结束。
            async function checkEndAction() {
                if (!isSendedEndLongAction) {
                    // 标记编辑器中逻辑组或块操作的结束。
                    await Asc.Editor.callMethod("EndAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
                    isSendedEndLongAction = true
                }
            }

            // 在编辑器中启动块操作，用于撤销/重做
            await Asc.Editor.callMethod("StartAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
            // 在编辑器中启动组操作，用于撤销/重做
            await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

            if (isFootnote)
            {
                let addFootnote = true;
                // 向 AI 模型发送提示词，并通过回调处理响应
                let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
                    if (!data)
                        return;

                    // 标记编辑器中块操作的结束。
                    await checkEndAction();
                    Asc.scope.data = data;
                    Asc.scope.model = requestEngine.modelUI.name;

                    if (addFootnote)
                    {
                        // 使用 office-js API 在编辑器上下文中执行一段代码。
                        await Asc.Editor.callCommand(function(){
                            Api.GetDocument().AddFootnote();
                        });
                        addFootnote = false;
                    }
                    // 将 AI 生成的结果插入到文档中当前选择或光标位置。
                    await Asc.Library.PasteText(data);
                });
            }
            else 
            {
                let commentId = null;
                // 向 AI 模型发送提示词，并通过回调处理响应。
                let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
                    if (!data)
                        return;

                    // 标记编辑器中块操作的结束。
                    await checkEndAction();
                    Asc.scope.data = data;
                    Asc.scope.model = requestEngine.modelUI.name;
                    Asc.scope.commentId = commentId;

                    // 使用 office-js API 在编辑器上下文中执行一段代码。
                    commentId = await Asc.Editor.callCommand(function(){
                        let doc = Api.GetDocument();

                        let commentId = Asc.scope.commentId;
                        if (!commentId)
                        {
                            // 获取当前选定的文本范围。
                            let range = doc.GetRangeBySelect();
                            if (!range)
                                return null;

                            let comment = range.AddComment(Asc.scope.data, Asc.scope.model, "uid" + Asc.scope.model);
                            if (!comment)
                                return null;
                            doc.ShowComment([comment.GetId()]);
                            return comment.GetId();
                        }

                        let comment = doc.GetCommentById(commentId);
                        if (!comment)
                            return commentId;

                        comment.SetText(comment.GetText() + scope.data);
                        return commentId;
                    });
                });
            }

            // 标记编辑器中块操作的结束。
            await checkEndAction();
            // 标记编辑器中组操作的结束。
            await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
        };

        return func;
    }
});
```

AI 代理功能随着当今数字世界的需求不断发展。通过创建适合特定使用场景的自定义函数来扩展其功能吧。
