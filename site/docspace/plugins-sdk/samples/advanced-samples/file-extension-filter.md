# File extension filter plugin

This guide shows how to build a DocSpace plugin that adds a context menu action to rooms, opens a modal with a file extension filter, and displays a list of matching files using UI components.

<details>
  <summary>Full example</summary>

``` ts
import {
  IPlugin,
  PluginStatus,
  IContextMenuPlugin,
  IContextMenuItem,
  FilesType,
  UsersType,
  IMessage,
  Actions,
  IComboBox,
  IComboBoxItem,
  IButton,
  ButtonSize,
  IBox,
  IModalDialog,
  ModalDisplayType,
  Components
} from '@onlyoffice/docspace-plugin-sdk';

/**
 * Main plugin class implementing context menu extension
 */
class ExtSearchPlugin implements IPlugin, IContextMenuPlugin {
  status: PluginStatus = PluginStatus.active;

  origin = "";
  proxy = "";
  prefix = "";

  contextMenuItems: Map<string, IContextMenuItem> = new Map();

  // Called when the plugin loads
  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };

  getStatus = () => this.status;

  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  addContextMenuItem = (item: IContextMenuItem): void => {
    this.contextMenuItems.set(item.key, item);
  };

  getContextMenuItems = (): Map<string, IContextMenuItem> => this.contextMenuItems;

  getContextMenuItemsKeys = (): string[] => Array.from(this.contextMenuItems.keys());

  updateContextMenuItem = (item: IContextMenuItem): void => {
    this.contextMenuItems.set(item.key, item);
  };

  // Set API parameters provided by DocSpace
  setAPI = (origin: string, proxy: string, prefix: string): void => {
    this.origin = origin;
    this.proxy = proxy;
    this.prefix = prefix;
  };

  // Get API parameters
  getAPI = () => ({
    origin: this.origin,
    proxy: this.proxy,
    prefix: this.prefix
  });
}

const plugin = new ExtSearchPlugin();

// Store current API base URL and selected room ID
let apiBaseURL: string = plugin.getAPI().origin;
let currentRoomId: number | null = null;

// ComboBox configuration with extension filter options
const extensionOptions: IComboBoxItem[] = [
  { key: "auto", label: "Auto" },
  { key: ".docx", label: "Document" },
  { key: ".jpg", label: "JPEG" },
];

// Triggered when user selects a new extension from dropdown
const onExtensionSelect = (option: IComboBoxItem): IMessage => {
  comboBox.selectedOption = option;
  return {
    actions: [Actions.updateProps],
    newProps: comboBox
  };
};

// ComboBox component definition
const comboBox: IComboBox = {
  options: extensionOptions,
  selectedOption: { key: "auto", label: "Auto" },
  onSelect: onExtensionSelect,
  scaled: true,
  dropDownMaxHeight: 400,
  directionY: "both",
  scaledOptions: true,
};

// Button that fetches files and filters by selected extension
const viewFilesButtonProps: IButton = {
  label: "View Files",
  primary: true,
  size: ButtonSize.normal,
  scale: true,
  isDisabled: false,
  withLoadingAfterClick: true,
  onClick: async (): Promise<IMessage> => {
    // Request file list from current room
    const response = await fetch(`${apiBaseURL}/api/2.0/files/${currentRoomId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    const files = data.response.files;
    const extension = comboBox.selectedOption.key;

    // Filter files by selected extension (or show all if "auto" selected)
    const filtered = files.filter((file: any) =>
      extension === "auto" || file.fileExst === extension
    );

    // Create UI blocks for each file
    const fileBlocks = filtered.map((file: any) => ({
      component: Components.box,
      props: {
        displayProp: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginProp: "0 0 24px",
        children: [
          {
            component: Components.text,
            props: {
              text: file.title,
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
              noSelect: true,
            }
          },
          {
            component: Components.button,
            props: {
              label: "Open File",
              size: ButtonSize.small,
              scale: false,
              primary: true,
              onClick: () => {
                // Open file in new tab
                window.open(file.webUrl, "_blank");
              }
            },
          }
        ]
      }
    }));

    // Replace modal content with new list
    modalBody.children = [...fileBlocks];

    return {
      actions: [Actions.showModal],
      modalDialogProps: modalProps
    };
  }
};

// Modal layout combining dropdown and action button
const modalBody: IBox = {
  widthProp: "700px",
  heightProp: "150px",
  marginProp: "0 0 24px",
  children: [
    {
      component: Components.comboBox,
      props: comboBox
    },
    {
      component: Components.button,
      props: viewFilesButtonProps
    }
  ]
};

// Modal configuration object
const modalProps: IModalDialog = {
  dialogHeader: "Filter Files by Extension",
  dialogBody: modalBody,
  displayType: ModalDisplayType.modal,
  onClose: () => ({ actions: [Actions.closeModal] }),
  onLoad: async () => ({
    newDialogHeader: modalProps.dialogHeader,
    newDialogBody: modalProps.dialogBody
  }),
  autoMaxHeight: true,
  autoMaxWidth: true,
};

// Context menu item definition for room entities
const contextMenuItem: IContextMenuItem = {
  key: "extsearch-context-menu",
  label: "Ext Search",
  icon: "icon.svg",
  onClick: (id: number) => {
    // Store selected room ID and show modal
    currentRoomId = id;
    return {
      actions: [Actions.showModal],
      modalDialogProps: modalProps
    };
  },
  fileType: [FilesType.room],
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin],
};

// Register menu item inside the plugin
plugin.addContextMenuItem(contextMenuItem);

// Register plugin globally for DocSpace to find
declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins = window.Plugins || {};
window.Plugins.Extsearch = plugin;

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

3. Select the required scopes from the list of available options. Use the arrow keys to highlight `Context menu`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["ContextMenu"]
}
```

Also, verify that the `scripts/createZip.js` file is present. This script will:

- compile your plugin;
- package everything into `dist/plugin.zip`.

## Step 3: Review and extend plugin code

By default, the plugin template includes a basic implementation in the `src/index.ts` file. Here's an example of a [context menu plugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md):

<details>
  <summary>ExtSearchPlugin class</summary>

```js
import {
  IPlugin,
  PluginStatus,
  IContextMenuPlugin,
  IContextMenuItem,
  FilesType,
  UsersType,
  IMessage,
  Actions,
  IComboBox,
  IComboBoxItem,
  IButton,
  ButtonSize,
  IBox,
  IModalDialog,
  ModalDisplayType,
  Components
} from '@onlyoffice/docspace-plugin-sdk';

/**
 * Main plugin class implementing context menu extension
 */
class ExtSearchPlugin implements IPlugin, IContextMenuPlugin {
  status: PluginStatus = PluginStatus.active;

  origin = "";
  proxy = "";
  prefix = "";

  contextMenuItems: Map<string, IContextMenuItem> = new Map();

  // Called when the plugin loads
  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };

  getStatus = () => this.status;

  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  addContextMenuItem = (item: IContextMenuItem): void => {
    this.contextMenuItems.set(item.key, item);
  };

  getContextMenuItems = (): Map<string, IContextMenuItem> => this.contextMenuItems;

  getContextMenuItemsKeys = (): string[] => Array.from(this.contextMenuItems.keys());

  updateContextMenuItem = (item: IContextMenuItem): void => {
    this.contextMenuItems.set(item.key, item);
  };

  // Set API parameters provided by DocSpace
  setAPI = (origin: string, proxy: string, prefix: string): void => {
    this.origin = origin;
    this.proxy = proxy;
    this.prefix = prefix;
  };

  // Get API parameters
  getAPI = () => ({
    origin: this.origin,
    proxy: this.proxy,
    prefix: this.prefix
  });
}

const plugin = new ExtSearchPlugin();

// Add the plugin items and components below the plugin initialization line

// Register plugin globally for DocSpace to find
declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins = window.Plugins || {};
window.Plugins.Extsearch = plugin;

export default plugin;
```

</details>

## Step 4: Add the context menu and UI logic

Define a dropdown to choose a file extension and a button to filter and render files:

<details>
  <summary>UI components</summary>

```js
// Store current API base URL and selected room ID
let apiBaseURL: string = plugin.getAPI().origin;
let currentRoomId: number | null = null;

// ComboBox configuration with extension filter options
const extensionOptions: IComboBoxItem[] = [
  { key: "auto", label: "Auto" },
  { key: ".docx", label: "Document" },
  { key: ".jpg", label: "JPEG" },
];

// Triggered when user selects a new extension from dropdown
const onExtensionSelect = (option: IComboBoxItem): IMessage => {
  comboBox.selectedOption = option;
  return {
    actions: [Actions.updateProps],
    newProps: comboBox
  };
};

// ComboBox component definition
const comboBox: IComboBox = {
  options: extensionOptions,
  selectedOption: { key: "auto", label: "Auto" },
  onSelect: onExtensionSelect,
  scaled: true,
  dropDownMaxHeight: 400,
  directionY: "both",
  scaledOptions: true,
};

// Button that fetches files and filters by selected extension
const viewFilesButtonProps: IButton = {
  label: "View Files",
  primary: true,
  size: ButtonSize.normal,
  scale: true,
  isDisabled: false,
  withLoadingAfterClick: true,
  onClick: async (): Promise<IMessage> => {
    // Request file list from current room
    const response = await fetch(`${apiBaseURL}/api/2.0/files/${currentRoomId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    const files = data.response.files;
    const extension = comboBox.selectedOption.key;

    // Filter files by selected extension (or show all if "auto" selected)
    const filtered = files.filter((file: any) =>
      extension === "auto" || file.fileExst === extension
    );

    // Create UI blocks for each file
    const fileBlocks = filtered.map((file: any) => ({
      component: Components.box,
      props: {
        displayProp: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginProp: "0 0 24px",
        children: [
          {
            component: Components.text,
            props: {
              text: file.title,
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
              noSelect: true,
            }
          },
          {
            component: Components.button,
            props: {
              label: "Open File",
              size: ButtonSize.small,
              scale: false,
              primary: true,
              onClick: () => {
                // Open file in new tab
                window.open(file.webUrl, "_blank");
              }
            },
          }
        ]
      }
    }));

    // Replace modal content with new list
    modalBody.children = [...fileBlocks];

    return {
      actions: [Actions.showModal],
      modalDialogProps: modalProps
    };
  }
};

// Modal layout combining dropdown and action button
const modalBody: IBox = {
  widthProp: "700px",
  heightProp: "150px",
  marginProp: "0 0 24px",
  children: [
    {
      component: Components.comboBox,
      props: comboBox
    },
    {
      component: Components.button,
      props: viewFilesButtonProps
    }
  ]
};

// Modal configuration object
const modalProps: IModalDialog = {
  dialogHeader: "Filter Files by Extension",
  dialogBody: modalBody,
  displayType: ModalDisplayType.modal,
  onClose: () => ({ actions: [Actions.closeModal] }),
  onLoad: async () => ({
    newDialogHeader: modalProps.dialogHeader,
    newDialogBody: modalProps.dialogBody
  }),
  autoMaxHeight: true,
  autoMaxWidth: true,
};

// Context menu item definition for room entities
const contextMenuItem: IContextMenuItem = {
  key: "extsearch-context-menu",
  label: "Ext Search",
  icon: "icon.svg",
  onClick: (id: number) => {
    // Store selected room ID and show modal
    currentRoomId = id;
    return {
      actions: [Actions.showModal],
      modalDialogProps: modalProps
    };
  },
  fileType: [FilesType.room],
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin],
};

// Register menu item inside the plugin
plugin.addContextMenuItem(contextMenuItem);
```

</details>

## Step 5: Build the plugin

From the root of your plugin, run the following command:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`.

## Step 6: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 7: Test the plugin

1. Go to any room.
2. Right-click on a room.
3. Click the **Ext Search** menu item.
4. Select a file type, then click **View Files**.
5. A list of filtered files should appear, each with the **Open File** button.
