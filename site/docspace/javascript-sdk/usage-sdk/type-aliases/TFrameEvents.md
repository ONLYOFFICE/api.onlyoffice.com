---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFrameEvents

The frame event handlers.

```ts
type TFrameEvents = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `onAppError`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when SDK is initialized with an error. This error is returned during the initialization. |
| `onAppReady`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when SDK is initialized successfully. |
| `onAuthSuccess`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called upon successful authorization. |
| `onCloseCallback`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called in the "room-selector" and "file-selector" modes when the room or file selector is closed or the selection is canceled. |
| `onContentReady`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when the frame is loaded. |
| `onDownload`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when download events are fired from the manager. The function returns a link to the download object. This event is triggered only when the "downloadToEvent" parameter is specified in the config. |
| `onEditorCloseCallback`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when the document editor is closed. |
| `onEditorOpen`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when the document editor is opened for creating or editing documents, or filling out forms, from the context menu, modal windows, panels, or hotkeys. |
| `onFileManagerClick`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when a file is clicked in the list of files. |
| `onNoAccess`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when trying to initialize the frame in a room or folder that is inaccessible or has been deleted. |
| `onNotFound`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when trying to initialize the frame in a room or folder that is not found. |
| `onSelectCallback`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called in the "room-selector" and "file-selector" modes when a room or file is selected, returning information about the selected item. |
| `onSignOut`? | `null` \| ((`e?`: `Event` \| `object` \| `string`) => `void`) | The function called when logging out of the user account. |

</APITable>
