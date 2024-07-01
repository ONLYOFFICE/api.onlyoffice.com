The events from the [Actions](/docspace/pluginssdk/codingplugin/pluginmessage#actions) collection are processed on the portal side. The specified actions are performed depending on the set of values:

## Events and their description:

* **updateProps** - the function called when updating the state of the item which action was passed. It does not work if the [newProps](/docspace/pluginssdk/codingplugin/pluginmessage#newProps) parameter is not passed to the message.

  ```
  const message: IMessage = {
      "newProps": { ...acceptButton, isDisabled: true },
      "actions": [Actions.showToast, Actions.updateStatus, Actions.updateProps],
      toastProps,
  };
  ```

* **updateContext** - the function called when updating the state of the the parent or child items which were passed. It does not work if the [contextProps](/docspace/pluginssdk/codingplugin/pluginmessage#contextProps) parameter is not passed to the message.

  ```
  const message: IMessage = {
      "actions": [Actions.updateProps, Actions.updateContext],
      "newProps": { ...nameInputProps, value },
      "contextProps": [
          {
              "name": "accept-button",
              "props": {
                  ...acceptButtonProps,
                  "isDisabled": !value,
              },
          },
      ],
  };
  ```

* **updateStatus** - the function called when updating the plugin status.

  ```
  const message: IMessage = {
      "newProps": { ...acceptButton, isDisabled: true },
      "actions": [Actions.showToast, Actions.updateProps, Actions.updateStatus],
      toastProps,
  };
  ```

* **updateContextMenuItems** - the function called when updating all the context menu items.

  ```
  const message: IMessage = {
      "actions": [Actions.updateContextMenuItems]
  };
  ```

* **updateInfoPanelItems** - the function called when updating all the info panel items.

  ```
  const message: IMessage = {
      "actions": [Actions.updateInfoPanelItems]
  };
  ```

* **updateMainButtonItems** - the function called when updating all the main button menu items.

  ```
  const message: IMessage = {
      "actions": [Actions.updateMainButtonItems]
  };
  ```

* **updateProfileMenuItems** - the function called when updating all the profile menu items.

  ```
  const message: IMessage = {
      "actions": [Actions.updateProfileMenuItems]
  };
  ```

* **updateFileItems** - the function called when updating all the file items.

  ```
  const message: IMessage = {
      "actions": [Actions.updateFileItems]
  };
  ```

* **updateEventListenerItems** - the function called when updating all the event listener items.

  ```
  const message: IMessage = {
      "actions": [Actions.updateEventListenerItems]
  };
  ```

* **showToast** - the function called when displaying a toast notification after the user actions. It does not work if the [toastProps](/docspace/pluginssdk/codingplugin/pluginmessage#toastProps) parameter is not passed to the message.

  ```
  const message: IMessage = {
      "newProps": { ...acceptButton, isDisabled: true },
      "actions": [Actions.showToast, Actions.updateProps, Actions.updateStatus],
      toastProps,
  };
  ```

* **showCreateDialogModal** - the function called when opening a modal window for creating certain item (file, folder, etc.). It does not work if the [createDialogProps](/docspace/pluginssdk/codingplugin/pluginmessage#createDialogProps) parameter is not passed to the message.

  ```
  const message: IMessage = {
      "actions": [Actions.showCreateDialogModal],
      "createDialogProps": {
          "title": "Create diagram",
          "startValue": "New diagram",
          "visible": true,
          "isCreateDialog": true,
          "extension": ".drawio",
          "onSave": async (e: any, value: string) => {
              await drawIo.createNewFile(value);
          },
          "onCancel": (e: any) => {
              drawIo.setCurrentFolderId(null);
          },
          "onClose": (e: any) => {
              drawIo.setCurrentFolderId(null);
          },
      },
  };
  ```

* **showModal** - the function called when opening a modal window. It does not work if the [modalDialogProps](/docspace/pluginssdk/codingplugin/pluginmessage#modalDialogProps) parameter is not passed to the message.

  ```
  const message: IMessage = {
      "actions": [Actions.showModal],
      "modalDialogProps": openFromUrlProps,
  };
  ```

* **closeModal** - the function called when closing a modal window.

  ```
  const message: IMessage = {
      "actions": [Actions.closeModal],
  };
  ```

* **sendPostMessage** - the function called when sending a message to a frame. It does not work if the [postMessage](/docspace/pluginssdk/codingplugin/pluginmessage#postMessage) parameter is not passed to the message or the specified frame is not found.

  ```
  const message: IMessage = {
      "actions": [Actions.sendPostMessage],
      "postMessage": {
          "frameId": this.frameId,
          "message": {
              "action": "export",
              "format": this.format,
              "xml": msg.xml,
              "spinKey": "export",
          },
      },
  };
  ```

* **saveSettings** - the function called when saving the data that was transferred in the [settings](/docspace/pluginssdk/codingplugin/pluginmessage#settings) parameter and returning it in the [setAdminPluginSettingsValue](/docspace/pluginssdk/codingplugin/plugintypes/settingsplugin#setAdminPluginSettingsValue) method each time the plugin is requested. It functions only when the **Save** button is clicked in the **Settings** block.

  ```
  const message: IMessage = {
      "actions": [
        Actions.showToast,
        Actions.updateProps,
        Actions.updateStatus,
        Actions.saveSettings,
      ],
      "toastProps": [{ "title": "Token is saved", "type": ToastType.success }],
      "newProps": { ...userButtonProps, "isDisabled": true },
      "settings": tokenInput.value,
  };
  ```
