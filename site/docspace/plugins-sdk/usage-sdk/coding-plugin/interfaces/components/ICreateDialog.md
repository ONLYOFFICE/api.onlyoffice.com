---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ICreateDialog.ts
---

# ICreateDialog

Modal dialog for creating certain item (file, folder, etc.).
The user gets the full access to the functionality but cannot control the layout.

To display the dialog, return an [`IMessage`](../utils.md#imessage) with
[`Actions.showCreateDialogModal`](../../enums/Actions.md#showcreatedialogmodal) in `actions`
and pass the dialog configuration in `createDialogProps`.
Use [`Actions.updateCreateDialogModal`](../../enums/Actions.md#updatecreatedialogmodal)
to update an open dialog.

![createdialog](/assets/images/docspace/createdialog.png#gh-light-mode-only)![createdialog](/assets/images/docspace/createdialog.dark.png#gh-dark-mode-only)

## Examples

Document creation dialog with multiple format options

```typescript
let format = "docx";

const newDocumentDialog: ICreateDialog = {
  title: "Create New Document",
  startValue: "Untitled",
  visible: true,
  options: [
    {
      key: "docx",
      label: "Word Document",
      icon: "word.svg"
    },
    {
      key: "xlsx",
      label: "Excel Spreadsheet",
      icon: "excel.svg"
    },
    {
      key: "pptx",
      label: "PowerPoint Presentation",
      icon: "powerpoint.svg"
    }
  ],
  selectedOption: {
    key: "docx",
    label: "Word Document",
    icon: "word.svg"
  },
  onSelect: (option) => {
    format = option.key;

    return {
      actions: [Actions.updateCreateDialogModal],
      createDialogProps: {
        ...newDocumentDialog,
        selectedOption: option,
        extension: option.key
      }
    };
  },
  onSave: async (e, value) => {
    // A throw here keeps the dialog open and hands the error to onError
    await createDocument(value, format);

    // The dialog then closes by itself: isCloseAfterCreate defaults to true
    return {
      actions: [Actions.showToast],
      toastProps: [{
        title: `Document "${value}" created successfully`,
        type: ToastType.success
      }]
    };
  },
  onError: (error) => {
    return {
      actions: [Actions.showToast],
      toastProps: [{
        title: "Failed to create document. Please try again.",
        type: ToastType.error
      }]
    };
  },
  onCancel: (e) => {
    // Clean up any temporary state if needed
  },
  onClose: (e) => {
    // Additional cleanup or analytics
  },
  isCreateDialog: true,
  extension: "docx"
}
```

Name check that keeps the error text in the dialog

```typescript
const newDiagramDialog: ICreateDialog = {
  title: "Create diagram",
  startValue: "New diagram",
  visible: true,
  isCreateDialog: true,
  isAutoFocusOnError: true,
  extension: "drawio",
  onSave: async (e, value) => {
    if (!value.trim()) throw new Error("Enter a diagram name");

    await drawIo.createNewFile(value);
  },
  onError: (error) => ({
    actions: [Actions.updateCreateDialogModal],
    createDialogProps: { ...newDiagramDialog, errorText: error.message }
  })
};
```

## Properties

import APITable from '@site/src/components/APITable/APITable';

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `title` | `string` | Defines the modal dialog title. |
| `startValue` | `string` | Defines the modal dialog start value. |
| `visible` | `boolean` | Specifies if the modal dialog is visible or not. |
| `isCreateDisabled?` | `boolean` | Specifies if the create button is disabled. |
| `isCloseAfterCreate?` | `boolean` | Specifies if the modal dialog should be closed after the create action. **Default** `true` **Remarks:** Once [`onSave`](#onSave?) resolves, the dialog closes whatever its message sets, so an [`errorText`](#errorText?) returned there disappears with it. To keep the dialog open on a validation error, throw from `onSave` and return the text from [`onError`](#onError?): the dialog is never closed on that path. With `false`, the plugin closes the dialog itself with [`Actions.updateCreateDialogModal`](../../enums/Actions.md#updatecreatedialogmodal) and `visible: false`. |
| `options?` | [`IComboBoxItem`](IComboBox.md#icomboboxitem)[] | Defines an array of the modal dialog options. |
| `selectedOption?` | [`IComboBoxItem`](IComboBox.md#icomboboxitem) | Defines the selected modal dialog option. |
| `errorText?` | `string` | Error text to display when validation fails or an error occurs. **Remarks:** Return it from [`onError`](#onError?) or [`onChange`](#onChange?). Returned from a successful [`onSave`](#onSave?), it closes together with the dialog unless [`isCloseAfterCreate`](#isCloseAfterCreate?) is `false`. |
| `onSelect?` | (`option`: [`IComboBoxItem`](IComboBox.md#icomboboxitem)) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the modal dialog option is selected. |
| `onChange?` | (`value`: `string`) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the input value changes. |
| `onSave?` | (`e`: `any`, `value`: `string`) => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | Sets a function which is triggered whenever the data in the modal dialog is saved. |
| `onCancel?` | (`e`: `any`) => `void` | Sets a function which is triggered whenever an action in the modal dialog is canceled. |
| `onClose?` | (`e`: `any`) => `void` | Sets a function which is triggered whenever the modal dialog is closed. |
| `onError?` | (`e`: `any`) => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | Sets a function which is triggered whenever an error occurs during the onSave operation. **Remarks:** Runs when [`onSave`](#onSave?) throws or rejects. The dialog stays open whatever [`isCloseAfterCreate`](#isCloseAfterCreate?) is, so an [`errorText`](#errorText?) set by the returned message stays on screen. |
| `isCreateDialog` | `boolean` | Specifies if this modal dialog is for creating certain item (file, folder, etc.). |
| `isAutoFocusOnError?` | `boolean` | Specifies if this modal dialog should automatically focus on the error input field when an error occurs during the onSave operation. |
| `extension?` | `string` | Defines an extension of an item which will be created (file, folder, etc.). |

</APITable>
