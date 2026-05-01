---
sidebar_position: -1
---

# Lifecycle of opening editor

The lifecycle of [opening](./opening-file.md) the editor is defined by a sequence of events that the API fires at each stage. Handling these events in your integration lets you respond to state changes — from initial load through document readiness to closing.

## onAppReady

When the document editor is loaded into the browser, the [onAppReady](../../usage-api/config/events.md#onappready) event fires. At this point the editor frame is ready but the document itself has not loaded yet. After this event, you can call the [showMessage](../../usage-api/methods.md#showmessage) method to display a tooltip with a message to the user.

## onError

When an error occurs during loading — for example, a conversion error or a failure to load an editor component — the [onError](../../usage-api/config/events.md#onerror) event fires. The editor is not usable after this event; your integration should handle the error and, if needed, reinitialize the editor.

## onRequestRefreshFile

When the editor is opened with a [`key`](../../usage-api/config/document/document.md#key) that was already used to save a file, the [onRequestRefreshFile](../../usage-api/config/events.md#onrequestrefreshfile) event fires. This means the document has a newer saved version. In your event handler, call the [refreshFile](../../usage-api/methods.md#refreshfile) method with a new `key` value to update the file version without reloading the editor.

## onUserActionRequired

When user action is required before the document can be opened, the [onUserActionRequired](../../usage-api/config/events.md#onuseractionrequired) event fires. This happens when the user needs to enter a password to open a protected document, or select an encoding or a delimiter for `txt` or `csv` files.

## onDocumentReady

When the document is loaded and the editor is ready for work, the [onDocumentReady](../../usage-api/config/events.md#ondocumentready) event fires. After this event, you can send requests to the [Automation API](../../usage-api/automation-api/automation-api.md) to interact with the document content programmatically.

The `onRequestRefreshFile` event can also fire after `onDocumentReady` in the following scenario:

1. The document has been modified.
2. The Internet connection has been lost.
3. The document has been saved successfully.
4. The editor has reconnected to the server.

## onRequestClose

When the user clicks the cross button to close the editor, the [onRequestClose](../../usage-api/config/events.md#onrequestclose) event fires.

It is recommended to call the [requestClose](../../usage-api/methods.md#requestclose) method before [destroyEditor](../../usage-api/methods.md#destroyeditor) to check for unsaved data. If unsaved data exists, a dialog asks the user whether to continue editing or close the editor and lose all unsaved changes. If the user chooses to close, the `onRequestClose` event fires.

The [destroyEditor](../../usage-api/methods.md#destroyeditor) method destroys the `docEditor` object. Use it when you need to reinitialize the editor with a different configuration.
