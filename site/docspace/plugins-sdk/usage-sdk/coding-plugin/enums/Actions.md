# Actions

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Actions.ts#L26)

A collection of events that will be processed on the portal side.

Pass these values in the `actions` array of an [`IMessage`](../interfaces/utils.md#imessage)
returned from an event handler (onClick, onChange, onSubmit, etc.).
Most actions read their configuration from the matching `*Props` parameter of the message.

## Enumeration Members

### updateProps

```ts
updateProps: "update-props";
```

Calls a function to update the state of the item which action was passed.
It does not work if the [`newProps`](../interfaces/utils.md#imessage) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  newProps: {...acceptButton, isDisabled: true},
  actions: [Actions.showToast, Actions.updateStatus, Actions.updateProps],
  toastProps,
}
```

### updateContext

```ts
updateContext: "update-context";
```

Calls a function to update the state of the parent or child items which were passed.
It does not work if the [`contextProps`](../interfaces/utils.md#imessage) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateProps, Actions.updateContext],
  newProps: {...nameInputProps, value},
  contextProps: [
    {
      name: "accept-button",
      props: {
        ...acceptButtonProps,
        isDisabled: !value,
      },
    },
  ],
}
```

### updateStatus

```ts
updateStatus: "update-status";
```

Calls a function to update the plugin status.

#### Example

```typescript
const message: IMessage = {
  newProps: {...acceptButton, isDisabled: true},
  actions: [Actions.showToast, Actions.updateProps, Actions.updateStatus],
  toastProps,
}
```

### updateContextMenuItems

```ts
updateContextMenuItems: "update-context-menu-items";
```

Calls a function to update all the context menu items.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateContextMenuItems],
}
```

### updateInfoPanelItems

```ts
updateInfoPanelItems: "update-info-panel-items";
```

Calls a function to update all the info panel items.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateInfoPanelItems],
}
```

### updateMainButtonItems

```ts
updateMainButtonItems: "update-main-button-items";
```

Calls a function to update all the main button menu items.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateMainButtonItems],
}
```

### updateProfileMenuItems

```ts
updateProfileMenuItems: "update-profile-menu-items";
```

Calls a function to update all the profile menu items.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateProfileMenuItems],
}
```

### updateFileItems

```ts
updateFileItems: "update-file-items";
```

Calls a function to update all the file items.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateFileItems],
}
```

### updateEventListenerItems

```ts
updateEventListenerItems: "update-event-listener-items";
```

Calls a function to update all the event listener items.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateEventListenerItems],
}
```

### showToast

```ts
showToast: "show-toast";
```

Calls a function to display a toast notification after the user actions.
It does not work if the [`toastProps`](../interfaces/components/IToast.md) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  newProps: {...acceptButton, isDisabled: true},
  actions: [Actions.showToast, Actions.updateProps, Actions.updateStatus],
  toastProps,
}
```

### showCreateDialogModal

```ts
showCreateDialogModal: "show-create-dialog-modal";
```

Calls a function to open a modal window for creating certain item (file, folder, etc.).
It does not work if the [`createDialogProps`](../interfaces/components/ICreateDialog.md) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.showCreateDialogModal],
  createDialogProps: {
    title: "Create diagram",
    startValue: "New diagram",
    visible: true,
    isCreateDialog: true,
    extension: ".drawio",
    onSave: async (e: any, value: string) => {
      await drawIo.createNewFile(value)
    },
    onCancel: (e: any) => {
      drawIo.setCurrentFolderId(null)
    },
    onClose: (e: any) => {
      drawIo.setCurrentFolderId(null)
    },
  },
}
```

### updateCreateDialogModal

```ts
updateCreateDialogModal: "update-create-dialog-modal";
```

Calls a function to update a modal window for creating certain item (file, folder, etc.).
It does not work if the [`createDialogProps`](../interfaces/components/ICreateDialog.md) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateCreateDialogModal],
  createDialogProps: {
    title: "some title value",
  },
};
```

### showModal

```ts
showModal: "show-modal";
```

Calls a function to open a modal window.
It does not work if the [`modalDialogProps`](../interfaces/components/IModalDialog.md) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.showModal],
  modalDialogProps: openFromUrlProps,
}
```

### closeModal

```ts
closeModal: "close-modal";
```

Calls a function to close a modal window.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.closeModal],
}
```

### sendPostMessage

```ts
sendPostMessage: "send-post-message";
```

Calls a function to send a message to a frame.
It does not work if the [`postMessage`](../interfaces/utils.md#ipostmessage) parameter is not passed to the message or the specified frame is not found.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.sendPostMessage],
  postMessage: {
    frameId: this.frameId,
    message: {
      action: "export",
      format: this.format,
      xml: msg.xml,
      spinKey: "export",
    },
  },
}
```

### saveSettings

```ts
saveSettings: "save-settings";
```

Calls a function to save the data that was transferred in the [`settings`](../interfaces/utils.md#imessage) parameter
and returns it in the "setAdminPluginSettingsValue" method each time the plugin is requested.
It functions only when the "Save" button is clicked in the "Settings" block.

#### Example

```typescript
const onSaveButtonClick = (): IMessage => {
  return {
    actions: [Actions.saveSettings, Actions.showToast],
    settings: JSON.stringify({ apiKey: apiKeyInput.value }),
    toastProps: [{ type: ToastType.success, title: "Settings saved" }],
  };
}
```

### showSelector

```ts
showSelector: "show-selector";
```

Calls a function to display a selector.
It does not work if the [`selectorProps`](../interfaces/components/Selector.md) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.showSelector],
  selectorProps: {
    type: SelectorType.Base,
    props: { ...selectorProps },
  },
}
```

### updateSelector

```ts
updateSelector: "update-selector";
```

Calls a function to update a selector.
It does not work if the [`selectorProps`](../interfaces/components/Selector.md) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateSelector],
  selectorProps: {
    type: SelectorType.Base,
    props: { ...selectorProps },
  },
}
```

### closeSelector

```ts
closeSelector: "close-selector";
```

Calls a function to close a selector.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.closeSelector],
}
```

### addFloatingOperationsButton

```ts
addFloatingOperationsButton: "add-floating-operations-button";
```

Calls a function to add operations in floating button.
Multiple plugins can show operations simultaneously - they will be aggregated.
It does not work if the [`floatingOperationsButtonProps`](../interfaces/components/IFloatingOperationsButton.md) parameter is not passed to the message.

:::note
Each floating operations is identified by its id. Calling this action again
will not replace the previous operations.
:::

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.addFloatingOperationsButton],
  floatingOperationsButtonProps: { ...floatingOperationsButtonProps },
}
```

### updateFloatingOperationsButton

```ts
updateFloatingOperationsButton: "update-floating-operations-button";
```

Calls a function to update operations in floating button.
It does not work if the [`floatingOperationsButtonProps`](../interfaces/components/IFloatingOperationsButton.md) parameter is not passed to the message.

#### Examples

```typescript
const message: IMessage = {
  actions: [Actions.updateFloatingOperationsButton],
  floatingOperationsButtonProps: { ...floatingOperationsButtonProps },
}
```

:::note
To update the status directly, use the `dispatchMessage` callback from the `onLoad` event.
:::

```typescript
onLoad(dispatchMessage) {
  const message: IMessage = {
    actions: [Actions.updateFloatingOperationsButton],
    floatingOperationsButtonProps: { ...floatingOperationsButtonProps },
  }
  dispatchMessage(message)
}
```

### removeFloatingOperationsButton

```ts
removeFloatingOperationsButton: "remove-floating-operations-button";
```

Calls a function to remove the floating operations.
It does not work if the [`floatingOperationsButtonPropsId`](../interfaces/components/IFloatingOperationsButton.md) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.removeFloatingOperationsButton],
  floatingOperationsButtonPropsId: floatingOperationsButtonProps.id,
}
```

### navigate

```ts
navigate: "navigate";
```

Calls a function to navigate to the specified path.
All actions listed after navigate will be called after the navigation is complete.
It does not work if the [`navigatePath`](../interfaces/utils.md#imessage) parameter is not passed to the message.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.navigate],
  navigatePath: "/rooms/shared/12345",
}
```

### openInfoPanel

```ts
openInfoPanel: "open-info-panel";
```

Calls a function to open the plugin info panel.
The tab to open is passed in the [`infoPanelTab`](../interfaces/utils.md#imessage) parameter.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.openInfoPanel],
  infoPanelTab: "info_details",
}
```

### showMediaViewer

```ts
showMediaViewer: "show-media-viewer";
```

Calls a function to open the plugin media viewer.
The viewer configuration is passed in the [`mediaViewerProps`](../interfaces/components/IMediaViewer.md) parameter.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.showMediaViewer],
  mediaViewerProps: { ...mediaViewerProps },
}
```

### updateMediaViewer

```ts
updateMediaViewer: "update-media-viewer";
```

Calls a function to update the plugin media viewer.
The new configuration is passed in the [`mediaViewerProps`](../interfaces/components/IMediaViewer.md) parameter.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.updateMediaViewer],
  mediaViewerProps: { ...mediaViewerProps },
}
```

### closeMediaViewer

```ts
closeMediaViewer: "close-media-viewer";
```

Calls a function to close the plugin media viewer.

#### Example

```typescript
const message: IMessage = {
  actions: [Actions.closeMediaViewer],
}
```
