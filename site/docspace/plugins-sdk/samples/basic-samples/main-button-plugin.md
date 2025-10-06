# Creating a main button plugin

This guide walks you through creating a basic plugin for DocSpace that adds a button to the main toolbar and logs an action when clicked.

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

3. Select the required scopes from the list of available options. Use the arrow keys to highlight `Main button`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["MainButton"]
}
```

Also verify that the `scripts/createZip.js` file is present. This script will:

- compile your plugin;
- package everything into `dist/plugin.zip`.

## Step 3: Review and extend plugin code

By default, the plugin template includes a basic implementation in the `src/index.ts` file. Here's an example of a [main button plugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/mainbuttonplugin.md):

``` ts
import {
  IPlugin, PluginStatus, IMainButtonPlugin, IMainButtonItem
} from '@onlyoffice/docspace-plugin-sdk'

class Test implements IPlugin, IMainButtonPlugin {
  status: PluginStatus = PluginStatus.active;
  mainButtonItems: Map<string, IMainButtonItem> = new Map();
  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => { this.status = status };
  getStatus = () => this.status;
  setOnLoadCallback = (callback: () => Promise<void>) => { this.onLoadCallback = callback };
  addMainButtonItem = (item: IMainButtonItem) => { this.mainButtonItems.set(item.key, item) };
  getMainButtonItems = () => this.mainButtonItems;
  updateMainButtonItem = (item: IMainButtonItem) => { this.mainButtonItems.set(item.key, item) };
}

const plugin = new Test();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Test = plugin || {};
export default plugin;
```

## Step 4: Add a main button item

Create a [main button item](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md) and append it to the end of the script:

``` ts
const plugin = new Test();

// Add this after generating the plugin
const createItem: IMainButtonItem = {
  key: "test-main-button-item_create",
  label: "Create new",
  icon: "icon.svg",
  onClick: (id: number) => {
    // Optional: use id to take action based on room/task/etc.
  },
};

const mainButtonItem: IMainButtonItem = {
  key: "test-main-button-item_create",
  label: "Do something",
  icon: "icon.svg",
  items: [createItem], // Optional nested submenu
  onClick: () => {
    console.log("Main Button works!");
  },
};

plugin.addMainButtonItem(mainButtonItem);


declare global {
  interface Window {
    Plugins: any;
  }
}
```

## Step 5: Build the plugin

From the root of your plugin, run the following command:

``` sh
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`

## Step 6: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 7: Test it

1. Go to any room.
2. Click **Actions → More** in the top toolbar.
3. Look for your button titled `"Do something"`.
4. Click it - it should log `"Main Button works!"` in the browser console.

## Notes

- You can create nested items using the [`items`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md#items) array inside `IMainButtonItem`.
- The [`onClick`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md#onClick) function can receive an entity context (e.g., room or file ID).
- You can extend this plugin to support `Settings`, `ContextMenu`, or other scopes by updating `package.json` and logic.
