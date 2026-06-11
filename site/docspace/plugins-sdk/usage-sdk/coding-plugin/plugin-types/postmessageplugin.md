---
sidebar_position: 1
---

# PostMessagePlugin

The plugin that handles messages received from an [IFrame](../plugin-components/iframe.md) component via the browser `postMessage` API.

**Interface**: IPostMessagePlugin.

When an iframe sends a `postMessage`, the portal calls `postMessageCallback` with an `IPostMessageCallbackMessage` object. This object has the same structure as [IMessage](../plugin-message.md) but supports only a subset of actions: *updateContextMenuItems, updateInfoPanelItems, updateMainButtonItems, updateProfileMenuItems, updateFileItems, updateEventListenerItems, showToast, showCreateDialogModal, showModal, showSelector, showMediaViewer, addFloatingOperationsButton, removeFloatingOperationsButton, navigate, openInfoPanel, closeModal, closeMediaViewer*.

## Variables

### postMessageCallback

Stores the callback function executed when the portal receives a message from an iframe.

Type: func

## Methods and their description

### setPostMessageCallback

Sets the [postMessageCallback](#postmessagecallback) variable.

Parameters:

| Name     | Type | Example  | Description                                                                            |
| -------- | ---- | -------- | -------------------------------------------------------------------------------------- |
| callback | func | callback | Defines the callback executed when a postMessage is received from an iframe component. |

### getPostMessageCallback

Get the current postMessage callback.

## Example

``` ts
import {Actions, type IPostMessageCallbackMessage, type IPostMessagePlugin, ToastType} from "@onlyoffice/docspace-plugin-sdk"

class Plugin implements IPostMessagePlugin {
  postMessageCallback = (message: IPostMessageCallbackMessage): void => {}

  setPostMessageCallback = (callback: IPostMessagePlugin["postMessageCallback"]): void => {
    this.postMessageCallback = callback
  }

  getPostMessageCallback = (): IPostMessagePlugin["postMessageCallback"] => {
    return this.postMessageCallback
  }
}

// Register a handler that reacts to messages from the plugin iframe
plugin.setPostMessageCallback((message: IPostMessageCallbackMessage) => {
  if (message.actions?.includes(Actions.showToast)) {
    return {
      actions: [Actions.showToast],
      toastProps: [{type: ToastType.success, title: "Message received"}],
    }
  }
})
```
