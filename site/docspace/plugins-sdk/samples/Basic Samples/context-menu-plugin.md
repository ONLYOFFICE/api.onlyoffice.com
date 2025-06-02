# Creating a Context Menu Plugin

This guide walks you through creating a basic plugin for DocSpace that adds an item to the file context menu and logs an action when clicked.

## Before you start

Make sure you have a DocSpace server running and install DocSpace Plugin SDK globally:

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
Use the arrow keys to highlight `Context menu`, press `space` to select it, then press `enter` to confirm and generate the plugin template.

## Step 2: Confirm Plugin Configuration

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:

```json
"scopes": ["ContextMenu"]
```

Also verify that the `scripts/createZip.js` file is present. This script will:
- Compile your plugin
- Package everything into `dist/plugin.zip`

## Step 3: Review and Extend Plugin Code

By default, the plugin template includes a basic implementation inside the `src/index.ts` file. Here's an example implementation:

```js
import {
  IPlugin,
  PluginStatus,
  IContextMenuPlugin,
  IContextMenuItem,
  FilesType,
  UsersType
} from '@onlyoffice/docspace-plugin-sdk'

class Contextmenu implements IPlugin, IContextMenuPlugin {
  status: PluginStatus = PluginStatus.active;
  contextMenuItems: Map<string, IContextMenuItem> = new Map();

  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => { this.status = status };
  getStatus = () => this.status;
  setOnLoadCallback = (callback: () => Promise<void>) => { this.onLoadCallback = callback };
  addContextMenuItem = (item: IContextMenuItem) => { this.contextMenuItems.set(item.key, item) };
  getContextMenuItems = () => this.contextMenuItems;
  getContextMenuItemsKeys = () => Array.from(this.contextMenuItems).map(([key]) => key);
  updateContextMenuItem = (item: IContextMenuItem) => { this.contextMenuItems.set(item.key, item) };
}

const plugin = new Contextmenu();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Contextmenu = plugin || {};
export default plugin;
```

## Step 4: Add Your Context Menu Item

Now append the following to the bottom of the script:

```js
const contextMenuItem: IContextMenuItem = {
  key: "convert-file-item",
  label: "Do something",
  icon: "icon.svg",
  onClick: (id: number) => {
    console.log("Context Menu works!")
  },
  fileType: [FilesType.file],
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin],
};

plugin.addContextMenuItem(contextMenuItem);
```

For reference:
[MainButtonPlugin Docs](../../../usage-sdk/coding-plugin/plugin-types/contextmenuplugin)
[MainButtonItem Docs](../../../usage-sdk/coding-plugin/plugin-items/contextmenuitem)

## Step 5: Build the Plugin

From the root of your plugin:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`.

## Step 6: Upload to DocSpace

1. Log in as an administrator
2. Navigate to: **Admin Panel → Integration → Plugins**
3. Click **Upload**, and select the generated `dist/plugin.zip`
4. Enable the plugin toggle if not already active

## Step 7: Test It

1. Go to any **Room**
2. Right-click on a file
3. Look for your context menu item titled `"Do something"`
4. Click it - it should log `"Context file"` in the browser console

## Notes

- You can define multiple context items using different keys
- Use the `fileType` and `usersTypes` fields to control visibility
- The `onClick(id)` function receives the selected file's ID
