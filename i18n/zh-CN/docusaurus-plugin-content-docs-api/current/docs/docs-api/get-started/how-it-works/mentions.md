---
sidebar_position: -17
---

# 提及用户

以下图示和步骤解释了ONLYOFFICE文档中提及功能的工作原理。

<img alt="Create mentions" src="/assets/images/editor/mentions-create.png" width="720px" />

1. 用户在**文档编辑器**的评论字段中输入 `+` 或 `@`。
2. **文档编辑器**向**文档管理器**请求可以被提及的用户列表。
3. **文档管理器**将用户列表返回给**文档编辑器**，并显示在评论字段下方。
4. 用户选择姓名、输入评论并提交。
5. **文档编辑器**将评论文本、被提及用户的电子邮件列表以及操作链接数据发送给**文档管理器**。

## 实际操作方法 {#how-this-can-be-done-in-practice}

1. 创建一个 `.html` 文件以[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在编辑器初始化配置中，定义 [onRequestUsers](../../usage-api/config/events.md#onrequestusers) 事件处理程序。当用户在评论中输入 `+` 或 `@` 时，编辑器会调用此处理程序，并将 `event.data.c` 设置为 `"mention"`。您的代码必须调用 [setUsers](../../usage-api/methods.md#setusers) 方法来返回可提及的用户列表：

   <img alt="onRequestUsers" src="/assets/images/editor/onRequestUsers.png" width="309px" />

   ``` ts
   function onRequestUsers(event) {
     docEditor.setUsers({
       c: event.data.c,
       users: [
         {
           email: "john@example.com",
           name: "John Smith",
         },
         {
           email: "kate@example.com",
           name: "Kate Cage",
         },
       ],
     });
   }
   
   const config = {
     events: {
       onRequestUsers,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 定义 [onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify) 事件处理程序，用于向被提及的用户发送通知。当用户提交包含提及的评论时，编辑器会调用此处理程序，传递以下参数：

   - `event.data.message` — 评论文本
   - `event.data.emails` — 被提及用户的电子邮件地址列表
   - `event.data.actionLink` — 描述评论在文档中位置的对象

   :::note
   只有设置了 `onRequestSendNotify` 事件后，评论字段中的 `+` / `@` 提及按钮才会显示。在5.4版本中，`onRequestSendNotify` 只有在设置了 [onRequestUsers](../../usage-api/config/events.md#onrequestusers) 的情况下才能使用。从5.5版本开始，两个事件可以独立设置。
   :::

   ``` ts
   function onRequestSendNotify(event) {
     const ACTION_DATA = event.data.actionLink;
     const comment = event.data.message;
     const emails = event.data.emails;
     NOTIFY_USERS(emails, comment, ACTION_DATA);
   }
   
   const config = {
     events: {
       onRequestSendNotify,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   `NOTIFY_USERS` 是您的服务端逻辑的占位符，用于向被提及的用户发送通知。请包含 `ACTION_DATA`，以便通知链接能够在文档中直接打开评论位置。

## 打开评论

<img alt="Open action link" src="/assets/images/editor/actionLink-open.png" width="720px" />

1. 被提及的用户通过通知中的链接（例如电子邮件）打开文档，导航到**文档管理器**。
2. **文档管理器**使用包含评论位置数据的 [`actionLink`](../../usage-api/config/editor/editor.md#actionlink) 参数初始化**文档编辑器**的 [`config`](../../usage-api/config/config.md)。
3. **文档编辑器**打开文档并滚动到评论位置。

与[操作链接](./action-link.md#opening-the-bookmark)类似，将从 [onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify) 事件中获取的 `actionLink` 对象作为 [`editorConfig.actionLink`](../../usage-api/config/editor/editor.md#actionlink) 的值传递：

``` ts
const config = {
  editorConfig: {
    actionLink: ACTION_DATA,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## 共享设置

当 [onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify) 触发时，集成商负责向被提及的用户授予文件访问权限，并向其发送包含操作链接的通知。

如果文档配置中已包含 [`document.info.sharingSettings`](../../usage-api/config/document/info.md#sharingsettings) 列表，且提及后用户集合发生变化，请调用 [setSharingSettings](../../usage-api/methods.md#setsharingsettings) 方法更新显示的共享列表：

![共享设置](/assets/images/editor/sharing-settings.png#gh-light-mode-only)![共享设置](/assets/images/editor/sharing-settings.dark.png#gh-dark-mode-only)

``` ts
docEditor.setSharingSettings({
  sharingSettings: [
    {
      permissions: "Full Access",
      user: "John Smith",
    },
    {
      isLink: true,
      permissions: "Read Only",
      user: "External link",
    },
  ],
});
```

如果 [onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify) 未向被提及的用户授予文件访问权限，请将 [`mentionShare`](../../usage-api/config/editor/customization/customization-standard-branding.md#mentionshare) 设置为 `false` 以隐藏评论中的共享界面。

<img alt="Mentions" src="/assets/images/editor/mentionShare.png" width="379px" />
