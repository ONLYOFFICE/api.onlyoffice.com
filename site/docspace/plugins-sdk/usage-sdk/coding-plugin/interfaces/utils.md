# Utils

Utility types for plugin messaging, return values, and panel navigation.

## IPostMessage

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/utils/index.ts#L75)

The properties that are used to send a message to a frame.
If the frame ID is not specified or the frame with such an ID does not exist, then nothing changes.

### Example

Document preview frame communication

```typescript
const previewMessage: IPostMessage = {
  frameId: "document-preview-frame",
  message: {
    action: "zoom",
    scale: 1.5,
    position: { x: 100, y: 200 }
  }
};
```

### Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable name="IPostMessage">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `frameId` | `string` | Defines the frame ID |
| `message` | \{ \[`key`: `string`\]: `any`; \} | Defines a message that will be sent to a frame |

```mdx-code-block
</APITable>
```

***

## IMessage

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/utils/index.ts#L148)

A message which is returned when any item interacts with a user (onClick, onChange, onSelect, etc.).

### Examples

Form submission with validation and toast notification

```typescript
const formSubmissionMessage: IMessage = {
  actions: [Actions.updateProps, Actions.showToast, Actions.updateContext],
  newProps: {
    type: "input",
    id: "email-input",
    value: "user@example.com",
    isDisabled: true
  },
  toastProps: [{
    type: ToastType.success,
    title: "Your data has been saved successfully"
  }],
  contextProps: [{
    name: "submit-button",
    props: {
      type: "button",
      label: "Submitted",
      isDisabled: true
    }
  }]
};
```

Dynamic form field updates with error handling

```typescript
const fieldUpdateMessage: IMessage = {
  actions: [Actions.updateProps, Actions.showToast, Actions.updateContext],
  newProps: {
    type: "comboBox",
    id: "country-select",
    options: [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" }
    ],
    value: "us"
  },
  toastProps: [{
    type: ToastType.error,
    title: "Please complete all required fields"
  }],
  contextProps: [{
    name: "state-select",
    props: {
      type: "comboBox",
      options: [
        { value: "ca", label: "California" },
        { value: "ny", label: "New York" }
      ],
      isDisabled: false
    }
  }]
};
```

### Properties

```mdx-code-block
<APITable name="IMessage">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `actions?` | [`Actions`](../enums/Actions.md)[] | Defines a collection of events that will be processed on the portal side. The specified actions will be performed depending on the set of values. |
| `newProps?` | \| [`IComboBox`](components/IComboBox.md) \| [`IButton`](components/IButton.md) \| [`ICheckbox`](components/ICheckbox.md) \| [`IInput`](components/IInput.md) \| [`ITextArea`](components/ITextArea.md) \| [`IToggleButton`](components/IToggleButton.md) | Defines the properties that update the state of the items which interact with the users. This parameter is used only with Actions.updateProps. |
| `toastProps?` | [`IToast`](components/IToast.md)[] | Defines the properties that display a toast notification after the user actions. This parameter is used only with Actions.showToast. |
| `contextProps?` | \{ `name`: `string`; `props`: \| [`IComboBox`](components/IComboBox.md) \| [`IButton`](components/IButton.md) \| [`ICheckbox`](components/ICheckbox.md) \| [`IFrame`](components/IFrame.md) \| [`IImage`](components/IImage.md) \| [`IInput`](components/IInput.md) \| [`ILabel`](components/ILabel.md) \| [`ISkeleton`](components/ISkeleton.md) \| [`IText`](components/IText.md) \| [`ITextArea`](components/ITextArea.md) \| [`IToggleButton`](components/IToggleButton.md) \| [`IBox`](components/IBox.md); \}[] | Defines the properties that update the state of the parent or child item after the event was executed. Contains an array of objects with: - name: Defines the item name - props: Defines the new properties for the parent or child item |
| `createDialogProps?` | [`ICreateDialog`](components/ICreateDialog.md) | Defines the properties that display the default dialog box for creating a file/folder managed by the plugin. This parameter is used only with Actions.showCreateDialogModal. |
| `modalDialogProps?` | [`IModalDialog`](components/IModalDialog.md) | Defines the properties that display the modal window. This parameter is used only with Actions.showModal. |
| `selectorProps?` | [`TSelector`](components/Selector.md) | Defines the properties that display the selector. This parameter is used only with Actions.showSelector and Actions.updateSelector. |
| `floatingOperationsButtonProps?` | [`IFloatingOperationsButton`](components/IFloatingOperationsButton.md) | Defines the configuration for the floating operations button that displays progress of long-running operations. Used with Actions.addFloatingOperationsButton to create a new button or Actions.updateFloatingOperationsButton to update existing one. The button appears as a floating action button in the bottom-right corner. Multiple plugins can show operations simultaneously. |
| `floatingOperationsButtonPropsId?` | `string` | Unique identifier for the floating operations button to remove. Used only with Actions.removeFloatingOperationsButton to close a specific operations panel. The ID should match the `id` property of the IFloatingOperationsButton that was previously added. |
| `postMessage?` | [`IPostMessage`](#ipostmessage) | Defines the properties that are used to send a message to a frame. If the frame ID is not specified or the frame with such an ID does not exist, then nothing changes. This parameter is used only with Actions.sendPostMessage. |
| `settings?` | `string` | Defines a parameter that is used to save and transfer the administrator or owner plugin settings to all the portal users. This parameter is used only with Actions.saveSettings. |
| `navigatePath?` | `string` | Defines the path to navigate to. All actions listed after navigate will be called after the navigation is complete. This parameter is used only with Actions.navigate. |
| `infoPanelTab?` | `string` | Defines the info panel tab to open. This parameter is used only with Actions.openInfoPanel. |
| `mediaViewerProps?` | [`IMediaViewer`](components/IMediaViewer.md) | Defines the properties for the media viewer. This parameter is used only with Actions.showMediaViewer and Actions.updateMediaViewer. |

```mdx-code-block
</APITable>
```

***

## IPostMessageCallbackMessage

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/utils/index.ts#L273)

A message which is returned from the postMessage callback.
It is similar to [IMessage](#imessage) but with a reduced set of available actions.

### Example

Handling a postMessage callback with a toast notification

```typescript
const postMessageResponse: IPostMessageCallbackMessage = {
  actions: [Actions.showToast],
  toastProps: [{
    type: ToastType.success,
    title: "Frame message processed successfully"
  }]
};
```

### Properties

```mdx-code-block
<APITable name="IPostMessageCallbackMessage">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `actions?` | ( \| [`updateContextMenuItems`](../enums/Actions.md#updatecontextmenuitems) \| [`updateInfoPanelItems`](../enums/Actions.md#updateinfopanelitems) \| [`updateMainButtonItems`](../enums/Actions.md#updatemainbuttonitems) \| [`updateProfileMenuItems`](../enums/Actions.md#updateprofilemenuitems) \| [`updateFileItems`](../enums/Actions.md#updatefileitems) \| [`updateEventListenerItems`](../enums/Actions.md#updateeventlisteneritems) \| [`showToast`](../enums/Actions.md#showtoast) \| [`showCreateDialogModal`](../enums/Actions.md#showcreatedialogmodal) \| [`showModal`](../enums/Actions.md#showmodal) \| [`closeModal`](../enums/Actions.md#closemodal) \| [`showSelector`](../enums/Actions.md#showselector) \| [`addFloatingOperationsButton`](../enums/Actions.md#addfloatingoperationsbutton) \| [`removeFloatingOperationsButton`](../enums/Actions.md#removefloatingoperationsbutton) \| [`navigate`](../enums/Actions.md#navigate) \| [`openInfoPanel`](../enums/Actions.md#openinfopanel) \| [`showMediaViewer`](../enums/Actions.md#showmediaviewer) \| [`closeMediaViewer`](../enums/Actions.md#closemediaviewer))[] | Defines a collection of events that will be processed on the portal side. Only the following actions are available: updateContextMenuItems, updateInfoPanelItems, updateMainButtonItems, updateProfileMenuItems, updateFileItems, updateEventListenerItems, showToast, showCreateDialogModal, showModal, closeModal, showSelector, showMediaViewer, closeMediaViewer, addFloatingOperationsButton, removeFloatingOperationsButton, navigate, openInfoPanel. |
| `toastProps?` | [`IToast`](components/IToast.md)[] | Defines the properties that display a toast notification after the user actions. This parameter is used only with Actions.showToast. |
| `createDialogProps?` | [`ICreateDialog`](components/ICreateDialog.md) | Defines the properties that display the default dialog box for creating a file/folder managed by the plugin. This parameter is used only with Actions.showCreateDialogModal. |
| `modalDialogProps?` | [`IModalDialog`](components/IModalDialog.md) | Defines the properties that display the modal window. This parameter is used only with Actions.showModal. |
| `selectorProps?` | [`TSelector`](components/Selector.md) | Defines the properties that display the selector. This parameter is used only with Actions.showSelector. |
| `floatingOperationsButtonProps?` | [`IFloatingOperationsButton`](components/IFloatingOperationsButton.md) | Defines the configuration for the floating operations button that displays progress of long-running operations. Used with Actions.addFloatingOperationsButton to create a new button. |
| `floatingOperationsButtonPropsId?` | `string` | Unique identifier for the floating operations button to remove. Used with Actions.removeFloatingOperationsButton to close a specific operations panel. The ID should match the `id` property of the IFloatingOperationsButton that was previously added. |
| `navigatePath?` | `string` | Defines the path to navigate to. All actions listed after navigate will be called after the navigation is complete. This parameter is used only with Actions.navigate. |
| `infoPanelTab?` | `string` | Defines the info panel tab to open. This parameter is used only with Actions.openInfoPanel. |

```mdx-code-block
</APITable>
```

***

## TInfoPanelTab

```ts
type TInfoPanelTab = "info_members" | "info_history" | "info_details" | "info_share" | string;
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/utils/index.ts#L49)

Defines the info panel tab to open.

***

## TReturnPostMessage

```ts
type TReturnPostMessage = 
  | Promise<IPostMessageCallbackMessage>
  | Promise<void>
  | void
  | IPostMessageCallbackMessage;
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/utils/index.ts#L357)

Describes a return message of a postMessage event handler.

***

## TReturnMessage

```ts
type TReturnMessage = 
  | Promise<IMessage>
  | Promise<void>
  | void
  | IMessage;
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/utils/index.ts#L366)

Describes a return message.
