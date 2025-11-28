# Type Alias: TFrameEvents

> **TFrameEvents** = `object`

Defined in: [types/index.ts:193](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L193)

The frame event handlers.

## Properties

### onAppError?

> `optional` **onAppError**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:195](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L195)

The function called when SDK is initialized with an error. This error is returned during the initialization.

***

### onAppReady?

> `optional` **onAppReady**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:197](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L197)

The function called when SDK is initialized successfully.

***

### onAuthSuccess?

> `optional` **onAuthSuccess**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:199](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L199)

The function called upon successful authorization.

***

### onCloseCallback?

> `optional` **onCloseCallback**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:201](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L201)

The function called in the "room-selector" and "file-selector" modes when the room or file selector is closed or the selection is canceled.

***

### onContentReady?

> `optional` **onContentReady**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:203](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L203)

The function called when the frame is loaded.

***

### onDownload?

> `optional` **onDownload**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:205](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L205)

The function called when download events are fired from the manager. The function returns a link to the download object. This event is triggered only when the "downloadToEvent" parameter is specified in the config.

***

### onEditorCloseCallback?

> `optional` **onEditorCloseCallback**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:207](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L207)

The function called when the document editor is closed.

***

### onNoAccess?

> `optional` **onNoAccess**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:209](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L209)

The function called when trying to initialize the frame in a room or folder that is inaccessible or has been deleted.

***

### onNotFound?

> `optional` **onNotFound**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:211](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L211)

The function called when trying to initialize the frame in a room or folder that is not found.

***

### onSelectCallback?

> `optional` **onSelectCallback**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:213](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L213)

The function called in the "room-selector" and "file-selector" modes when a room or file is selected, returning information about the selected item.

***

### onSignOut?

> `optional` **onSignOut**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:215](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L215)

The function called when logging out of the user account.

***

### onEditorOpen?

> `optional` **onEditorOpen**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:217](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L217)

The function called when the document editor is opened for creating or editing documents, or filling out forms, from the context menu, modal windows, panels, or hotkeys.

***

### onFileManagerClick?

> `optional` **onFileManagerClick**: `null` \| (`e?`) => `void`

Defined in: [types/index.ts:219](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L219)

The function called when a file is clicked in the list of files.
