# ComboBox component

This guide demonstrates how to configure and use the [ComboBox](../../../usage-sdk/coding-plugin/plugin-components/combobox) component in the DocSpace Plugin SDK with nearly all supported layout and style properties.

<details>
  <summary>Full Example</summary>

``` js
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

// ...
```

## Step 3: Define a ComboBox component

Create styled [ComboBox component](../../../usage-sdk/coding-plugin/plugin-components/combobox) and embed it in a [Box component](../../../usage-sdk/coding-plugin/plugin-components/box) below the plugin initialization.

```js
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

// ...

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

// ...
```

## Step 4: Define Modal Dialog

Create the [Modal Dialog component](../../../usage-sdk/coding-plugin/plugin-components/modaldialog) with the [Box component](../../../usage-sdk/coding-plugin/plugin-components/box) body created on the previous step.

```js
// ...

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

1. Log in as **Admin**
2. Go to **Admin Panel → Integration → Plugins**
3. Click **Upload**, select `dist/plugin.zip`
4. Toggle your plugin to **enabled**


## Step 8: Test the Plugin

1. Enter any Room
2. Open the **More (⋯)** menu
3. Click **"Show dialog"**
4. A modal will appear showing the language ComboBox
5. Select a language and confirm the value updates dynamically