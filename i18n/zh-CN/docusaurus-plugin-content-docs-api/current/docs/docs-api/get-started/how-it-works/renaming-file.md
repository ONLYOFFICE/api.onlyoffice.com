---
sidebar_position: -16
---

# 重命名文件

下图和以下步骤说明了如何在 ONLYOFFICE 文档中重命名文档。

![重命名文件](/assets/images/editor/rename.svg)

1. 用户在**文档编辑器**中选择*重命名...*。
2. **文档编辑器**通过 [onRequestRename](../../usage-api/config/events.md#onrequestrename) 事件将新名称发送给**文档管理器**。
3. **文档管理器**将新名称发送到**文档存储服务**，集成商在此处重命名文件。
4. **文档存储服务**向**文档命令服务**发送 [meta](../../additional-api/command-service/meta.md) 命令以更新文档名称。
5. **文档编辑服务**通过 [onMetaChange](../../usage-api/config/events.md#onmetachange) 事件将新名称发送给每个用户的**文档编辑器**，使所有用户都能看到新名称。

## 如何在实践中做到这一点

1. 创建一个 `.html` 文件来[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在编辑器初始化配置中，定义 [onRequestRename](../../usage-api/config/events.md#onrequestrename) 事件处理程序。当用户在编辑器菜单中选择*重命名...*时，此事件会在 `event.data` 中传递新名称（不含文件扩展名）。在处理程序中，将新名称发送到您的服务器，以便在**文档存储服务**中重命名文件。

   <img alt="onRequestRename" src="/assets/images/editor/onRequestRename.png#gh-light-mode-only" width="282px" />
   <img alt="onRequestRename" src="/assets/images/editor/onRequestRename.dark.png#gh-dark-mode-only" width="282px" />

   ``` ts
   function onRequestRename(event) {
     const newTitle = event.data;
     RENAME_FILE(newTitle);
   }
   
   const config = {
     events: {
       onRequestRename,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   `RENAME_FILE` 是您的服务器端逻辑的占位符，用于在**文档存储服务**中重命名文档。

3. 重命名文件后，从您的服务器向[文档命令服务](../../additional-api/command-service/command-service.md)发送带有 [meta](../../additional-api/command-service/meta.md) 命令的请求，以更新所有正在编辑文档的用户的名称：

   ``` json
   {
     "c": "meta",
     "key": "Khirz6zTPdfd7",
     "meta": {
       "title": "Example Document Title.docx"
     }
   }
   ```

4. 当收到 [meta](../../additional-api/command-service/meta.md) 命令时，每个用户的**文档编辑器**中会触发 [onMetaChange](../../usage-api/config/events.md#onmetachange) 事件。新名称通过 `event.data.title` 传递。

   ``` ts
   function onMetaChange(event) {
     const title = event.data.title;
   }
   
   const config = {
     events: {
       onMetaChange,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```
