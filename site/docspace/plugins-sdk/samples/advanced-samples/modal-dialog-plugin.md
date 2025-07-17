# Basic modal dialog plugin

This guide walks you through building a plugin for DocSpace that adds a custom toolbar button. When clicked, it opens a dialog allowing users to input a filename and create an empty `.docx` file in the current room using a backend API call.

<details>
  <summary>index.ts</summary>

``` js
// For plugin
import { 
  IPlugin, 
  PluginStatus, 
  IMainButtonPlugin, 
  IMainButtonItem, 
  IApiPlugin 
} from '@onlyoffice/docspace-plugin-sdk'

// For Modal
import { 
  Actions, 
  Components, 
  IBox, 
  IText, 
  IMessage, 
  IModalDialog, 
  ModalDisplayType, 
  IButton, 
  ButtonSize,
  IInput,
  InputAutocomplete,
  InputSize,
  InputType,
  InputGroup
} from "@onlyoffice/docspace-plugin-sdk"

class MainButtonDialog implements IPlugin, IMainButtonPlugin, IApiPlugin {
  status: PluginStatus = PluginStatus.active;
  mainButtonItems: Map<string, IMainButtonItem> = new Map();

  currentFolderId: number | null = null;

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
  
  origin = "";
  proxy = "";
  prefix = "";

  setOrigin = (origin: string): void => {
    this.origin = origin;
  };

  getOrigin = (): string => {
    return this.origin;
  };

  setProxy = (proxy: string): void => {
    this.proxy = proxy;
  };

  getProxy = (): string => {
    return this.proxy;
  }

  setPrefix = (prefix: string): void => {
    this.prefix = prefix;
  };

  getPrefix = (): string => {
    return this.prefix;
  };

  setAPI = (origin: string, proxy: string, prefix: string): void => {
    this.origin = origin;
    this.proxy = proxy;
    this.prefix = prefix;
  };

  getAPI = (): {origin: string; proxy: string; prefix: string} => {
    return { origin: this.origin, proxy: this.proxy, prefix: this.prefix };
  };

  setCurrentFolderId = (id: number | null) => {
    this.currentFolderId = id;
  };
}

const plugin = new MainButtonDialog();

// Create text props
const labelProps: IText = {
  text: "Name your file",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "20px",
  noSelect: true,
};

// Create input props
const onChange = (value: string) => {
  input.value = value;
  const message: IMessage = {
    actions: [Actions.updateProps],
    newProps: input,
  };
  return message;
};

const input: IInput = {
  value: "",
  onChange,
  scale: true,
  size: InputSize.base,
  type: InputType.text,
  autoComplete: InputAutocomplete.off,
};

const inputComponent: InputGroup = {
  component: Components.input,
  props: input,
};

const inputProps: IBox = {
  marginProp: "0 0 24px",
  children: [inputComponent]
};

// Create button props
const createFile = () => {
  fetch(
    `${plugin.getOrigin()}/api/2.0/files/${plugin.currentFolderId}/file`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        title: `${input.value}.docx`
      }),
    }
  );
};

const buttonProps: IButton = {
  label: "Create File",
  primary: true,
  size: ButtonSize.normal,
  scale: true,
  isDisabled: false,
  withLoadingAfterClick: true,
  onClick: () => {
    console.log(`Creating file named ${input.value}.docx`)
    createFile()
  }
};

// Add label, input, and button components with props to the modal
const body: IBox = {
  widthProp: "700px",
  heightProp: "150px",
  children: [
    { component: Components.text, props: labelProps },
    { component: Components.box, props: inputProps },
    { component: Components.button, props: buttonProps }
  ],
};

export const modalDialogProps: IModalDialog = {
  dialogHeader: "Create an empty DOCX file",
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

// Create the main button with modal on click
const createItem: IMainButtonItem = {
  key: "main-button",
  label: "Create new file",
  icon: "icon.svg",
  onClick: () => {}
}

const mainButtonItem: IMainButtonItem = {
  key: "main-button",
  label: "Create new file",
  icon: "icon.svg",
  items: [createItem],
  onClick: (id: number) => {
    plugin.setCurrentFolderId(id)
    const message: IMessage = {
        actions: [Actions.showModal],
        modalDialogProps: modalDialogProps,
      };
  
      return message;
  }
};

// Add the main button to the plugin
plugin.addMainButtonItem(mainButtonItem);

declare global {
  interface Window {
    Plugins: any;
  }
};

window.Plugins.Mainbtndialog = plugin || {};

export default plugin;
```

</details>

## Before you start

Make sure you have a DocSpace server running, and install the Plugin SDK globally:

```bash
npm i -g @onlyoffice/docspace-plugin-sdk
```

## Step 1: Create the Plugin

1. Initialize your plugin using the CLI:

   ``` sh
   npx create-docspace-plugin
   ```

2. Fill out [basic metadata](/docspace/plugins-sdk/usage-sdk/creating-plugin-template.md): plugin name, version, author, description, logo, license, homepage.

3. Select the required scopes from the list of available options. Use the arrow keys to highlight `Main button` and `API`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["MainButton", "API"]
}
```

Also, verify that the `scripts/createZip.js` file is present. This script will:

- compile your plugin;
- package everything into `dist/plugin.zip`.

## Step 3: Set up plugin class

The class tracks plugin status, current folder ID, and the API base URL (`origin`). It also registers main buttons and stores API config.

<details>
  <summary>MainButtonDialog class</summary>

``` js
import { 
  IPlugin, 
  PluginStatus, 
  IMainButtonPlugin, 
  IMainButtonItem, 
  IApiPlugin 
} from '@onlyoffice/docspace-plugin-sdk'

class MainButtonDialog implements IPlugin, IMainButtonPlugin, IApiPlugin {
  status: PluginStatus = PluginStatus.active;
  mainButtonItems: Map<string, IMainButtonItem> = new Map();

  currentFolderId: number | null = null;

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
  
  origin = "";
  proxy = "";
  prefix = "";

  setOrigin = (origin: string): void => {
    this.origin = origin;
  };

  getOrigin = (): string => {
    return this.origin;
  };

  setProxy = (proxy: string): void => {
    this.proxy = proxy;
  };

  getProxy = (): string => {
    return this.proxy;
  }

  setPrefix = (prefix: string): void => {
    this.prefix = prefix;
  };

  getPrefix = (): string => {
    return this.prefix;
  };

  setAPI = (origin: string, proxy: string, prefix: string): void => {
    this.origin = origin;
    this.proxy = proxy;
    this.prefix = prefix;
  };

  getAPI = (): {origin: string; proxy: string; prefix: string} => {
    return { origin: this.origin, proxy: this.proxy, prefix: this.prefix };
  };

  setCurrentFolderId = (id: number | null) => {
    this.currentFolderId = id;
  };
}

const plugin = new MainButtonDialog();

// Add the plugin items and components below the plugin initialization line

declare global {
  interface Window {
    Plugins: any;
  }
};

window.Plugins.Mainbtndialog = plugin || {};

export default plugin;
```

</details>

Ensure that `currentFolderId` functionality was added, it's required for file creating API calls.

## Step 3: Set up UI components

Set up UI components for the modal dialog:
- Input label
- Input
- Button

<details>
  <summary>Complete UI components</summary>

``` js
// Create text props
const labelProps: IText = {
  text: "Name your file",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "20px",
  noSelect: true,
};

// Create input props
const onChange = (value: string) => {
  input.value = value;
  const message: IMessage = {
    actions: [Actions.updateProps],
    newProps: input,
  };
  return message;
};

const input: IInput = {
  value: "",
  onChange,
  scale: true,
  size: InputSize.base,
  type: InputType.text,
  autoComplete: InputAutocomplete.off,
};

const inputComponent: InputGroup = {
  component: Components.input,
  props: input,
};

const inputProps: IBox = {
  marginProp: "0 0 24px",
  children: [inputComponent]
};

// Create button props
const createFile = () => {
  fetch(
    `${plugin.getOrigin()}/api/2.0/files/${plugin.currentFolderId}/file`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        title: `${input.value}.docx`
      }),
    }
  );
};

const buttonProps: IButton = {
  label: "Create File",
  primary: true,
  size: ButtonSize.normal,
  scale: true,
  isDisabled: false,
  withLoadingAfterClick: true,
  onClick: () => {
    console.log(`Creating file named ${input.value}.docx`)
    createFile()
  }
};
```
</details>

## Step 4: Build Modal Dialog

Create a modal dialog with a label, input, and button. The modal uses `Actions.showModal` and auto-adjusts width/height:

<details>
  <summary>Complete UI components</summary>

```js
const body: IBox = {
  widthProp: "700px",
  heightProp: "150px",
  children: [
    { component: Components.text, props: labelProps },
    { component: Components.box, props: inputProps },
    { component: Components.button, props: buttonProps }
  ],
};

export const modalDialogProps: IModalDialog = {
  dialogHeader: "Create an empty DOCX file",
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
</details>

## Step 5: Register Main Button

Register a toolbar button labeled `"Create new file"` that shows the modal on click:

<details>
  <summary>Complete UI components</summary>
  
```js
const createItem: IMainButtonItem = {
  key: "main-button",
  label: "Create new file",
  icon: "icon.svg",
  onClick: () => {}
}

const mainButtonItem: IMainButtonItem = {
  key: "main-button",
  label: "Create new file",
  icon: "icon.svg",
  items: [createItem],
  onClick: (id: number) => {
    plugin.setCurrentFolderId(id)
    const message: IMessage = {
        actions: [Actions.showModal],
        modalDialogProps: modalDialogProps,
      };
  
      return message;
  }
};

// Add the main button to the plugin
plugin.addMainButtonItem(mainButtonItem);
```
</details>

Notice that `folder ID` is set here using Main Button ID.

## Step 6: Build the Plugin

From the root of your plugin:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`

## Step 7: Upload to DocSpace

1. Log in as an administrator
2. Navigate to: **Admin Panel → Integration → Plugins**
3. Click **Upload**, and select the generated `dist/plugin.zip`
4. Enable the plugin toggle if not already active

## Step 8: Test It

1. Go to any **Room**
2. Click the **...More** menu in the top toolbar
3. Look for your button titled `"Create new file"`
4. Click it - a modal dialog should open. Enter file name, submit and check new file created in your room or folder