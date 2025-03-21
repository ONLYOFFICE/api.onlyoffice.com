---
sidebar_position: -3
---

# 设置头像

参考图和以下步骤说明了在 ONLYOFFICE 文档中为用户设置头像的过程。

<img alt="设置头像" src="/assets/images/editor/avatars.png" width="720px" />

1. 用户发送请求以获取用户列表并在**文档编辑器**中设置他们的头像。
2. **文档编辑器**将请求通知**文档管理器**。
3. **文档管理器**将用户列表发送到**文档编辑器**，其中将显示他们的头像。
4. 用户在**文档编辑器**中打开评论或共同编辑者列表，其中用户的头像显示在其姓名附近。

## 在实践中如何做到这一点

1. 创建一个空的 *html* 文件来[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 要设置当前用户头像，请使用初始化配置的 [editorConfig.user.image](../../usage-api/config/editor/editor.md#user) 字段：

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     editorConfig: {
       user: {
         group: "Group1",
         id: "78e1e841",
         image: "https://example.com/url-to-user-avatar.png",
         name: "John Smith",
       },
     },
   })
   ```

3. 在文档编辑器初始化的配置脚本中，指定用于设置用户头像的事件处理程序。当用户打开评论或共同编辑者列表时，将调用 [onRequestUsers](../../usage-api/config/events.md#onrequestusers) 事件 *data.id* 参数。操作类型为 *info* 的 *data.c* 参数也会在此事件中传递。

  <img alt="评论里的头像" src="/assets/images/editor/avatars-comments.png" width="295px" />

  <img alt="共同编辑头像" src="/assets/images/editor/avatars-coediting.png" width="298px" />

  ``` ts
  function onRequestUsers(event) {
    const c = event.data.c
    const id = event.data.id
  }

  const docEditor = new DocsAPI.DocEditor("placeholder", {
    events: {
      onRequestUsers,
    },
  })
  ```

4. 为了设置用户的头像，必须调用 [setUsers](../../usage-api/methods.md#setusers) 方法：

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
  })
  ```

其中 **example.com** 是安装**文档管理器**和**文档存储服务**的服务器的名称。请参阅[工作原理](./how-it-works.md)部分，了解有关 ONLYOFFICE 文档服务客户端-服务器交互的更多信息。
