---
sidebar_position: -3
---

# 设置头像

下图和步骤说明了如何在 ONLYOFFICE 文档 中设置用户头像。

<img alt="设置头像" src="/assets/images/editor/avatars.png" width="720px" />

1. 使用 [`editorConfig.user.image`](../../usage-api/config/editor/editor.md#user) 字段，在初始化时为**文档编辑器**设置当前用户的头像 URL。
2. 当用户打开评论或共同编辑者列表时，**文档编辑器**触发 [`onRequestUsers`](../../usage-api/config/events.md#onrequestusers) 事件，请求其他用户的数据。
3. **文档管理器**获取用户数据（包括姓名和头像 URL），并通过调用 [`setUsers`](../../usage-api/methods.md#setusers) 方法将其传回**文档编辑器**。
4. **文档编辑器**在用户姓名旁边显示所有用户的头像。

## 在实践中如何做到这一点

1. 创建一个空的 `.html` 文件来[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 要设置当前用户头像，请使用初始化配置的 [editorConfig.user.image](../../usage-api/config/editor/editor.md#user) 字段：

   ``` ts
   const config = {
     editorConfig: {
       user: {
         group: "Group1",
         id: "78e1e841",
         image: "https://example.com/url-to-user-avatar.png",
         name: "John Smith",
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 在初始化脚本中，指定用于请求用户头像的事件处理程序。当用户打开评论或共同编辑者列表时，将触发 [`onRequestUsers`](../../usage-api/config/events.md#onrequestusers) 事件。事件的 `data.c` 参数设置为 `"info"`，`data.id` 包含需要头像的用户 ID。

   <img alt="评论里的头像" src="/assets/images/editor/avatars-comments.png" width="295px" />

   <img alt="共同编辑头像" src="/assets/images/editor/avatars-coediting.png" width="298px" />

   ``` ts
   function onRequestUsers(event) {
     const c = event.data.c;
     const id = event.data.id;
   }

   const config = {
     events: {
       onRequestUsers,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

4. 在事件处理程序中，调用 [`setUsers`](../../usage-api/methods.md#setusers) 方法将用户数据传回编辑器：

   ``` ts
   docEditor.setUsers({
     c: "info",
     users: [
       {
         email: "john@example.com",
         id: "78e1e841",
         image: "https://example.com/url-to-user-avatar1.png",
         name: "John Smith",
       },
       {
         email: "kate@example.com",
         id: "F89d8069ba2b",
         image: "https://example.com/url-to-user-avatar2.png",
         name: "Kate Cage",
       },
     ],
   });
   ```

将 `example.com` 替换为提供头像图片的服务器地址，即您的**文档存储服务**或**文档编辑服务**可以访问的其他服务器。有关 ONLYOFFICE 文档 客户端-服务器交互的更多信息，请参阅[工作原理](./how-it-works.md)。
