# Button Component

This guide demonstrates how to render and configure a [Button](../../../usage-sdk/coding-plugin/plugin-components/button) component using the DocSpace Plugin SDK.

## Overview
- Component: [Components.button](../../../usage-sdk/coding-plugin/plugin-components/button)
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

class Buttoncomponentplugin implements IPlugin, IMainButtonPlugin {
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

const plugin = new Buttoncomponentplugin();

// Define button behavior and appearance
const ButtonProps: IButton = {
  label: "Save",
  onClick: () => {
    console.log("Save button clicked");
  },
  size: ButtonSize.normal,
  primary: true,
  scale: false,
  isLoading: false,
  isDisabled: false,
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

window.Plugins.Buttoncomponentplugin = plugin || {};

export default plugin;
```

</details>

## Before you start
Make sure you have a DocSpace server running and install the Plugin SDK globally:

```bash
npm i -g @onlyoffice/docspace-plugin-sdk
```

## Step 1: Create the Plugin
Initialize your plugin using the CLI:

```bash
npx create-docspace-plugin
```

You'll be prompted to fill out basic metadata:
- Plugin name
- Version
- Author
- Description
- Logo
- License
- Homepage

Then, you'll be shown a list of available scopes.
Use the arrow keys to highlight `Main button`, press `space` to select it, then press `enter` to confirm and generate the plugin template.

```js
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

class Buttoncomponentplugin implements IPlugin, IMainButtonPlugin {
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

const plugin = new Buttoncomponentplugin();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Boxcomponentplugin = plugin || {};

export default plugin;
```

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:

```json
"scopes": ["MainButton"]
```

:::info
[Main Button](../../../usage-sdk/coding-plugin/plugin-types/mainbuttonplugin) plugin type is used for this example. The same structure could be applied to any other plugin type.
:::

## Step 2: Add a Main Button item
Add a [Main Button item](../../../usage-sdk/coding-plugin/plugin-items/mainbuttonitem) below the plugin initialization.

```js
// ...

const plugin = new Buttoncomponentplugin();

const createItem: IMainButtonItem = {
  key: "test-main-button",
  label: "Show dialog",
  icon: "icon.svg",
  onClick: () => {}
};

const mainButtonItem: IMainButtonItem = {
  key: "test-main-button",
  label: "Show dialog",
  icon: "icon.svg",
  items: [createItem],
  onClick: () => {}
};

plugin.addMainButtonItem(mainButtonItem);

declare global {
  interface Window {
    Plugins: any;
  }
}

// ...
```

## Step 3: Create the Button Component
Define an [IButton](../../../usage-sdk/coding-plugin/plugin-components/button) instance and wrap it inside ButtonGroup:

```js
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
// ...

const plugin = new Boxcomponentplugin();

// Define button behavior and appearance
const ButtonProps: IButton = {
  label: "Save",
  onClick: () => {
    console.log("Save button clicked");
  },
  size: ButtonSize.normal,
  primary: true,
  scale: false,
  isLoading: false,
  isDisabled: false,
  withLoadingAfterClick: false,
  disableWhileRequestRunning: false
};

// Wrap button into a component group
const ButtonComponent: ButtonGroup = {
  component: Components.button,
  props: ButtonProps,
  contextName: "acceptButton"
};

const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  displayProp: "flex",
  justifyContent: "center",
  alignItems: "center",
  children: [ButtonComponent]
};
```

## Step 4: Define Modal behavior
Create the [Modal Dialog component](../../../usage-sdk/coding-plugin/plugin-components/modaldialog) with the [Box component](../../../usage-sdk/coding-plugin/plugin-components/box) body created on the previous step.

```js
// ...

const modalDialogProps: IModalDialog = {
  dialogHeader: "Box layout example",
  dialogBody: demoBox,
  displayType: ModalDisplayType.modal,
  onClose: () => ({ actions: [Actions.closeModal] }),
  onLoad: async () => ({
    newDialogHeader: modalDialogProps.dialogHeader,
    newDialogBody: modalDialogProps.dialogBody
  }),
  autoMaxHeight: true,
  autoMaxWidth: true
};

// ...
```

## Step 5: Append Modal to the Main Button
Update main button's onClick function with the modal display behavior

```js
// ...

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

// ...
```

## Step 6: Build the Plugin

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and bundles everything into `dist/plugin.zip`.

## Step 7: Upload to DocSpace
1. Go to **Admin Panel → Integration → Plugins**
2. Click **Upload** and select `dist/plugin.zip`
3. Enable the plugin toggle


## Step 8: Test the Plugin
1. Open any Room
2. Click the **More (⋯)** button in the toolbar
3. Click the `"Show dialog"` button
4. A modal appears with a `"Save"` button
5. Click it — `"Save button clicked"` will appear in the console