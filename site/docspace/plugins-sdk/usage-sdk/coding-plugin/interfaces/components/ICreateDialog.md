# ICreateDialog

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ICreateDialog.ts#L110)

Modal dialog for creating certain item (file, folder, etc.).
The user gets the full access to the functionality but cannot control the layout.

To display the dialog, return an [`IMessage`](../utils.md#imessage) with
[`Actions.showCreateDialogModal`](../../enums/Actions.md#showcreatedialogmodal) in `actions`
and pass the dialog configuration in `createDialogProps`.
Use [`Actions.updateCreateDialogModal`](../../enums/Actions.md#updatecreatedialogmodal)
to update an open dialog.

![createdialog](/assets/images/docspace/createdialog.png#gh-light-mode-only)![createdialog](/assets/images/docspace/createdialog.dark.png#gh-dark-mode-only)

## Example

Document creation dialog with multiple format options

```typescript
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
    return {
      actions: [Actions.updateProps],
      newProps: {
        selectedOption: option,
        extension: option.key
      }
    };
  },
  onSave: async (e, value) => {
    try {
      // Create the document
      await createDocument(value, selectedOption.key);

      return {
        actions: [Actions.updateProps, Actions.showToast],
        newProps: {
          visible: false
        },
        toastProps: [{
          title: `Document "${value}" created successfully`,
          type: ToastType.success
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          title: "Failed to create document. Please try again.",
          type: ToastType.error
        }]
      };
    }
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

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `title` | `string` | Defines the modal dialog title. |
| `startValue` | `string` | Defines the modal dialog start value. |
| `visible` | `boolean` | Specifies if the modal dialog is visible or not. |
| `isCreateDisabled?` | `boolean` | Specifies if the create button is disabled. |
| `isCloseAfterCreate?` | `boolean` | Specifies if the modal dialog should be closed after the create action. |
| `options?` | [`IComboBoxItem`](IComboBox.md#icomboboxitem)[] | Defines an array of the modal dialog options. |
| `selectedOption?` | [`IComboBoxItem`](IComboBox.md#icomboboxitem) | Defines the selected modal dialog option. |
| `errorText?` | `string` | Error text to display when validation fails or an error occurs. |
| `onSelect?` | (`option`: [`IComboBoxItem`](IComboBox.md#icomboboxitem)) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the modal dialog option is selected. |
| `onChange?` | (`value`: `string`) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the input value changes. |
| `onSave?` | (`e`: `any`, `value`: `string`) => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | Sets a function which is triggered whenever the data in the modal dialog is saved. |
| `onCancel?` | (`e`: `any`) => `void` | Sets a function which is triggered whenever an action in the modal dialog is canceled. |
| `onClose?` | (`e`: `any`) => `void` | Sets a function which is triggered whenever the modal dialog is closed. |
| `onError?` | (`e`: `any`) => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | Sets a function which is triggered whenever an error occurs during the onSave operation. |
| `isCreateDialog` | `boolean` | Specifies if this modal dialog is for creating certain item (file, folder, etc.). |
| `isAutoFocusOnError?` | `boolean` | Specifies if this modal dialog should automatically focus on the error input field when an error occurs during the onSave operation. |
| `extension?` | `string` | Defines an extension of an item which will be created (file, folder, etc.). |

```mdx-code-block
</APITable>
```
