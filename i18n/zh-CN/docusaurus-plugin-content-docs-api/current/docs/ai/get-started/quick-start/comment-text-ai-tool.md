---
sidebar_position: 1
title: 注释文本 — 自定义 AI 工具
---
# 注释文本 — 自定义 AI 工具

使用 ONLYOFFICE AI 代理为选中文本添加 AI 生成的注释或脚注。

**时间：** 30 分钟 | **技能等级：** 高级

## 第 1 步：配置开发环境

1. 将 [onlyoffice.github.io](https://github.com/ONLYOFFICE/onlyoffice.github.io) 仓库克隆到本地。
2. 进入 helpers 文件夹：`sdkjs-plugins/content/ai/.dev/helpers/`，并打开目标编辑器对应的文件夹：**word**、**cell** 或 **slide**。
3. 创建一个新的函数文件，例如 `commentText.js`。

## 第 2 步：注册函数

使用 `RegisteredFunction` 对象定义函数名称、期望参数以及帮助 AI 模型学习调用方式的示例：

```javascript
let func = new RegisteredFunction({
  name: "commentText",
  description: "Use this function if you are asked to comment or explain anything.",
  parameters: {
    type: "object",
    properties: {
      prompt: {
        type: "string",
        description: "The instruction for what to explain or comment about the text.",
      },
      type: {
        type: "string",
        enum: ["comment", "footnote"],
        description: "Whether to add as a comment or as a footnote.",
        default: "comment",
      },
    },
    required: ["prompt"],
  },
  examples: [
    {
      prompt: "Explain this text",
      arguments: { prompt: "Explain this text", type: "comment" },
    },
    {
      prompt: "Add a footnote to selected text",
      arguments: { prompt: "Add a footnote to this text", type: "footnote" },
    },
    {
      prompt: "Comment on this text",
      arguments: { prompt: "Comment this text" },
    },
  ],
});
```

**关键字段说明：**

- `name` — AI 模型调用的函数名称
- `parameters` — 函数期望从 AI 接收的 JSON 参数
- `examples` — 帮助 AI 学习正确调用语法的示例调用
- `description` — 告知 AI 函数的用途及调用时机

## 第 3 步：获取选中文本

在 `func.call` 内，使用 `Asc.Editor.callCommand()` 从文档中读取当前选中的文本：

```javascript
func.call = async function (params) {
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
```

## 第 4 步：构建提示并初始化请求引擎

将用户指令与获取到的文本合并，然后创建请求引擎与 AI 模型通信：

```javascript
  let argPrompt = params.prompt + ":\n" + text;

  let requestEngine = AI.Request.create(AI.ActionType.Chat);
  if (!requestEngine) return;
```

## 第 5 步：发送请求并应用结果

将提示发送给 AI 模型，并将其响应作为注释或脚注插入文档。

:::info Asc.scope
`Asc.scope` 是一个共享对象，用于向 `callCommand` 闭包传递数据。由于 `callCommand` 在独立上下文中运行，局部变量无法直接在其中访问 — `Asc.scope` 起到桥接两个上下文的作用。
:::

以注释形式插入：

```javascript
  // Insert as a comment
  let result = await requestEngine.chatRequest(
    argPrompt,
    false,
    async function (data) {
      if (!data) return;
      Asc.scope.data = data;
      Asc.scope.model = requestEngine.modelUI.name;
      await Asc.Editor.callCommand(function () {
        let range = Api.GetDocument().GetRangeBySelect();
        let comment = range.AddComment(
          Asc.scope.data,
          Asc.scope.model,
          "uid" + Asc.scope.model,
        );
        Api.GetDocument().ShowComment([comment.GetId()]);
      });
    }
  );
```

以脚注形式插入：

```javascript
  // Insert as a footnote
  let result = await requestEngine.chatRequest(
    argPrompt,
    false,
    async function (data) {
      if (!data) return;
      await Asc.Editor.callCommand(function () {
        Api.GetDocument().AddFootnote();
      });
      await Asc.Library.PasteText(data);
    }
  );
```

:::tip
将文档更改包裹在 `StartAction` / `EndAction` 调用中，使整个操作可以作为单步撤销。
:::

## 第 6 步：构建并安装修改后的插件

1. 更新 `config.json` 中的插件版本以避免缓存问题（例如 `3.0.3` → `3.0.4`）。
2. 运行 `helpers.py` 文件重新生成插件脚本。
3. 选择 `sdkjs-plugins/content/ai` 中的所有文件，将其压缩并重命名为 `ai.plugin`。
4. 将文件放入 `sdkjs-plugins/content/ai/deploy` 并推送您的更改。
5. 从仓库构建您的 GitHub Pages 站点。
6. 准备您的自定义商店 URL：`https://YOUR-USERNAME.github.io/onlyoffice.github.io/store/index.html`

## 第 7 步：测试您的自定义 AI 工具

1. 在 ONLYOFFICE 中，前往**插件 → 插件管理器**。
2. 点击右上角的商店图标 `(</>)` 并输入您的自定义商店 URL。
3. 更新 AI 插件。
4. 打开文档并选中一段文本。
5. 打开 AI 代理对话框（`Ctrl + /`）。
6. 输入 `Explain this text` 并按 **Enter**。
7. AI 代理将为选中文本插入一条 AI 生成的解释注释。

## 下一步

**深入学习：**

- [ONLYOFFICE AI 代理入门](../../guides/ai-agent.md)
- [深入了解自定义 AI 工具](../../guides/custom-ai-tools.md)
- [文本注释 API 指南](../../guides/text-annotations-guide.md)

**浏览示例：**

- [浏览所有 AI 工具示例](/samples/?doctype=ai&text=ai+tools)

**需要帮助？**

- [开发者论坛](https://forum.onlyoffice.com/) — 社区支持
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — 报告错误
- [常见问题](../../more-information/faq.md) — 常见问题解答
