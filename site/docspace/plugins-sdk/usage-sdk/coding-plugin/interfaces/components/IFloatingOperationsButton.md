# IFloatingOperationsButton

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IFloatingOperationsButton.ts#L174)

Configuration for the floating operations button.
Used to display progress of long-running operations (upload, conversion, backup, etc.)
The button appears as a floating action button in the bottom-right corner of DocSpace.

To display the button, return an [`IMessage`](../utils.md#imessage) with
[`Actions.addFloatingOperationsButton`](../../enums/Actions.md#addfloatingoperationsbutton) in `actions`
and pass the configuration in `floatingOperationsButtonProps`.
Use [`Actions.updateFloatingOperationsButton`](../../enums/Actions.md#updatefloatingoperationsbutton)
to update the progress and
[`Actions.removeFloatingOperationsButton`](../../enums/Actions.md#removefloatingoperationsbutton)
(with `floatingOperationsButtonPropsId`) to remove the button.

![floatingoperationsbutton](/assets/images/docspace/floatingoperationsbutton.png#gh-light-mode-only)![floatingoperationsbutton](/assets/images/docspace/floatingoperationsbutton.dark.png#gh-dark-mode-only)

## Example

Demonstrates a floating operations button with simulated upload progress,
allowing users to cancel the process or remove individual operations while
preventing a new upload until the current one finishes.

```typescript
import {
  IFloatingOperationsButton,
  FloatingOperationType,
  Actions,
  IContextMenuItem,
  FilesType,
} from "@onlyoffice/docspace-plugin-sdk";

const operations = [
  {
      id: "upload-document",
      label: "Uploading document.pdf",
      operation: FloatingOperationType.Upload,
      alert: false,
      completed: false,
      percent: 0,
      // custom icon from assets
      icon: "upload.svg",
  },
  {
      id: "convert-image",
      label: "Converting image.jpg",
      operation: FloatingOperationType.Convert,
      alert: false,
      completed: false,
      percent: 0,
  }
]

// flag to check if upload is in progress
let isUpload = false;
let intervalId: NodeJS.Timeout | null = null;

export const uploadButton: IFloatingOperationsButton = {
  id: "upload-button",
  operationsCompleted: false,
  operationsAlert: false,
  // show cancel button when there is only one operation left
  showCancelButton: true,

  cancelOperation: () => {
      // reset interval and flags
      intervalId && clearInterval(intervalId);
      isUpload = false;
      intervalId = null;
      // send message to remove floating operations from button
      return {
          actions: [Actions.removeFloatingOperationsButton],
          floatingOperationsButtonPropsId: uploadButton.id,
      };
  },

  onCancelOperationFromList: (id) => {
      // remove operation from list
      const filteredOps = uploadButton.operations?.filter(
          (op) => op.id !== id
      ) ?? [];

      // update operations
      uploadButton.operations = filteredOps;

      // send message to update floating operations button
      return {
          actions: [Actions.updateFloatingOperationsButton],
          floatingOperationsButtonProps: uploadButton,
      };
  },

  // event on add floating operations in button
  onLoad: (dispatchMessage) => {
      let progress = 0;
      isUpload = true;

      // update progress every 400ms
      intervalId = setInterval(() => {
          progress += 5;

          // update progress for each operation
          const operations = uploadButton.operations?.map((op) => ({
              ...op,
              percent: progress,
              completed: progress >= 100,
          })) ?? [];

          uploadButton.operations = operations;

          // update operations completed
          uploadButton.operationsCompleted = progress >= 100;

          // send message to update floating operations button
          dispatchMessage({
              actions: [Actions.updateFloatingOperationsButton],
              floatingOperationsButtonProps: uploadButton,
          });

          // stop interval if progress is 100
          if (progress >= 100) {
              // reset interval and flags
              intervalId && clearInterval(intervalId);
              isUpload = false;
              intervalId = null;
          }
      }, 400);
  },
};

export const uploadMenuItem: IContextMenuItem = {
  key: "upload-files",
  label: "Upload with progress",
  icon: "upload.svg",
  fileType: [FilesType.file],
  onClick: () => {
      // if upload is in progress, do not allow to start new upload
      if (isUpload) {
          return;
      }

      // Reset operations from previous upload
      uploadButton.operations = structuredClone(operations);
      uploadButton.operationsCompleted = false;
      uploadButton.operationsAlert = false;

      // send message to add floating operations in button
      return {
          actions: [Actions.addFloatingOperationsButton],
          floatingOperationsButtonProps: uploadButton,
      };
  },
};
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable name="IFloatingOperationsButton">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Unique identifier for floating operations. Used to track and update operations from the same plugin. When Actions.addFloatingOperationsButton is called again with the same identifier, the existing operations are preserved rather than replaced. Use Actions.updateFloatingOperationsButton to update the state. |
| `operations?` | [`IFloatingOperation`](#ifloatingoperation)[] | Array of operations to display in the floating button. Each operation shows as a row with icon, label, and progress indicator. Operations from multiple plugins are aggregated and displayed together. |
| `operationsCompleted?` | `boolean` | Flag indicating all operations are completed. When true, the button shows a green checkmark and "completed" status. User can then dismiss the button or review completed operations. |
| `operationsAlert?` | `boolean` | Flag indicating at least one operation has an error. When true, the button shows a red warning indicator. |
| `showCancelButton?` | `boolean` | Controls the visibility of the cancel button. Cancel button is displayed only if the floating button contains only one operation from the plugin and this flag is set to true. |
| `cancelOperation?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | Callback executed when user clicks the cancel button in the floating button. |
| `onCancelOperationFromList?` | (`operationId`: `string`) => [`TReturnMessage`](../utils.md#treturnmessage) | Callback executed when user closes a specific operation from the operations list. Receives the operation ID. Typically returns Actions.updateFloatingOperationsButton with the updated operations list. |
| `onLoad?` | (`dispatchMessage`: (`message`: [`IMessage`](../utils.md#imessage)) => `void`) => [`TReturnMessage`](../utils.md#treturnmessage) | Lifecycle callback executed once when floating operations button with given id is displayed for the first time. Receives a dispatchMessage function to send updates back to DocSpace. Use this to initialize progress tracking or update. |

```mdx-code-block
</APITable>
```

***

## FloatingOperationType

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IFloatingOperationsButton.ts#L235)

Determines the icon and visual representation of the operation.

### Enumeration Members

#### Download

```ts
Download: "download";
```

File download operation

#### Convert

```ts
Convert: "convert";
```

File conversion operation

#### Copy

```ts
Copy: "copy";
```

File copy operation

#### Duplicate

```ts
Duplicate: "duplicate";
```

File duplication operation

#### MarkAsRead

```ts
MarkAsRead: "markAsRead";
```

Mark as read operation

#### DeletePermanently

```ts
DeletePermanently: "deletePermanently";
```

Permanent deletion operation

#### ExportIndex

```ts
ExportIndex: "exportIndex";
```

Export index operation

#### Move

```ts
Move: "move";
```

File move operation

#### Trash

```ts
Trash: "trash";
```

Move to trash operation

#### Other

```ts
Other: "other";
```

Other custom operation

#### Upload

```ts
Upload: "upload";
```

File upload operation

#### DeleteVersionFile

```ts
DeleteVersionFile: "deleteVersionFile";
```

Delete file version operation

#### Backup

```ts
Backup: "backup";
```

Backup operation

***

## IFloatingOperation

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IFloatingOperationsButton.ts#L268)

Represents a single operation in the floating operations button.
Each operation displays as a row with icon, label, and progress indicator.

### Properties

```mdx-code-block
<APITable name="IFloatingOperation">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Unique identifier for the operation. |
| `label` | `string` | Text label displayed to the user describing the operation. Example: "Uploading document.pdf" or "Converting 5 files" |
| `operation` | [`FloatingOperationType`](#floatingoperationtype) | Type of operation - determines the default icon and visual representation. Use predefined types (Upload, Convert, etc.). |
| `alert` | `boolean` | Error flag - if true, the operation is displayed with a warning/error state. Shows a red icon and allows the user to see what went wrong. |
| `completed` | `boolean` | Completion flag - if true, the operation is marked as completed. Shows checkmark icon and allows user to dismiss the operation. |
| `percent?` | `number` | Progress percentage of the operation (0-100). If undefined, displays an infinite loader animation instead of percentage. |
| `icon?` | `string` | Custom icon for the operation (overrides default operation icon). The icon image must be uploaded to the assets folder. Only the image name with the extension must be specified in this field, for example, "upload.svg" or "custom-icon.png". |

```mdx-code-block
</APITable>
```
