# Basic modal dialog plugin

This guide walks you through building a plugin for DocSpace that adds a custom toolbar button. When clicked, it opens a dialog allowing users to input a filename and create an empty `.docx` file in the current room using a backend API call.

<details>
  <summary>Complete index.ts</summary>

``` js
import { 
  IPlugin, 
  PluginStatus, 
  IMainButtonPlugin, 
  IMainButtonItem, 
  IApiPlugin 
} from '@onlyoffice/docspace-plugin-sdk'

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

const labelProps: IText = {
  text: "Name your file",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "20px",
  noSelect: true,
};

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
Use the arrow keys to highlight `Main button` and `API`, press `space` to select them, then press `enter` to confirm and generate the plugin template.

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:
```json
"scopes": ["MainButton", "API"]
```

## Step 2: Set Up Plugin Class

The class tracks plugin status, current folder ID, and the API base URL (`origin`). It also registers main buttons and stores API config.
<details>
  <summary>Complete MainButtonDialog class</summary>

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

declare global {
  interface Window {
    Plugins: any;
  }
};

window.Plugins.Mainbtndialog = plugin || {};

export default plugin;
```

</details>

Ensure `currentFolderId` functionality was added, it's required for file creating API calls:

```js
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

  ...

  setCurrentFolderId = (id: number | null) => {
    this.currentFolderId = id;
  };
}

const plugin = new MainButtonDialog();

declare global {
  interface Window {
    Plugins: any;
  }
};

window.Plugins.Mainbtndialog = plugin || {};

export default plugin;
```

## Step 3: Set up UI components

Set up UI components for the modal dialog:
- Input label
- Input
- Button

<details>
  <summary>Complete UI components</summary>

``` js
const labelProps: IText = {
  text: "Name your file",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "20px",
  noSelect: true,
};

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

``` js
const textProps: IText = {
  text: "Name your file",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "20px",
  noSelect: true,
};

...

const inputProps: IBox = {
  marginProp: "0 0 24px",
  children: [inputComponent]
};

...

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

## Step 4: Build Modal Dialog

Create a modal dialog with a label, input, and button. The modal uses `Actions.showModal` and auto-adjusts width/height:

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

## Step 5: Register Main Button

Register a toolbar button labeled `"Create new file"` that shows the modal on click:

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

plugin.addMainButtonItem(mainButtonItem);
```

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