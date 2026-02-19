# CreateDialog

Modal dialog for creating certain item (file, folder, etc.). The user gets the full acess to the functionality but cannot control the layout.

**Interface**: [ICreateDialog](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ICreateDialog.ts).

## Extra parameters

### isAutoFocusOnError

Specifies whether the modal dialog should automatically focus on the input field with an error when an error occurs during the **onSave** operation.

Type: boolean

Example: true

### onError

Defines a function that is triggered when an error occurs during the **onSave** operation.

Type: func

Example: `(error) => { console.error(error) }`

### errorText

Specifies the error text displayed when validation fails or an error occurs.

Type: string

Example: "Invalid file name"

### onChange

Defines a function that is triggered every time the input value changes.

Type: func

Example: `(value) => { console.log(value) }`

### isCloseAfterCreate

Specifies whether the modal dialog should be closed after the create action is performed.

Type: boolean

Example: true

### isCreateDisabled

Specifies whether the **Create** button is disabled.

Type: boolean

Example: false

## Example

``` ts
const createDialogProps = {
  title: "Create diagram",
  startValue: "New diagram",
  visible: true,
  isCreateDialog: true,
  extension: ".drawio",
  onSave: async (e: any, value: string) => {},
  onCancel: (e: any) => {},
  onClose: (e: any) => {},
}
```
