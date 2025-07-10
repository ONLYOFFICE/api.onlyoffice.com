# Creating a context menu plugin

This guide walks you through creating a basic plugin for DocSpace that adds an item to the file context menu and logs an action when clicked.

## Before you start

Make sure you have a DocSpace server running, and install DocSpace Plugins SDK globally:

``` sh
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

Also verify that the `scripts/createZip.js` file is present. This script will:

- compile your plugin;
- package everything into `dist/plugin.zip`.

## Step 3: Review and extend plugin code

By default, the plugin template includes a basic implementation in the `src/index.ts` file. Here's an example of a [context menu plugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md):

``` ts
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

## Step 4: Add a context menu item

Create a [content menu item](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md) and append it to the end of the script:

``` ts
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

## Step 5: Build the plugin

From the root of your plugin, run the following command:

``` sh
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`.

## Step 6: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 7: Test it

1. Go to any room.
2. Right-click on a file.
3. Look for your context menu item titled `"Do something"`.
4. Click it - it should log `"Context Menu works!"` in the browser console.

## Notes

- You can define multiple context items using different keys.
- Use the [`fileType`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md#filetype) and [`usersType`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md#userstype) fields to control visibility.
- The [`onClick`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md#onclick) function receives the selected file's ID.
