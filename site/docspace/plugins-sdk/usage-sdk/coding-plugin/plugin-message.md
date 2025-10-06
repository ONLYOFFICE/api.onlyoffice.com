---
sidebar_position: -3
---

# Message

Each item which interacts with a user (onClick, onChange, onSelect, etc.) can return a message that is represented as the *IMessage* object with the following parameters:

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name               | Description                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                             | Example                                                                              |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| actions            | Defines a collection of [events](./events.md) that will be processed on the portal side. The specified actions will be performed depending on the set of values.                                                                                                                                                    | array of [Actions](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Actions.ts)                                                                                                                                                                           | `[Actions.showToast, Actions.closeModal]`                                            |
| newProps           | Defines the properties that update the state of the items which interact with the users. This parameter is used only with [Actions.updateProps](./events.md#updateprops).                                                                                                                                           | [IInput](./plugin-components/input.md), [ICheckbox](./plugin-components/checkbox.md), [IToggleButton](./plugin-components/togglebutton.md), [IButton](./plugin-components/button.md), [ITextArea](./plugin-components/textarea.md), [IComboBox](./plugin-components/combobox.md) | `{IInput}`                                                                           |
| toastProps         | Defines the properties that display a toast notification after the user actions. This parameter is used only with [Actions.showToast](./events.md#showtoast).                                                                                                                                                       | array of [IToast](./plugin-components/toast.md)                                                                                                                                                                                                                                  | `[IToast]`                                                                           |
| contextProps       | Defines the properties that update the state of the parent or child item after the event was executed. This parameter is used only with [Actions.updateContext](./events.md#updatecontext) and works in the administrator or owner settings block that is embedded in the modal window with the plugin description. | array of objects                                                                                                                                                                                                                                                                 | `[{ "name": "accept-button", "props": {...acceptButtonProps, isDisabled: false}, }]` |
| contextProps.name  | The item name.                                                                                                                                                                                                                                                                                                      | string                                                                                                                                                                                                                                                                           | `"accept-button"`                                                                    |
| contextProps.props | The new properties for the parent or child item.                                                                                                                                                                                                                                                                    | object                                                                                                                                                                                                                                                                           | `{...acceptButtonProps, "isDisabled": false}`                                        |
| createDialogProps  | Defines the properties that display the default dialog box for creating a file/folder managed by the plugin. This parameter is used only with [Actions.showCreateDialogModal](./events.md#showcreatedialogmodal).                                                                                                   | [ICreateDialog](./plugin-components/createdialog.md)                                                                                                                                                                                                                             | `{ICreateDialog}`                                                                    |
| modalDialogProps   | Defines the properties that display the modal window. This parameter is used only with [Actions.showModal](./events.md#showmodal).                                                                                                                                                                                  | [IModalDialog](./plugin-components/modaldialog.md)                                                                                                                                                                                                                               | `{IModalDialog}`                                                                     |
| postMessage        | Defines the properties that are used to send a message to a frame. If the frame ID is not specified or the frame with such an ID does not exist, then nothing changes. This parameter is used only with [Actions.sendPostMessage](./events.md#sendpostmessage).                                                     | [IPostMessage](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/utils/index.ts)                                                                                                                                                                      | `{IPostMessage}`                                                                     |
| settings           | Defines a parameter that is used to save and transfer the administrator or owner plugin settings to all the portal users. This parameter is used only with [Actions.saveSettings](./events.md#savesettings).                                                                                                        | string                                                                                                                                                                                                                                                                           | `{settings}`                                                                         |

```mdx-code-block
</APITable>
```

## Example

``` ts
import {Actions, type IMessage, ToastType} from "@onlyoffice/docspace-plugin-sdk"

const message: IMessage = {
  actions: [Actions.showToast, Actions.closeModal],
  toastProps: [
    {
      type: ToastType.success,
      title: toastTitle,
    },
  ],
}
```
