---
sidebar_position: -16
---

# 重命名文件

参考图和以下步骤说明了在 ONLYOFFICE 文档中重命名文档的过程。

![重命名文件](/assets/images/editor/rename.svg)

1. 用户在**文档编辑器**中为文档指定一个新名称。
2. **文档编辑器**将文档的新名称通知给**文档管理器**。
3. **文档管理器**将文档的新名称发送到**文档存储服务**，在这里软件集成商重命名文档。
4. **文档存储服务**将文档的新名称通知给**文档编辑服务**。
5. **文档编辑服务**将文档的新名称发送给每个用户的**文档编辑器**。
6. 现在新名称对所有用户可见。

## 如何在实践中做到这一点

1. 创建一个 *html* 文件来[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 指定用于在文档编辑器初始化的配置脚本中打开*重命名...*菜单的事件处理程序。当调用 [onRequestRename](../../usage-api/config/events.md#onrequestrename) 事件时，不带扩展名的文档的新名称被发送给软件集成商，软件集成商在文档存储服务中重命名文档。

   <img alt="onRequestRename" src="/assets/images/editor/onRequestRename.png" width="282px" />

   ``` ts
   function onRequestRename(event) {
     const title = event.data
   }
   
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestRename,
     },
   })
   ```

3. 为了更新所有协作编辑器的文档名称，请将 *c* 参数的值设置为 [meta](../../additional-api/command-service/meta.md)，然后将请求发送到[文档命令服务](../../additional-api/command-service/command-service.md)。

   ``` json
   {
     "c": "meta",
     "key": "Khirz6zTPdfd7",
     "meta": {
       "title": "Example Document Title.docx"
     }
   }
   ```

4. 当通过 [meta](../../additional-api/command-service/meta.md) 命令更改文档名称时，必须在每个用户的文档编辑器中调用 [onMetaChange](../../usage-api/config/events.md#onmetachange) 事件。此事件在 *data.title* 参数中发送文档的名称。

   ``` ts
   function onMetaChange(event) {
     const title = event.data.title
   }
   
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onMetaChange,
     },
   })
   ```
