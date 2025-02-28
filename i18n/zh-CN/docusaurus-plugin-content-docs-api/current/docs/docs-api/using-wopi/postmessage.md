---
sidebar_position: -4
---

# PostMessage

[PostMessage](https://learn.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/scenarios/postmessage) 是 [HTML5 Web 消息传递](https://html.spec.whatwg.org/multipage/web-messaging.html#posting-messages) 协议，它允许在 iframe 存储和 ONLYOFFICE 文档之间在浏览器中交换消息。它允许online office框架与其父主机页面进行通信。

``` ts
otherWindow.postMessage(msg, targetOrigin)
```

## 参数

### msg

消息数据：

类型: string 或 JSON 对象

#### msg.MessageId

消息名称

类型: string

例如: "App\_LoadingStatus"

#### msg.SendTime

消息发送的时间，以 UTC 1970 年 1 月 1 日午夜以来的毫秒数表示。

类型: integer

例如: 1329014075000

#### msg.Values

消息属性。

类型: JSON 对象。

### targetOrigin

*otherWindow* 原点必须是要调度的事件。它将被设置为 *CheckFileInfo*中提供的 [PostMessageOrigin](./wopi-rest-api/checkfileinfo.md#postmessageorigin) 属性。

\*otherWindow* 是对 *msg* 将被发布到的另一个窗口的引用。

类型: string

在这里，您可以找到可供 ONLYOFFICE 文档发送到主机页面的消息。Online office接收消息的过程将在稍后提供。

## 可用消息

### App\_LoadingStatus

此消息是在加载online office应用程序框架后被发布的。在主机收到此消息之前，它必须假定online office 框架无法对除 [Host\_PostmessageReady](#host_postmessageready) 之外的任何传入消息做出反应。

### Blur\_Focus

主机发布这条消息是为了阻止在线办公应用程序抢占焦点。每当在在线办公框架上绘制主机应用程序 UI 时，主机应发送此消息，以便在线办公应用程序不会干扰主机 UI 行为。每当在在线办公框架上绘制主机应用程序UI时，主机应发送此消息，以便在线办公应用程序不会干扰主机UI行为。此消息仅用于编辑模式。它不影响视图模式。

### Edit\_Notification

此消息在用户首次对文档进行编辑时被发布，此后每五分钟被发布一次(如果用户在过去五分钟内进行了编辑)。主机可以使用此消息来衡量用户是否正在与online office进行交互。在共同创作会话中，主机不能为此目的使用 WOPI 调用。

### File\_Rename

当用户重命名online office中的当前文件时，会发布此消息。主机可以使用此消息选择性地更新 UI，例如页面标题。

### Grab\_Focus

此消息由主机发布，以恢复在线办公应用程序的积极抢占焦点。每当在线办公框架上绘制的主机应用程序 UI 关闭时，主机应发送此消息。 这使在线办公应用程序恢复运行。此消息仅用于编辑模式。它不影响视图模式。

### Host\_PostmessageReady

此消息由主机在完成加载时发布。 然后在线办公框架收到*Host_PostmessageReady*，完成加载，并将 [App\_LoadingStatus](#app_loadingstatus) 消息发送到主机页面。之后，所有其他 PostMessage 消息都可用。

### UI\_Close

由于错误或用户操作，online office 应用程序关闭时会发布此消息。要发送此消息，来自主机的 *CheckFileInfo* 响应中的 [ClosePostMessage](./wopi-rest-api/checkfileinfo.md#closepostmessage) 属性必须设置为**true**。否则，online office 将不会发送此消息。

### UI\_Edit

当用户激活online office中的 *编辑* UI 时，会发送此消息。此 UI 仅在使用视图操作时可见。要发送此消息，来自主机的 *CheckFileInfo* 响应中的 [EditModePostMessage](./wopi-rest-api/checkfileinfo.md#editmodepostmessage) 属性必须设置为 **true**。否则，online office将不会发送此消息，而是会将内部 iframe 重定向到编辑操作 URL。

### UI\_FileVersions

当用户在online office中激活 *以前的版本* UI 时，会发布此消息。主机应使用此消息来触发任何自定义文件版本历史 UI。要发送此消息，来自主机的 *CheckFileInfo* 响应中的 [FileVersionPostMessage](./wopi-rest-api/checkfileinfo.md#fileversionpostmessage) 属性必须设置为 **true**。 否则，online office将不会发送此消息。

### UI\_Sharing

当用户激活online office中的 *共享* UI 时，会发布此消息。主机应使用此消息来触发任何自定义共享 UI。要发送此消息，来自主机的 *CheckFileInfo* 响应中的 [FileSharingPostMessage](./wopi-rest-api/checkfileinfo.md#filesharingpostmessage) 属性必须设置为 **true**。否则，online office将不会发送此消息。

## Collabora特性

### Action\_InsertGraphic

发布此消息是为了从 URL 下载图像并将其插入到文档中。

### UI\_InsertGraphic

发布此消息以显示用户界面元素（例如，对话框），允许用户从集成中选择图像。该集成应该提供一个可以下载一次的临时 URL，通过 [Action\_InsertGraphic](#action_insertgraphic) 消息将 *Values* 设置为临时 URL，将其返回。

> 请注意，PostMessage 消息的优先级高于 *CheckFileInfo*中提供的 [CloseUrl](./wopi-rest-api/checkfileinfo.md#closeurl), [HostEditUrl](./wopi-rest-api/checkfileinfo.md#hostediturl), [FileSharingUrl](./wopi-rest-api/checkfileinfo.md#filesharingurl), [FileVersionUrl](./wopi-rest-api/checkfileinfo.md#fileversionurl) 属性。
