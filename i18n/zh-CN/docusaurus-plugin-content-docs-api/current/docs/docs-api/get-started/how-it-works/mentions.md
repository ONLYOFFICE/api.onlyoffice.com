---
sidebar_position: -17
---

# 提及用户

以下参考图和步骤解释了在ONLYOFFICE文档中在评论中提及用户的过程。

<img alt="Create mentions" src="/assets/images/editor/mentions-create.png" width="720px" />

1. 用户在**文档编辑器**的评论字段中输入 **+**号，发送获取要提及的用户列表的请求。
2. **文档编辑器**将该请求告知**文档管理器**。
3. **文档管理器**将用户列表发送给**文档编辑器**，该列表将显示在评论字段下方。 
4. 用户在**文档编辑器**的评论字段中输入评论，该评论将添加到文档中。
5. **文档编辑器**将消息、电子邮件列表以及文档中的链接操作发送给**文档管理器**。

## 实际操作方法 {#how-this-can-be-done-in-practice}

1.创建一个空的*html*文件，用于[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在文档编辑器初始化的配置脚本中，指定用于显示在评论中提及用户提示的事件处理程序。当用户输入 **+**号时，将调用[onRequestUsers](../../usage-api/config/events.md#onrequestusers)事件，评论者可以选择其他用户以便在评论中提及。在该事件中会传递带有*mention*操作类型的*data.c*参数。

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
     })
   };
   
   const config = {
     events: {
       onRequestUsers,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 为了在评论字段下方设置用户列表，必须调用[setUsers](../../usage-api/methods.md#setusers)方法：

   ``` ts
   docEditor.setUsers({
     c: "mention",
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
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。有关ONLYOFFIC文档服务客户端-服务器交互的更多信息，请参阅工作原理部分。[工作原理](./how-it-works.md)部分。

## 打开评论

<img alt="Open action link" src="/assets/images/editor/actionLink-open.png" width="720px" />

1. 用户点击**文档管理器**中的链接。
2. **文档管理器**将初始化的*editorConfig*发送给**文档编辑器**。
3. **文档编辑器**将文档滚动到评论所在位置。

在文档编辑器初始化的配置脚本中，指定用于发送评论消息和电子邮件列表的事件处理程序。当用户添加评论时，将调用[onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify)事件。消息和电子邮件列表将在*data*参数中发送。评论数据将在*data.actionLink*参数中接收。与在书签中添加[操作链接](./action-link.md#how-this-can-be-done-in-practice)的情况一样，在配置中必须使用*actionLink*对象作为[editorConfig.actionLink](../../usage-api/config/editor/editor.md#actionlink)参数的值。

> 在5.4版本中，只有在设置了[onRequestUsers](../../usage-api/config/events.md#onrequestusers)事件的情况下，才能使用**onRequestSendNotify**事件。从5.5版本开始，**onRequestSendNotify**和**onRequestUsers**之间不存在这种依赖关系，两者可以独立设置。

``` ts
function onRequestSendNotify(event) {
  const ACTION_DATA = event.data.actionLink
  const comment = event.data.message
  const emails = event.data.emails
};

const config = {
  events: {
    onRequestSendNotify,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## 共享设置

当调用[onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify)事件时，软件集成商提供对文件的访问权限，并向被提及的用户发送带有操作链接的通知，该链接可用于滚动到文档中的评论位置。

如果在文档初始化中使用了[document.info.sharingSettings](../../usage-api/config/document/info.md#sharingsettings)字段，但[onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify)事件中的用户列表与之不同，则必须调用[setSharingSettings](../../usage-api/methods.md#setsharingsettings)方法。

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

如果[onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify)件未提供对文件的访问权限，则必须将编辑器配置的自定义部分中的[mentionShare](../../usage-api/config/editor/customization/customization-standard-branding.md#mentionshare)参数设置为**false**。

> 请注意，只有在设置了[onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify)事件的情况下，此设置才对评论有效。

<img alt="Mentions" src="/assets/images/editor/mentionShare.png" width="379px" />
