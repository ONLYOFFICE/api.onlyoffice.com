---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFrameEvents

Event handler map for the ONLYOFFICE Apps iframe. Passed via [TFrameConfig.events](TFrameConfig.md#events).
All handlers are optional — set to `null` (default) to disable.

Events are delivered from the iframe to the host via the `onEventReturn` postMessage type.

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
| `onAppError`? | `null` \| ((`message`: `string`) => `void`) | Fired when ONLYOFFICE Apps encounters an initialization or runtime error. Receives the error message string. |
| `onAppReady`? | `null` \| ((`data`: `object`) => `void`) | Fired once when the ONLYOFFICE Apps frame is fully initialized and ready. |
| `onAuthError`? | `null` \| ((`error`: `object`) => `void`) | Fired (OAuth mode) when the SDK cannot resolve an access token — [TFrameConfig.getToken](TFrameConfig.md#getToken) threw/rejected, or is missing. The host should re-authenticate or surface the failure. |
| `onAuthSuccess`? | `null` \| ((`data`: `object`) => `void`) | Fired after successful user authorization inside the iframe. |
| `onCloseCallback`? | `null` \| (() => `void`) | Fired in selector modes ([SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector), [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector)) when the dialog is closed or canceled. |
| `onContentReady`? | `null` \| (() => `void`) | Fired when the iframe content is fully loaded and visible. Triggered internally by [SDKInstance.setIsLoaded](../classes/SDKInstance.md#setisloaded). |
| `onCustomAction`? | `null` \| ((`data`: `object`) => `void`) | Fired when a custom context menu action is clicked in [SDKMode.Forms](../enumerations/SDKMode.md#Forms). Receives action key and item data. |
| `onDownload`? | `null` \| ((`url`: `string`) => `void`) | Fired on file download when [TFrameConfig.downloadToEvent](TFrameConfig.md#downloadToEvent) is `true`. Receives the download URL. |
| `onEditorCloseCallback`? | `null` \| (() => `void`) | Fired when the document editor is closed (via UI button, hotkey, or programmatically). |
| `onEditorOpen`? | \| `null` \| ((`file`: [`TEditorOpenPayload`](TEditorOpenPayload.md)) => `void`) | Fired when the manager is about to open the editor (row activation, context menu, hotkey, the "Create" dialog). Receives the file with the requested action — see [TEditorOpenPayload](TEditorOpenPayload.md). Registering the handler suppresses the portal's own editor: open the file in a frame of your own. |
| `onFileManagerClick`? | `null` \| ((`file`: [`TFileInfo`](TFileInfo.md)) => `void`) | Fired when a file row is activated in the manager list. Files only — a folder click navigates into the folder instead. Receives the portal's file object ([TFileInfo](TFileInfo.md)). Registering the handler suppresses the portal's own open action. |
| `onGetExternalData`? | \| `null` \| ((`req`: [`TGetExternalDataRequest`](TGetExternalDataRequest.md)) => `unknown` \| `Promise`\<`unknown`\>) | Fired when the ONLYOFFICE Apps iframe asks the host to read a value from external storage. The integrator returns the value currently stored for the given `key` (sync or `Promise`); the SDK posts it back to the iframe, correlating the response by `callId`. The meaning of `key` and the shape of the returned value are defined by the integrator — the SDK treats the payload as opaque. If the handler throws or its promise rejects, the error is routed to [TFrameEvents.onAppError](#onAppError) and no response is sent. |
| `onNavigate`? | `null` \| ((`data`: `object`) => `void`) | Fired when the user navigates to a different section in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) or [SDKMode.Personal](../enumerations/SDKMode.md#Personal). Receives the active section. |
| `onNoAccess`? | `null` \| (() => `void`) | Fired when navigating to an inaccessible or deleted room/folder. |
| `onNotFound`? | `null` \| (() => `void`) | Fired when navigating to a non-existent room/folder (404). |
| `onSelectCallback`? | \| `null` \| ((`selection`: \| [`TSelectedRoom`](TSelectedRoom.md)[] \| [`TSelectedFile`](TSelectedFile.md)) => `void`) | Fired in selector modes when a room or file is selected. [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector) passes an **array** of [TSelectedRoom](TSelectedRoom.md) (one element for a single choice); [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector) passes a single [TSelectedFile](TSelectedFile.md) object. |
| `onSetExternalData`? | \| `null` \| ((`payload`: [`TSetExternalDataPayload`](TSetExternalDataPayload.md)) => `void` \| `Promise`\<`void`\>) | Fired when the ONLYOFFICE Apps iframe asks the host to persist a value in external storage. Fire-and-forget: the SDK does not post a response back to the iframe. The handler may return a `Promise`; if the promise rejects (or the handler throws), the error is routed to [TFrameEvents.onAppError](#onAppError). The meaning of `key` and `value` is defined by the integrator — typically `value` is an object with user-scoped key/value pairs. |
| `onSignOut`? | `null` \| (() => `void`) | Fired when the user signs out from the portal. |
| `onUploadError`? | `null` \| ((`data`: `object`) => `void`) | Fired when a file upload fails. Works in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms) modes. |
| `onUploadProgress`? | `null` \| ((`data`: `object`) => `void`) | Fired on file upload progress update. [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) mode only. |
| `onUploadSuccess`? | `null` \| ((`data`: `object`) => `void`) | Fired when a file upload completes successfully. Works in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms) modes. |

</APITable>
