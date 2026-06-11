# FloatingOperationsButton

A floating button that displays a list of operations with progress tracking. Typically used to show background tasks such as file uploads, downloads, or conversions.

**Interface**: IFloatingOperationsButton.

To control the floating operations button, use the following actions in the [IMessage](../plugin-message.md) response:

- **Actions.addFloatingOperationsButton** - adds the button with `floatingOperationsButtonProps`.
- **Actions.updateFloatingOperationsButton** - updates the button state with `floatingOperationsButtonProps`.
- **Actions.removeFloatingOperationsButton** - removes the button.

To set the operation type, use [FloatingOperationType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IFloatingOperationsButton.ts): *download, convert, copy, duplicate, markAsRead, deletePermanently, exportIndex, move, trash, other, upload, deleteVersionFile, backup*.

## Parameters

### id

The unique identifier of the floating operations button.

Type: string

Example: `"my-upload-button"`

### operations

The list of operations displayed in the button. See [Operation parameters](#operation-parameters).

Type: IFloatingOperation[]

Example: `[uploadOperation]`

### operationsCompleted

Specifies whether all operations are completed.

Type: boolean

Example: `true`

### operationsAlert

Specifies whether any operation has an alert state.

Type: boolean

Example: `false`

### showCancelButton

Specifies whether the cancel all button is displayed.

Type: boolean

Example: `true`

### cancelOperation

A function called when the user clicks the cancel all button.

Type: func

Example: `() => {}`

### onCancelOperationFromList

A function called when the user cancels a specific operation. Receives the `operationId` of the cancelled operation.

Type: func

Example: `(operationId) => {}`

### onLoad

A function called when the button is mounted. Receives a `dispatchMessage` function that can be used to send [IMessage](../plugin-message.md) updates from inside asynchronous tasks.

Type: func

Example: `(dispatchMessage) => {}`

## Operation parameters

### id

The unique identifier of the operation.

Type: string

Example: `"upload-file-123"`

### label

The display name of the operation shown in the list.

Type: string

Example: `"Uploading report.pdf"`

### operation

The operation type.

Type: [FloatingOperationType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IFloatingOperationsButton.ts)

Example: `FloatingOperationType.Upload`

### alert

Specifies whether the operation is in an alert (error) state.

Type: boolean

Example: `false`

### completed

Specifies whether the operation is completed.

Type: boolean

Example: `false`

### percent

The progress of the operation as a percentage (0-100).

Type: number

Example: `42`

### icon

The icon displayed next to the operation label. Specify the icon file name from the plugin `assets` folder.

Type: string

Example: `"upload-16.png"`

## Example

``` ts
import {Actions, FloatingOperationType, type IFloatingOperation, type IFloatingOperationsButton, type IMessage} from "@onlyoffice/docspace-plugin-sdk"

const uploadOperation: IFloatingOperation = {
  id: "upload-file-123",
  label: "Uploading report.pdf",
  operation: FloatingOperationType.Upload,
  alert: false,
  completed: false,
  percent: 0,
}

export const floatingButtonProps: IFloatingOperationsButton = {
  id: "my-upload-button",
  operations: [uploadOperation],
  operationsCompleted: false,
  showCancelButton: true,
  cancelOperation: () => {
    const message: IMessage = {
      actions: [Actions.removeFloatingOperationsButton],
    }
    return message
  },
  onCancelOperationFromList: (operationId) => {
    floatingButtonProps.operations = floatingButtonProps.operations?.filter(
      (op) => op.id !== operationId,
    )
    const message: IMessage = {
      actions: [Actions.updateFloatingOperationsButton],
      floatingOperationsButtonProps: floatingButtonProps,
    }
    return message
  },
  onLoad: (dispatchMessage) => {
    // Start the upload and update progress via dispatchMessage
  },
}

// Add the button
const addMessage: IMessage = {
  actions: [Actions.addFloatingOperationsButton],
  floatingOperationsButtonProps: floatingButtonProps,
}
```
