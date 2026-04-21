---
sidebar_position: -2
---

# 自动化应用程序编程接口（API）

自动化 API 允许通过自定义界面元素从外部源与办公文档进行交互。利用 ONLYOFFICE 文档处理功能构建您自己的 UI 组件 — 管理评论、控制审阅工作流程、自动填写表单等，所有操作都在编辑器外部完成。

:::info
自动化 API 仅适用于 **ONLYOFFICE 文档开发者版**。

这是一项高级功能，默认不包含，需额外付费。请联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com) 获取报价，或访问 [onlyoffice.com/automation-api](https://www.onlyoffice.com/automation-api) 了解更多信息。
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

要开始使用自动化 API，请使用 [createConnector](../methods.md#createconnector) 方法创建连接器：

``` ts
const connector = docEditor.createConnector();
```

连接器提供执行编辑器命令、监听文档事件和与编辑器 UI 交互的方法：

``` ts
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
});
```

## API 参考

- [连接器类](./connector-class.md) — 与编辑器交互的方法
- [连接器窗口](./connector-window.md) — 创建和管理模态窗口的方法
