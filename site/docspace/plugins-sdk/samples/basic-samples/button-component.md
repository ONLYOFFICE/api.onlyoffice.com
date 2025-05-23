# Button Component

This guide demonstrates how to render and configure a [Button](../../usage-sdk/coding-plugin/plugin-components/button) component using the DocSpace Plugin SDK.

## Overview

- Component: [Components.button](../../usage-sdk/coding-plugin/plugin-components/button)
- Interface: `IButton`
- Wrapper: `ButtonGroup`
- Purpose: Renders an interactive button with optional action, size, and state options

## Example Output

A button labeled "Save" will be rendered inside a flex box. Clicking it logs a message to the browser console.

<details>
  <summary>Full Example</summary>

``` ts
import {
  IPlugin,
  PluginStatus,
  IMainButtonPlugin,
  IMainButtonItem,
} from '@onlyoffice/docspace-plugin-sdk'

import {
  IButton,
  IBox,
  Components,
  IModalDialog,
  ModalDisplayType,
  IMessage,
  Actions,
  ButtonSize,
  ButtonGroup
} from '@onlyoffice/docspace-plugin-sdk';

class Buttonplugin implements IPlugin, IMainButtonPlugin {
  status: PluginStatus = PluginStatus.active;          
  mainButtonItems: Map<string, IMainButtonItem> = new Map();

  onLoadCallback = async () => {};
           
  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };
          
  getStatus = () => {
    return this.status;
  };
          
  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  addMainButtonItem = (item: IMainButtonItem ): void => {
    this.mainButtonItems.set(item.key, item);
  };
        
  getMainButtonItems = (): Map<string, IMainButtonItem > => {
    return this.mainButtonItems;
  };
        
  updateMainButtonItem = (item: IMainButtonItem): void => {
    this.mainButtonItems.set(item.key, item);
  };
}

const plugin = new Buttonplugin();

// Define button behavior and appearance
const ButtonProps: IButton = {
  // Text shown on the button
  label: "Save",

  // Function to run on click
  onClick: () => {
    console.log("Save button clicked");
  },

  // Size options: extraSmall, small, normal, medium
  size: ButtonSize.normal,

  // Style: primary button (blue)
  primary: true,

  // Button width remains natural
  scale: false,

  // Optional loading state (disabled)
  isLoading: false,

  // Button is enabled
  isDisabled: false,

  // Optional behavior on click (not used)
  withLoadingAfterClick: false,
  disableWhileRequestRunning: false
};

// Wrap button into a component group
const ButtonComponent: ButtonGroup = {
  component: Components.button,
  props: ButtonProps,
  contextName: "acceptButton"
};

// Display inside a flex box
const demoBox: IBox = {
  displayProp: "flex",
  flexDirection: "column",
  marginProp: "16 0 0 0",
  children: [
    ButtonComponent
  ]
};


// Add toggle component with props to the modal
const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    ButtonComponent
  ],
}

export const modalDialogProps: IModalDialog = {
  dialogHeader: "Sample modal dialog",
  dialogBody: body,
  displayType: ModalDisplayType.modal,
  onClose: () => {
    const message: IMessage = {
      actions: [Actions.closeModal],
    }
    return message
  },

  onLoad: async () => {
    return {
      newDialogHeader: modalDialogProps.dialogHeader,
      newDialogBody: modalDialogProps.dialogBody,
    }
  },
  autoMaxHeight: true,
  autoMaxWidth: true,
}

// Create the main button with modal on click
const createItem: IMainButtonItem = {
  key: "test-main-button",
  label: "Show dialog",
  icon: "icon.svg",
  onClick: () => {}
}

const mainButtonItem: IMainButtonItem = {
  key: "test-main-button",
  label: "Show dialog",
  icon: "icon.svg",
  items: [createItem],
  onClick: () => {
    const message: IMessage = {
        actions: [Actions.showModal],
        modalDialogProps: modalDialogProps,
      };
      return message;
  }
}

// Add the main button to the plugin
plugin.addMainButtonItem(mainButtonItem);

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Toggleplugin = plugin || {};

export default plugin;
```

</details>

## Property Reference

| **Property**                 | **Type**     | **Description**                                                            |
| ---------------------------- | ------------ | -------------------------------------------------------------------------- |
|  label                       | string       | Text displayed on the button                                               |
|  onClick                     | function     | Function executed when the button is clicked                               |
|  size                        | ButtonSize   | Button size (`"normal"` in this example)                                   |
|  primary                     | boolean      | Applies primary color styling (usually blue)                               |
|  scale                       | boolean      | If `true`, button stretches to fill container; `false` keeps natural width |
|  isLoading                   | boolean      | Shows loading indicator if `true`                                          |
|  isDisabled                  | boolean      | Disables the button when `true`                                            |
|  withLoadingAfterClick       | boolean      | If `true`, shows loading spinner after clicking (useful for async actions) |
|  disableWhileRequestRunning  | boolean      | Prevents re-click while async operation is in progress                     |

