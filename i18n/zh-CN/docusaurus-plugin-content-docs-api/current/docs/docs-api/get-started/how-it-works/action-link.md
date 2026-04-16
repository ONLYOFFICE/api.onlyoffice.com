---
sidebar_position: -18
---

# 操作链接

以下图示和步骤说明了如何在 ONLYOFFICE 文档中创建指向文档书签位置的可共享链接。

<img alt="Action link" src="/assets/images/editor/actionLink-create.png" width="720px" />

1. 用户在**文档编辑器**的书签编辑菜单中点击**获取链接**按钮。
2. **文档编辑器**触发 [onMakeActionLink](../../usage-api/config/events.md#onmakeactionlink) 事件，将书签数据传递给**文档管理器**。
3. **文档管理器**构建一个包含书签数据的 URL，并通过 [setActionLink](../../usage-api/methods.md#setactionlink) 方法将其传回**文档编辑器**。
4. **文档编辑器**向用户显示该链接。

## 实际操作方法 {#how-this-can-be-done-in-practice}

1. 创建一个 `.html` 文件，用于[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在编辑器初始化配置中，定义 [onMakeActionLink](../../usage-api/config/events.md#onmakeactionlink) 事件处理程序。当用户在书签菜单中点击**获取链接**时，编辑器会调用此处理程序，并传入一个描述书签位置的 `event.data` 对象。您的代码需要构建一个包含该数据的 URL，并通过 [setActionLink](../../usage-api/methods.md#setactionlink) 将其传回编辑器：

   ![onMakeActionLink](/assets/images/editor/onMakeActionLink.png#gh-light-mode-only)![onMakeActionLink](/assets/images/editor/onMakeActionLink.dark.png#gh-dark-mode-only)

   ``` ts
   function onMakeActionLink(event) {
     const ACTION_DATA = event.data
     const link = GENERATE_LINK(ACTION_DATA)
     docEditor.setActionLink(link)
   };
   
   const config = {
     events: {
       onMakeActionLink,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   `GENERATE_LINK` 是您服务器端逻辑的占位符，用于构建包含书签数据的 URL（例如，作为查询字符串参数）。当用户稍后打开该 URL 时，您的**文档管理器**必须提取该数据并将其传递给编辑器，具体方法请参阅下方说明。

## 打开书签 {#opening-the-bookmark}

<img alt="Open action link" src="/assets/images/editor/actionLink-open.png" width="720px" />

1. 用户在浏览器中打开操作链接，导航到**文档管理器**。
2. **文档管理器**使用包含书签数据的 [`config`](../../usage-api/config/config.md) 初始化**文档编辑器**，书签数据位于 [`actionLink`](../../usage-api/config/editor/editor.md#actionlink) 参数中。
3. **文档编辑器**打开文档并滚动到书签位置。

要在书签位置打开文档，请将 `ACTION_DATA` 对象（最初从 [onMakeActionLink](../../usage-api/config/events.md#onmakeactionlink) 事件接收到的）作为 [`editorConfig.actionLink`](../../usage-api/config/editor/editor.md#actionlink) 的值传入：

``` ts
const config = {
  editorConfig: {
    actionLink: ACTION_DATA,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

:::note
在[评论中提及用户](./mentions.md#how-this-can-be-done-in-practice)时，链接的生成方式也是相同的。
:::
