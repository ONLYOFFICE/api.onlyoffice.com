# ComboBox component

This guide demonstrates how to configure and use the [ComboBox](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/combobox) component in the DocSpace Plugins SDK with nearly all supported layout and style properties.

<details>
  <summary>Full example</summary>

``` ts
import {
  IPlugin,
  PluginStatus,
  IMainButtonPlugin,
  IMainButtonItem
} from '@onlyoffice/docspace-plugin-sdk'

import {
  IComboBox,
  IComboBoxItem,
  IBox,
  Components,
  IModalDialog,
  ModalDisplayType,
  IMessage,
  Actions
} from '@onlyoffice/docspace-plugin-sdk';

class Combocomponentplugin implements IPlugin, IMainButtonPlugin {
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

const plugin = new Combocomponentplugin();

const options: IComboBoxItem[] = [
  {key: "auto", label: "Auto"},
  {key: "en", label: "English"},
  {key: "fr", label: "Française"},
]

const onSelect = (option: IComboBoxItem) => {
  comboBox.selectedOption = option

  const message: IMessage = {
    actions: [Actions.updateProps],
    newProps: comboBox,
  }
  return message
}

const comboBox: IComboBox = {
  options,
  selectedOption: options[0],
  onSelect,
  scaled: true,
  dropDownMaxHeight: 400,
  directionY: "both",
  scaledOptions: true,
  directionX: "right",
  displayType: "default",
  showDisabledItems: true,
  withBackdrop: true,
  isDisabled: false,
  noBorder: false,
  opened: false,
  modernView: false
}

// Add text component with props to the modal
const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.comboBox, props: comboBox }
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

window.Plugins.Combocomponentplugin = plugin || {};

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

class Combocomponentplugin implements IPlugin, IMainButtonPlugin {
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

const plugin = new Combocomponentplugin();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Textcomponentplugin = plugin || {};

export default plugin;
```

## Step 4: Add a main button item

Add a [main button item](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem/) below the plugin initialization:

```ts
const plugin = new Combocomponentplugin();

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
```

## Step 5: Define a ComboBox component

Create a styled [ComboBox component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/combobox) and embed it in a [Box component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/box) below the plugin initialization:

```ts
import {
  IComboBox,
  IComboBoxItem,
  IBox,
  Components,
  IModalDialog,
  ModalDisplayType,
  IMessage,
  Actions
} from '@onlyoffice/docspace-plugin-sdk'

const plugin = new Combocomponentplugin();

const options: IComboBoxItem[] = [
  { key: "auto", label: "Auto" },
  { key: "en", label: "English" },
  { key: "fr", label: "Française" }
];

const onSelect = (option: IComboBoxItem) => {
  comboBox.selectedOption = option;

  const message: IMessage = {
    actions: [Actions.updateProps],
    newProps: comboBox,
  };
  return message;
};

const comboBox: IComboBox = {
  options,
  selectedOption: options[0],
  onSelect,
  scaled: true,
  dropDownMaxHeight: 400,
  directionY: "both",
  scaledOptions: true,
  directionX: "right",
  displayType: "default",
  showDisabledItems: true,
  withBackdrop: true,
  isDisabled: false,
  noBorder: false,
  opened: false,
  modernView: false
};

// Add text component with props to the modal
const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.comboBox, props: comboBox }
  ],
}
```

## Step 6: Define the modal dialog behavior

Create a [ModalDialog component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/modaldialog) with the [Box component](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-components/box) body from the previous step:

```ts
const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.comboBox, props: comboBox }
  ],
};

export const modalDialogProps: IModalDialog = {
  dialogHeader: "Sample modal dialog",
  dialogBody: body,
  displayType: ModalDisplayType.modal,
  onClose: () => {
    const message: IMessage = {
      actions: [Actions.closeModal],
    };
    return message;
  },

  onLoad: async () => {
    return {
      newDialogHeader: modalDialogProps.dialogHeader,
      newDialogBody: modalDialogProps.dialogBody,
    };
  },
  autoMaxHeight: true,
  autoMaxWidth: true,
};
```

## Step 7: Append the modal dialog to the main button

Update the main button's [`onClick`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md#onclick) function with the modal display behavior:

```ts
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
```

## Step 8: Build the plugin

From the root of your plugin, run the following command:

```bash
npm run build
```

This compiles your plugin from `src/index.ts` into `dist/plugin.js` and bundles it as `dist/plugin.zip`.

## Step 9: Upload to DocSpace

1. Log in as an administrator.
2. Go to **Admin Panel → Integration → Plugins**
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 10: Test the plugin

1. Go to any room.
2. In the top toolbar, click **Actions → More**.
3. Click the **Show dialog** button.
4. A modal will appear displaying the language combo box.
5. Select a language and verify that the value updates dynamically.
