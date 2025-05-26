# Toggle Button component

This guide demonstrates how to configure and use the [Toggle Button](../../../usage-sdk/coding-plugin/plugin-components/togglebutton) component in the DocSpace Plugin SDK with nearly all supported layout and style properties.

<details>
  <summary>Full Example</summary>

```js
import {
  IPlugin,
  PluginStatus,
  IMainButtonPlugin,
  IMainButtonItem
} from '@onlyoffice/docspace-plugin-sdk'

import {
  IToggleButton,
  IBox,
  Components,
  IModalDialog,
  ModalDisplayType,
  IMessage,
  Actions
} from '@onlyoffice/docspace-plugin-sdk';

class Toggleplugin implements IPlugin, IMainButtonPlugin {
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

const plugin = new Toggleplugin();

// Create toggle props
const onChange = () => {
  toggleButtonProps.isChecked = !toggleButtonProps.isChecked

  const message: IMessage = {
    actions: [Actions.updateProps],
    newProps: toggleButtonProps,
  }
  return message
}

const toggleButtonProps: IToggleButton = {
  label: "Enable Notifications",
  isChecked: false,
  onChange,
  style: {
    backgroundColor: "#f5f5f5",
    padding: "8px",
    borderRadius: "4px"
  }
}

// Add toggle component with props to the modal
const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.toggleButton, props: toggleButtonProps }
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
  IMainButtonItem
} from '@onlyoffice/docspace-plugin-sdk'

class Toggleplugin implements IPlugin, IMainButtonPlugin {
  status: PluginStatus = PluginStatus.active;
  mainButtonItems: Map<string, IMainButtonItem> = new Map();

  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };

  getStatus = () => this.status;

  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  addMainButtonItem = (item: IMainButtonItem): void => {
    this.mainButtonItems.set(item.key, item);
  };

  getMainButtonItems = (): Map<string, IMainButtonItem> => this.mainButtonItems;

  updateMainButtonItem = (item: IMainButtonItem): void => {
    this.mainButtonItems.set(item.key, item);
  };
}

const plugin = new Toggleplugin();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Toggleplugin = plugin || {};

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

Add a [Main Button item](../../../usage-sdk/coding-plugin/plugin-items/mainbuttonitem/) below the plugin initialization.

```js
// ...

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
  onClick: () => {}
}

plugin.addMainButtonItem(mainButtonItem);

declare global {
  interface Window {
    Plugins: any;
  }
}

// ...
```

## Step 3: Define a Toggle Button component

Create styled [Toggle Button component](../../../usage-sdk/coding-plugin/plugin-components/text) with the onChange function, and embed it in a [Box component](../../../usage-sdk/coding-plugin/plugin-components/box) below the plugin initialization.


```js
import {
  IToggleButton,
  IBox,
  Components,
  IModalDialog,
  ModalDisplayType,
  IMessage,
  Actions
} from '@onlyoffice/docspace-plugin-sdk';

// ...

const plugin = new Toggleplugin();

const onChange = () => {
  toggleButtonProps.isChecked = !toggleButtonProps.isChecked

  const message: IMessage = {
    actions: [Actions.updateProps],
    newProps: toggleButtonProps,
  }
  return message
}

const toggleButtonProps: IToggleButton = {
  label: "Enable Notifications",
  isChecked: false,
  onChange,
  style: {
    backgroundColor: "#f5f5f5",
    padding: "8px",
    borderRadius: "4px"
  }
}

const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.toggleButton, props: toggleButtonProps }
  ],
}

//...
```

## Step 4: Define Modal Dialog

Create the [Modal Dialog component](../../../usage-sdk/coding-plugin/plugin-components/modaldialog) with the [Box component](../../../usage-sdk/coding-plugin/plugin-components/box) body created on the previous step.

```js
// ...

const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.toggleButton, props: toggleButtonProps }
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

// ...
```

## Step 5: Append Modal to the Main Button

Update main button's onClick function with the modal display behavior.

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

This compiles your plugin from `src/index.ts` into `dist/plugin.js` and bundles it as `dist/plugin.zip`.

## Step 7: Upload to DocSpace

1. Go to **Admin Panel → Integration → Plugins**
2. Click **Upload** and select `dist/plugin.zip`
3. Enable the plugin toggle

## Step 8: Test the Plugin

1. Open any Room
2. Click the **More (⋯)** button in the toolbar
3. Click **"Show dialog"**
4. A modal should appear with a toggle button
5. Toggling it should visually update its state