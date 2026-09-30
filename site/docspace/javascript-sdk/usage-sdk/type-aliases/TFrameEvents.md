---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFrameEvents

Event handler map for the ONLYOFFICE Apps iframe. Passed via [TFrameConfig.events](TFrameConfig.md#events).
All handlers are optional — set to `null` (default) to disable.

Events are delivered from the iframe to the host via the `onEventReturn` postMessage type.
Each handler's description names the modes that emit the event; an event the portal sends
without data reaches the handler as an empty object (`{}`).

```ts
type TFrameEvents = object;
```

## Example

```typescript
sdk.initFrame({
  events: {
    onAppReady: () => console.log("ONLYOFFICE Apps loaded"),
    onAppError: (err) => console.error("Init error:", err),
    onSelectCallback: (item) => console.log("Selected:", item),
  },
  ...
});
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `onAppError`? | `null` \| ((`message`: `string`) => `void`) | Fired by the SDK itself, in every mode, on a CSP, message parsing, connection, method timeout or token failure. Receives the error message string. A portal API error does not fire it: the method's promise rejects instead. |
| `onAppReady`? | `null` \| ((`data`: `object`) => `void`) | Fired once, in every mode, when the ONLYOFFICE Apps frame is fully initialized and ready. [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom) without a valid [TFrameConfig.id](TFrameConfig.md#id) renders an "Invalid link" page and never fires it. |
| `onAuthError`? | `null` \| ((`error`: [`TAuthError`](TAuthError.md)) => `void`) | Fired in OAuth mode only, when no access token can be used. Receives a [TAuthError](TAuthError.md) whose `code` names the failure: the SDK could not resolve a token, the frame waited for one in vain, or the portal rejected it. The host should re-authenticate the user or destroy the frame; the frame itself shows a loader and never a sign-in page. |
| `onAuthSuccess`? | `null` \| ((`data`: `object`) => `void`) | Fired when the user completes a sign-in through a confirmation link opened inside the frame. Not fired by [SDKInstance.login](../classes/SDKInstance.md#login) or the OAuth flow, where [TFrameEvents.onAppReady](#onAppReady) is the sign of success. |
| `onCloseCallback`? | `null` \| (() => `void`) | Fired in selector modes ([SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector), [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector)) when the dialog is closed or canceled. |
| `onContentReady`? | `null` \| (() => `void`) | Fired when the iframe content is fully loaded and visible, in every mode. With [TFrameConfig.noLoader](TFrameConfig.md#noLoader) `true` the SDK fires it on the iframe's `load` event, otherwise when the portal calls [SDKInstance.setIsLoaded](../classes/SDKInstance.md#setisloaded); its order relative to [TFrameEvents.onAppReady](#onAppReady) is not guaranteed. |
| `onCustomAction`? | \| `null` \| ((`data`: [`TCustomActionEvent`](TCustomActionEvent.md)) => `void`) | Fired when a custom action from [TFrameConfig.customActions](TFrameConfig.md#customActions) or [SDKInstance.setCustomActions](../classes/SDKInstance.md#setcustomactions) is clicked in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) or [SDKMode.Forms](../enumerations/SDKMode.md#Forms). Receives a [TCustomActionEvent](TCustomActionEvent.md). |
| `onDownload`? | `null` \| ((`url`: `string`) => `void`) | Fired on file download when [TFrameConfig.downloadToEvent](TFrameConfig.md#downloadToEvent) is `true`, in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal). Receives the download URL. |
| `onEditorCloseCallback`? | `null` \| (() => `void`) | Fired in [SDKMode.Editor](../enumerations/SDKMode.md#Editor) and [SDKMode.Viewer](../enumerations/SDKMode.md#Viewer) when the document editor is closed (via UI button, hotkey, or programmatically) while [TFrameConfig.editorGoBack](TFrameConfig.md#editorGoBack) is `"event"`. |
| `onEditorOpen`? | \| `null` \| ((`file`: [`TEditorOpenPayload`](TEditorOpenPayload.md)) => `void`) | Fired in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom), [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal) when the frame is about to open the editor (row activation, context menu, hotkey, the "Create" dialog). Receives the file with the requested action — see [TEditorOpenPayload](TEditorOpenPayload.md). Registering the handler suppresses the portal's own editor: open the file in a frame of your own. |
| `onFileManagerClick`? | `null` \| ((`file`: [`TFileInfo`](TFileInfo.md)) => `void`) | Fired in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom), [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal) when a file row is activated in the list. Files only — a folder click navigates into the folder instead. Receives the portal's file object ([TFileInfo](TFileInfo.md)). Registering the handler suppresses the portal's own open action. |
| `onGetExternalData`? | \| `null` \| ((`req`: [`TGetExternalDataRequest`](TGetExternalDataRequest.md)) => `unknown` \| `Promise`\<`unknown`\>) | Fired when the ONLYOFFICE Apps iframe asks the host to read a value from external storage. The integrator returns the value currently stored for the given `key` (sync or `Promise`); the SDK posts it back to the iframe, correlating the response by `callId`. The meaning of `key` and the shape of the returned value are defined by the integrator — the SDK treats the payload as opaque. If the handler throws or its promise rejects, the error is routed to [TFrameEvents.onAppError](#onAppError) and no response is sent. |
| `onNavigate`? | `null` \| ((`data`: `object`) => `void`) | Fired when the user navigates to a different section in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) or [SDKMode.Personal](../enumerations/SDKMode.md#Personal). Receives the active section. |
| `onNoAccess`? | `null` \| (() => `void`) | Fired in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom) when navigating to an inaccessible or deleted room/folder, and in [SDKMode.Chat](../enumerations/SDKMode.md#Chat) when the frame has no signed-in, non-guest user. |
| `onNotFound`? | `null` \| (() => `void`) | Fired in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom) when navigating to a non-existent room/folder (404). |
| `onSelectCallback`? | \| `null` \| ((`selection`: \| [`TSelectedRoom`](TSelectedRoom.md)[] \| [`TSelectedFile`](TSelectedFile.md)) => `void`) | Fired in selector modes when a room or file is selected. [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector) passes an **array** of [TSelectedRoom](TSelectedRoom.md) (one element for a single choice); [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector) passes a single [TSelectedFile](TSelectedFile.md) object. |
| `onSetExternalData`? | \| `null` \| ((`payload`: [`TSetExternalDataPayload`](TSetExternalDataPayload.md)) => `void` \| `Promise`\<`void`\>) | Fired when the ONLYOFFICE Apps iframe asks the host to persist a value in external storage. Fire-and-forget: the SDK does not post a response back to the iframe. The handler may return a `Promise`; if the promise rejects (or the handler throws), the error is routed to [TFrameEvents.onAppError](#onAppError). The meaning of `key` and `value` is defined by the integrator — typically `value` is an object with user-scoped key/value pairs. |
| `onSignOut`? | `null` \| (() => `void`) | Fired when the user signs out through the portal's profile menu inside the frame. Not fired by [SDKInstance.logout](../classes/SDKInstance.md#logout). In OAuth mode the frame then stops asking for tokens until it is loaded again. |
| `onUploadError`? | \| `null` \| ((`data`: \| [`TUploadError`](TUploadError.md) \| [`TUploaderUploadError`](TUploaderUploadError.md)) => `void`) | Fired when an upload fails. [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader): a [TUploaderUploadError](TUploaderUploadError.md) for the dialog's own upload, including files refused by validation. [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal): a [TUploadError](TUploadError.md) for a file transferred with [SDKInstance.upload](../classes/SDKInstance.md#upload). |
| `onUploadProgress`? | `null` \| ((`data`: [`TUploadProgress`](TUploadProgress.md)) => `void`) | Fired in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) only, after every uploaded chunk of every file of the dialog's own upload. Receives a [TUploadProgress](TUploadProgress.md). Not fired for [SDKInstance.upload](../classes/SDKInstance.md#upload). |
| `onUploadSuccess`? | \| `null` \| ((`data`: \| [`TUploadResult`](TUploadResult.md) \| [`TUploaderUploadResult`](TUploaderUploadResult.md)[]) => `void`) | Fired when files are stored. [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader): once per batch of the dialog's own upload, with an array of [TUploaderUploadResult](TUploaderUploadResult.md). [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal): once per file transferred with [SDKInstance.upload](../classes/SDKInstance.md#upload), with a [TUploadResult](TUploadResult.md); the frame's own upload UI does not fire it there. |

</APITable>
