# Creating a Main Button Plugin

This guide walks you through creating a basic plugin for DocSpace that adds a button to the main toolbar and logs an action when clicked.

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
Use the arrow keys to highlight `Main button`, press `space` to select it, then press `enter` to confirm and generate the plugin template.

## Step 2: Confirm Plugin Configuration

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:

```json
"scopes": ["MainButton"]
```

Also verify that the `scripts/createZip.js` file is present. This script will:
- Compile your plugin
- Package everything into `dist/plugin.zip`

## Step 3: Review and Extend Plugin Code

By default, the plugin template includes a basic implementation inside the `src/index.ts` file. It defines a class that registers and manages profile menu items using the Plugin SDK:

```js
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
## Step 4: Add Your Main Button Item

Now append the following to the bottom of the script:

```js
...
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
...
```

For reference:
[MainButtonPlugin Docs](../../../usage-sdk/coding-plugin/plugin-types/mainbuttonplugin)
[MainButtonItem Docs](../../../usage-sdk/coding-plugin/plugin-items/mainbuttonitem)

## Step 5: Build the Plugin

From the root of your plugin:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`

## Step 6: Upload to DocSpace

1. Log in as an administrator
2. Navigate to: **Admin Panel → Integration → Plugins**
3. Click **Upload**, and select the generated `dist/plugin.zip`
4. Enable the plugin toggle if not already active

## Step 7: Test It

1. Go to any **Room**
2. Click the **...More** menu in the top toolbar
3. Look for your button titled `"Do something"`
4. Click it - it should log `"Main Button works!"` in the browser console

## Notes

- You can create nested items using the `items` array inside `IMainButtonItem`
- The `onClick(id)` function can receive an entity context (e.g., room or file ID)
- You can extend this plugin to support `Settings`, `ContextMenu`, or other scopes by updating `package.json` and logic
