# Creating a Profile Menu Plugin

This guide walks you through creating a plugin for DocSpace that adds a custom item to the user profile dropdown menu and performs an action when clicked.

## Before you start
Make sure you have a DocSpace server running and install DocSpace Plugin SDK globally `npm i -g @onlyoffice/docspace-plugin-sdk`

## Step 1: Creating the Plugin

First, initialize your plugin using the CLI:

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
Use the arrow keys to highlight `Profile menu`, press `space` to select it, then press `enter` to confirm and generate the plugin template.

## Step 2: Confirm Plugin Configuration

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:

```json
"scopes": ["MainButton"]
```

Also verify that the `scripts/createZip.js` file is present. This script will:
- Compile your plugin.
- Package everything into `dist/plugin.zip`.

## Step 3: Review and Extend Plugin Code

By default, the plugin template includes a basic implementation inside the `src/index.ts` file. It defines a class that registers and manages profile menu items using the Plugin SDK:

```js
import { IPlugin, PluginStatus, IProfileMenuPlugin, IProfileMenuItem } from '@onlyoffice/docspace-plugin-sdk'

class Profilemenuitem implements IPlugin, IProfileMenuPlugin {
  status: PluginStatus = PluginStatus.active;
  profileMenuItems: Map<string, IProfileMenuItem> = new Map();
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

  addProfileMenuItem = (item: IProfileMenuItem): void => {
    this.profileMenuItems.set(item.key, item);
  };

  getProfileMenuItems = (): Map<string, IProfileMenuItem> => {
    return this.profileMenuItems;
  };

  updateProfileMenuItem = (item: IProfileMenuItem): void => {
    this.profileMenuItems.set(item.key, item);
  };
}

const plugin = new Profilemenuitem();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Profilemenuitem = plugin || {};
export default plugin;
```

## Step 4: Add Profile Menu Item

Now append the following to the bottom of the file:

```js
// Add this after generating the plugin

const ProfileMenuItem: IProfileMenuItem = {
  key: "profile-menu-plugin",
  label: "Profile menu item",
  icon: "icon.svg",
  onClick: () => {
    console.log("Profile menu item clicked");
  },
};

plugin.addProfileMenuItem(ProfileMenuItem);
```

For reference:  
[ProfileMenuPlugin Docs](../../../usage-sdk/coding-plugin/plugin-types/profilemenuplugin)  
[ProfileMenuItem Docs](../../../usage-sdk/coding-plugin/plugin-items/profilemenuitem)

## Step 5: Build the Plugin

From the root of your plugin:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`.

## Step 6: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if not already active.

## Step 7: Test It

1. Go to the bottom-left corner of the DocSpace interface.
2. Click the three dots button next to your profile (avatar).
3. A dropdown menu will appear.
4. Look for your custom menu item titled `Profile menu item`.

## Notes

You can add multiple items via `addProfileMenuItem(...)`.
The `onClick()` function is a good place to trigger modals, open side panels, or call APIs.
You can extend this plugin to support other scopes like `MainButton`, `Settings`, or `ContextMenu` by updating the `package.json` and plugin logic accordingly.
