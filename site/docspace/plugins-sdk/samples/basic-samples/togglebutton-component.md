# ToggleButton component

This guide demonstrates how to configure and use the [ToggleButton](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/togglebutton) component in the DocSpace Plugins SDK with nearly all supported layout and style properties.

<details>
  <summary>Full example</summary>

```ts
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

Make sure you have a DocSpace server running, and install DocSpace Plugins SDK globally:

```bash
npm i -g @onlyoffice/docspace-plugin-sdk
```

## Step 1: Create a plugin

1. Initialize your plugin using the CLI:

   ``` sh
   npx create-docspace-plugin
   ```

2. Fill out [basic metadata](/docspace/plugins-sdk/usage-sdk/creating-plugin-template.md): plugin name, version, author, description, logo, license, homepage.

3. Select the required scopes from the list of available options. Use the arrow keys to highlight `Main button`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["MainButton"]
}
```

Also, verify that the `scripts/createZip.js` file is present. This script will:

- compile your plugin;
- package everything into `dist/plugin.zip`.

## Step 3: Review and extend plugin code

By default, the plugin template includes a basic implementation in the `src/index.ts` file. Here's an example of a [main button plugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/mainbuttonplugin):

```ts
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

## Step 4: Add a main button item

Add a [main button item](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem/) below the plugin initialization:

```ts
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

## Step 5: Define a ToggleButton component

Create a styled [ToggleButton component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/togglebutton) with the `onChange` function, and embed it in a [Box component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/box) below the plugin initialization:

```ts
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

## Step 6: Define the modal dialog behavior

Create a [ModalDialog component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/modaldialog) with the [Box component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/box) body from the previous step:

```ts
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

## Step 7: Append the modal dialog to the main button

Update the main button's [`onClick`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md#onclick) function with the modal display behavior:

```ts
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

## Step 8: Build the plugin

```bash
npm run build
```

This compiles your plugin from `src/index.ts` into `dist/plugin.js` and bundles it as `dist/plugin.zip`.

## Step 9: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 10: Test the plugin

1. Go to any room.
2. In the top toolbar, click **Actions → More**.
3. Click **Show dialog**.
4. A styled container with a toggle button inside should appear.
5. Toggle the button to observe the state change.
