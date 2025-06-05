---
sidebar_position: -4
---

# PostMessage

[PostMessage](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/scenarios/postmessage) is the [HTML5 Web Messaging](https://html.spec.whatwg.org/multipage/web-messaging.html#posting-messages) protocol which allows exchanging messages in the browser between the iframe storage and ONLYOFFICE Docs. It allows the online office frame to communicate with its parent host page.

``` ts
otherWindow.postMessage(msg, targetOrigin)
```

## Parameters

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name          | Type                  | Example                     | Description                                                                                                                                                                                                                                                                                        |
|---------------|-----------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| msg           | string or JSON object |                             | The message data.                                                                                                                                                                                                                                                                                  |
| msg.MessageId | string                | "App\_LoadingStatus"        | The [message name](#available-messages).                                                                                                                                                                                                                                                                                  |
| msg.SendTime  | integer               | 1329014075000               | The time the message was sent, expressed as milliseconds since midnight 1 January 1970 UTC.                                                                                                                                                                                                        |
| msg.Values    | JSON object           | `{"key": "value"}`          | The message properties.                                                                                                                                                                                                                                                                            |
| targetOrigin  | string                | `https://exampledomain.com` | The *otherWindow* origin that must be for the event to be dispatched. It will be set to the [PostMessageOrigin](./wopi-rest-api/checkfileinfo.md#PostMessageOrigin) property provided in *CheckFileInfo*.<br /><br />**otherWindow* is a reference to another window that *msg* will be posted to. |

```mdx-code-block
</APITable>
```

Here you can find the messages that are available for ONLYOFFICE Docs to send to the host page. The process of receiving messages by the online office will be available later.

## Available messages

```mdx-code-block
<APITable>
```

| Name                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| App\_LoadingStatus     | This message is posted after the online office application frame was loaded. Until the host receives this message, it must assume that the online office frame cannot react to any incoming messages except [Host\_PostmessageReady](#Host_PostmessageReady).                                                                                                                                                                                           |
| Blur\_Focus            | This message is posted by the host to stop the online office application from aggressively grabbing focus. Hosts should send this message whenever the host application UI is drawn over the online office frame so that the online office application does not interfere with the host UI behavior. This message is used only for the edit modes. It does not affect view modes.                                                                       |
| Edit\_Notification     | This message is posted when the user first makes an edit to a document, and every five minutes thereafter, if the user has made edits over the last five minutes. Hosts can use this message to gauge whether users are interacting with the online office. In co-authoring sessions, hosts cannot use the WOPI calls for this purpose.                                                                                                                 |
| File\_Rename           | This message is posted when the user renames the current file in the online office. The host can use this message to optionally update the UI, such as the page title.                                                                                                                                                                                                                                                                                  |
| Grab\_Focus            | This message is posted by the host to resume aggressively grabbing focus by the online office application. Hosts should send this message whenever the host application UI that's drawn over the online office frame is closing. This lets the online office application resume functioning. This message is used only for the edit modes. It does not affect view modes.                                                                               |
| Host\_PostmessageReady | This message is posted by the host when it finishes loading. Then the online office frame receives *Host\_PostmessageReady*, finishes loading, and sends the [App\_LoadingStatus](#App_LoadingStatus) message to the host page. After that, all the other PostMessage messages become available.                                                                                                                                                        |
| UI\_Close              | This message is posted when the online office application is closing, either due to an error or a user action. To send this message, the [ClosePostMessage](./wopi-rest-api/checkfileinfo.md#ClosePostMessage) property in the *CheckFileInfo* response from the host must be set to **true**. Otherwise, the online office will not send this message.                                                                                                 |
| UI\_Edit               | This message is posted when the user activates the *Edit* UI in the online office. This UI is only visible when using the view action. To send this message, the [EditModePostMessage](./wopi-rest-api/checkfileinfo.md#EditModePostMessage) property in the *CheckFileInfo* response from the host must be set to **true**. Otherwise, the online office will not send this message and will redirect the inner iframe to the edit action URL instead. |
| UI\_FileVersions       | This message is posted when the user activates the *Previous Versions* UI in the online office. The host should use this message to trigger any custom file version history UI. To send this message, the [FileVersionPostMessage](./wopi-rest-api/checkfileinfo.md#FileVersionPostMessage) property in the *CheckFileInfo* response from the host must be set to **true**. Otherwise, the online office will not send this message.                    |
| UI\_Sharing            | This message is posted when the user activates the *Share* UI in the online office. The host should use this message to trigger any custom sharing UI. To send this message, the [FileSharingPostMessage](./wopi-rest-api/checkfileinfo.md#FileSharingPostMessage) property in the *CheckFileInfo* response from the host must be set to **true**. Otherwise, the online office will not send this message.                                             |

```mdx-code-block
</APITable>
```

## Collabora specific

```mdx-code-block
<APITable>
```

| Name                  | Description                                                                                                                                                                                                                                                                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Action\_InsertGraphic | This message is posted to download an image from the URL and insert it into the document.                                                                                                                                                                                                                                                                 |
| UI\_InsertGraphic     | This message is posted to display a user interface element (for example, a dialog) allowing the user to pick an image from the integration. The integration is supposed to provide a temporary URL that may be downloaded once, and return it back via the [Action\_InsertGraphic](#Action_InsertGraphic) message with *Values* set to the temporary URL. |

```mdx-code-block
</APITable>
```

> Please note that the PostMessage messages have the higher priority than the [CloseUrl](./wopi-rest-api/checkfileinfo.md#CloseUrl), [HostEditUrl](./wopi-rest-api/checkfileinfo.md#HostEditUrl), [FileSharingUrl](./wopi-rest-api/checkfileinfo.md#FileSharingUrl), [FileVersionUrl](./wopi-rest-api/checkfileinfo.md#FileVersionUrl) properties provided in *CheckFileInfo*.
