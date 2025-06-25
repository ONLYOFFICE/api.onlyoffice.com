---
sidebar_position: -18
---

# 操作链接

以下参考图和步骤解释了在 ONLYOFFICE 文档中使用链接的过程。

<img alt="Action link" src="/assets/images/editor/actionLink-create.png" width="720px" />

1. 用户发送请求，以获取指向在**文档编辑器**中包含书签的文档的链接
2. **文档编辑器**将请求发送给**文档管理器**，软件集成商在其中创建链接。
3. **文档管理器**将链接发送回**文档编辑器**，并在其中显示该链接。

## 实际操作方法

1. 创建一个*html*l文件，用于[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在文档编辑器初始化的配置脚本中，为要显示在书签编辑菜单中的 *获取链接* 按钮指定事件处理程序。当调用[onMakeActionLink](../../usage-api/config/events.md#onmakeactionlink)事件时，用户请求会发送给软件集成商，他们会在文档存储服务中创建链接。

   ![onMakeActionLink](/assets/images/editor/onMakeActionLink.png)

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

3. 为了向用户提供包含书签的文档链接，软件集成商将链接发送到[setActionLink](../../usage-api/methods.md#setactionlink)方法：

   ``` ts
   docEditor.setActionLink(link)
   ```

## 打开书签

<img alt="Open action link" src="/assets/images/editor/actionLink-open.png" width="720px" />

1. 用户点击**文档管理器**中的链接。
2. **文档管理器**将初始化的*editorConfig*发送给**文档编辑器**。
3. **文档编辑器**将文档滚动到书签位置。

当用户点击链接时，**文档编辑器**会将初始化的*editorConfig* 发送给文档编辑服务。从[onMakeActionLink](../../usage-api/config/events.md#onmakeactionlink)事件接收到的ACTION\_DATA会在*editorConfig*的[data.actionLink](../../usage-api/config/editor/editor.md#actionlink)参数中指定：

``` ts
const config = {
  editorConfig: {
    actionLink: ACTION_DATA,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

> 在[评论中提及用户](./mentions.md#how-this-can-be-done-in-practice)时，链接的生成方式也是相同的。
