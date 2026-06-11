---
sidebar_position: -2
---

# Events

The events from the [Actions](./plugin-message.md#actions) collection are processed on the portal side. The specified actions are performed depending on the set of values:

## updateProps

The function called when updating the state of the item which action was passed. It does not work if the [newProps](./plugin-message.md#newProps) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    newProps: {...acceptButton, isDisabled: true},
    actions: [Actions.showToast, Actions.updateStatus, Actions.updateProps],
    toastProps,
  }
  ```

## updateContext

The function called when updating the state of the the parent or child items which were passed. It does not work if the [contextProps](./plugin-message.md#contextProps) parameter is not passed to the message.

  ``` ts
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

## updateStatus

The function called when updating the plugin status.

  ``` ts
  const message: IMessage = {
    newProps: {...acceptButton, isDisabled: true},
    actions: [Actions.showToast, Actions.updateProps, Actions.updateStatus],
    toastProps,
  }
  ```

## updateContextMenuItems

The function called when updating all the context menu items.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateContextMenuItems],
  }
  ```

## updateInfoPanelItems

The function called when updating all the info panel items.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateInfoPanelItems],
  }
  ```

## updateMainButtonItems

The function called when updating all the main button menu items.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateMainButtonItems],
  }
  ```

## updateProfileMenuItems

The function called when updating all the profile menu items.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateProfileMenuItems],
  }
  ```

## updateFileItems

The function called when updating all the file items.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateFileItems],
  }
  ```

## updateEventListenerItems

The function called when updating all the event listener items.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateEventListenerItems],
  }
  ```

## showToast

The function called when displaying a toast notification after the user actions. It does not work if the [toastProps](./plugin-message.md#toastProps) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    newProps: {...acceptButton, isDisabled: true},
    actions: [Actions.showToast, Actions.updateProps, Actions.updateStatus],
    toastProps,
  }
  ```

## showCreateDialogModal

The function called when opening a modal window for creating certain item (file, folder, etc.). It does not work if the [createDialogProps](./plugin-message.md#createDialogProps) parameter is not passed to the message.

  ``` ts
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

## updateCreateDialogModal

The function called to update the **CreateDialog** component. It does not work if the [createDialogProps](./plugin-message.md#createDialogProps) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateCreateDialogModal],
    createDialogProps: {
      title: "some title value",
    },
  };
  ```

## showModal

The function called when opening a modal window. It does not work if the [modalDialogProps](./plugin-message.md#modalDialogProps) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.showModal],
    modalDialogProps: openFromUrlProps,
  }
  ```

## closeModal

The function called when closing a modal window.

  ``` ts
  const message: IMessage = {
    actions: [Actions.closeModal],
  }
  ```

## sendPostMessage

The function called when sending a message to a frame. It does not work if the [postMessage](./plugin-message.md#postMessage) parameter is not passed to the message or the specified frame is not found.

  ``` ts
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

## saveSettings

The function called when saving the data that was transferred in the [settings](./plugin-message.md#settings) parameter and returning it in the [setAdminPluginSettingsValue](./plugin-types/settingsplugin.md#setadminpluginsettingsvalue) method each time the plugin is requested. It functions only when the **Save** button is clicked in the **Settings** block.

  ``` ts
  const message: IMessage = {
    actions: [
      Actions.showToast,
      Actions.updateProps,
      Actions.updateStatus,
      Actions.saveSettings,
    ],
    toastProps: [{title: "Token is saved", type: ToastType.success}],
    newProps: {...userButtonProps, isDisabled: true},
    settings: tokenInput.value,
  }
  ```

## showMediaViewer

The function called when opening the media viewer. It does not work if the [mediaViewerProps](./plugin-message.md#mediaviewerprops) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.showMediaViewer],
    mediaViewerProps: {fileId: "file-123", title: "image.png"},
  }
  ```

## updateMediaViewer

The function called when updating the media viewer state. It does not work if the [mediaViewerProps](./plugin-message.md#mediaviewerprops) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateMediaViewer],
    mediaViewerProps: {fileId: "file-456"},
  }
  ```

## closeMediaViewer

The function called when closing the media viewer.

  ``` ts
  const message: IMessage = {
    actions: [Actions.closeMediaViewer],
  }
  ```

## showSelector

The function called when opening the selector. It does not work if the [selectorProps](./plugin-message.md#selectorprops) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.showSelector],
    selectorProps: {type: SelectorType.Base, props: selectorProps},
  }
  ```

## updateSelector

The function called when updating the currently open selector. It does not work if the [selectorProps](./plugin-message.md#selectorprops) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateSelector],
    selectorProps: {type: SelectorType.Base, props: updatedSelectorProps},
  }
  ```

## closeSelector

The function called when closing the selector.

  ``` ts
  const message: IMessage = {
    actions: [Actions.closeSelector],
  }
  ```

## addFloatingOperationsButton

The function called when adding a floating operations button. It does not work if the [floatingOperationsButtonProps](./plugin-message.md#floatingoperationsbuttonprops) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.addFloatingOperationsButton],
    floatingOperationsButtonProps: buttonProps,
  }
  ```

## updateFloatingOperationsButton

The function called when updating the floating operations button state. It does not work if the [floatingOperationsButtonProps](./plugin-message.md#floatingoperationsbuttonprops) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.updateFloatingOperationsButton],
    floatingOperationsButtonProps: updatedButtonProps,
  }
  ```

## removeFloatingOperationsButton

The function called when removing the floating operations button. It does not work if the [floatingOperationsButtonPropsId](./plugin-message.md#floatingoperationsbuttonpropsid) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.removeFloatingOperationsButton],
    floatingOperationsButtonPropsId: "my-upload-button",
  }
  ```

## navigate

The function called when navigating to a specific path within the portal. It does not work if the [navigatePath](./plugin-message.md#navigatepath) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.navigate],
    navigatePath: "/rooms/shared",
  }
  ```

## openInfoPanel

The function called when opening the info panel and displaying a specific tab. It does not work if the [infoPanelTab](./plugin-message.md#infopaneltab) parameter is not passed to the message.

  ``` ts
  const message: IMessage = {
    actions: [Actions.openInfoPanel],
    infoPanelTab: "details",
  }
  ```
