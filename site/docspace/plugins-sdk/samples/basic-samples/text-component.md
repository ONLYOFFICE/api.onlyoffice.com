# Text Component

This guide demonstrates how to configure and use the [Text](../../usage-sdk/coding-plugin/plugin-components/text) component in the DocSpace Plugin SDK with nearly all supported layout and style properties.

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
  IText,
  IBox,
  Components,
  IModalDialog,
  ModalDisplayType,
  IMessage,
  Actions
} from '@onlyoffice/docspace-plugin-sdk';

class Textcomponentplugin implements IPlugin, IMainButtonPlugin {
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

const plugin = new Textcomponentplugin();

// Create text props
const textProps: IText = {
  text: "Document Management",
  title: "Full description shown on hover",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "32px",
  color: "#FF6F3D",
  isBold: false,
  noSelect: true,
  textAlign: "center"
}

// Add text component with props to the modal
const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.text, props: textProps }
  ],
}

const modalDialogProps: IModalDialog = {
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

window.Plugins.Textcomponentplugin = plugin || {};

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

class Textcomponentplugin implements IPlugin, IMainButtonPlugin {
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

const plugin = new Textcomponentplugin();

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

## Step 2: Add the Main Button

Add a main button below the plugin initialization

```js
// ...

const plugin = new Textcomponentplugin();

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

window.Plugins.Textcomponentplugin = plugin || {};

export default plugin;
```


## Step 3: Define Text Component

Create styled text and embed it in a `Box` below the plugin initialization.

```js
import {
  IText,
  IBox,
  Components,
  IModalDialog,
  ModalDisplayType,
  IMessage,
  Actions
} from '@onlyoffice/docspace-plugin-sdk'

// ...

const plugin = new Textcomponentplugin();

// Create text props
const textProps: IText = {
  text: "Document Management",
  title: "Full description shown on hover",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "32px",
  color: "#FF6F3D",
  isBold: false,
  noSelect: true,
  textAlign: "center"
};

const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.text, props: textProps }
  ],
};
```

## Step 4: Define Modal Behavior

Create the modal dialog with the IBox body created on the previous step.

```js
// ...

const body: IBox = {
  widthProp: "500px",
  heightProp: "100px",
  children: [
    { component: Components.text, props: textProps }
  ],
};

const modalDialogProps: IModalDialog = {
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

## Step 5: Append modal to the main button

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
4. A modal should appear showing your styled text