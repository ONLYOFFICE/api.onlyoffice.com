---
sidebar_position: -2
---

# 自动化应用程序编程接口（API）

自动化 API 允许通过自定义界面元素从外部源与办公文档进行交互。利用 ONLYOFFICE 文档处理功能构建您自己的 UI 组件 — 管理评论、控制审阅工作流程、自动填写表单等，所有操作都在编辑器外部完成。

:::info
自动化 API 仅适用于 **ONLYOFFICE 文档开发者版**。

这是一项需额外付费的高级功能。请参阅 [ONLYOFFICE 文档开发者版](https://www.onlyoffice.com/developer-edition-prices?from=api) 了解价格详情，或联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com) 获取报价。
:::

## 功能展示

探索展示实际用例的交互式示例：

| 用例 | 描述 |
| -------- | ----------- |
| [处理评论](../../samples/automation-api/working-with-comments.md) | 在自定义界面中收集和显示所有文档评论。从您自己的 UI 添加、删除和导航评论。 |
| [管理审阅修订](../../samples/automation-api/working-with-review-changes.md) | 从外部控制审阅流程 — 从自定义面板接受或拒绝修订并在修订之间导航。 |
| [填写表单](../../samples/automation-api/filling-out-the-form.md) | 使用外部数据自动填充表单字段。在您的界面和文档之间实时同步表单值。 |
| [使用内容控件](../../samples/automation-api/working-with-content-controls.md) | 添加不同类型的内容控件，并从外部 UI 查看其属性。 |

## 快速入门

要开始使用自动化 API，请使用 [createConnector](../methods.md#createconnector) 方法创建连接器。请在编辑器准备就绪后创建连接器 — 在 [onDocumentReady](../config/events.md#ondocumentready) 事件处理程序中，或在该事件触发之后的任意时刻：

```ts
let connector;

const config = {
  // ...
  events: {
    onDocumentReady: () => {
      connector = docEditor.createConnector();
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

连接器提供执行编辑器命令、监听文档事件和与编辑器 UI 交互的方法：

```ts
// 监听文档事件
connector.attachEvent("onChangeContentControl", (obj) => {
  console.log("Content changed:", obj);
});

// 执行编辑器方法
connector.executeMethod("GetAllComments", null, (comments) => {
  console.log("Comments:", comments);
});

// 向文档插入内容
connector.callCommand(() => {
  const oDocument = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText("Hello from Automation API");
  oDocument.InsertContent([oParagraph]);
  return {status: "ok"};
}, (res) => {
  console.log("Result:", res);
});
```

## 连接器生命周期 {#connector-lifecycle}

连接器与创建它的 `docEditor` 对象绑定，只要该对象存在，连接器就保持有效：

- **请重复使用已创建的连接器，而不要为每次操作都创建新的连接器。** 每次调用 [createConnector](../methods.md#createconnector) 都会返回一个具有独立标识符的新连接器，该连接器会一直在编辑器中保持注册状态，直到调用 [disconnect](./connector-class.md#disconnect) 为止。通过 [attachEvent](./connector-class.md#attachevent) 添加的事件监听器、工具栏和右键菜单项以及通过 [createWindow](./connector-class.md#createwindow) 创建的窗口都属于注册它们的那个连接器，并且每个连接器都会单独接收其所订阅的事件。多个连接器可以同时工作，例如应用程序的每个模块使用一个连接器。
- **请勿在 [onDocumentReady](../config/events.md#ondocumentready) 事件触发之前创建连接器。** 如果连接器在该事件之后才创建（例如在用户与您的界面交互时），请在 `onDocumentReady` 处理程序中保存编辑器状态，并在使用连接器之前检查该状态。
- **当不再需要连接器时，请调用 [disconnect](./connector-class.md#disconnect)，包括在调用 [destroyEditor](../methods.md#destroyeditor) 之前。** 该方法会停止事件传递，移除通过此连接器添加的界面元素，并释放它在页面上占用的资源。请在编辑器仍然存在时调用该方法。
- **重新初始化编辑器后，请创建新的连接器。** [destroyEditor](../methods.md#destroyeditor) 方法以及初始化新的 `DocsAPI.DocEditor` 对象都会使现有连接器失效。新的编辑器实例会触发自己的 [onDocumentReady](../config/events.md#ondocumentready) 事件，应在其中创建新的连接器。
- 使用 [refreshFile](../methods.md#refreshfile) 方法更新文件不会使连接器失效，因为编辑器不会被重新初始化。

:::note
如果连接器所属的编辑器已不存在，通过该连接器发送的命令永远不会返回结果：根据编辑器的状态，该调用要么引发 JavaScript 错误，要么被丢弃且不调用回调函数。请检查编辑器是否已准备就绪，而不是重试此类调用。
:::

## 调试

### 命令日志 {#command-logging}

要在浏览器控制台中记录所有 [`callCommand`](./connector-class.md#callcommand) 和 [`executeMethod`](./connector-class.md#executemethod) 调用，请在浏览器本地存储中设置 `asc_plugin_commands_log` 键：

```js
localStorage.setItem("asc_plugin_commands_log", "true");
```

要禁用日志，请删除该键：

```js
localStorage.removeItem("asc_plugin_commands_log");
```

该设置在页面重新加载后仍然有效。

### callCommand 中的错误处理

由于 `commandFn` 在隔离的上下文中运行，其内部的错误不会传播到调用方。使用 try/catch 块并通过回调返回结果：

```ts
connector.callCommand(() => {
  try {
    const doc = Api.GetDocument();
    const stats = doc.GetStatistics();
    return {status: "ok", pages: stats.PageCount};
  } catch (err) {
    return {status: "fail", error: err.stack};
  }
}, (res) => {
  if (res.status !== "ok") {
    console.log(res.error);
  }
});
```

## API 参考

- [连接器类](./connector-class.md) — 与编辑器交互的方法
- [连接器窗口](./connector-window.md) — 创建和管理模态窗口的方法
