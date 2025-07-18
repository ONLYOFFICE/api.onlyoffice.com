# Button component

This guide demonstrates how to render and configure the [Button](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/button) component using the DocSpace Plugins SDK.

<details>
  <summary>Full example</summary>

```ts
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

## Step 4: Add a main button item

Add a [main button item](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem) below the plugin initialization:

```ts
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

## Step 5: Create a Button component

Define an [IButton](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/button) instance and wrap it inside `ButtonGroup`:

```ts
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

// ...
```

## Step 6: Define the modal dialog behavior

Create a [ModalDialog component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/modaldialog) with the [Box component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/box) body from the previous step:

```ts
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

From the root of your plugin, run the following command:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and bundles everything into `dist/plugin.zip`.

## Step 9: Upload to DocSpace

1. Log in as an administrator.
2. Go to **Admin Panel → Integration → Plugins**
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 10: Test the plugin

1. Go to any room.
2. In the top toolbar, click **Actions → More**.
3. Click the **Show dialog** button.
4. A styled container with the **Save** button inside should appear.
5. Click it — `"Save button clicked"` will appear in the console.
