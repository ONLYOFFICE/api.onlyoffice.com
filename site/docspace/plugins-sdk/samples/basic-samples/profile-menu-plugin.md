# Profile menu plugin

This guide walks you through creating a plugin for DocSpace that adds a custom item to the user profile dropdown menu and performs an action when clicked.

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

3. Select the required scopes from the list of available options. Use the arrow keys to highlight `Profile menu`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["ProfileMenu"]
}
```

## Step 3: Review and extend plugin code

By default, the plugin template includes a basic implementation in the `src/index.ts` file. Here's an example of a [profile menu plugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/profilemenuplugin.md):

``` ts
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

## Step 4: Add a profile menu item

Create a [profile menu item](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/profilemenuitem.md) and append it to the end of the script:

``` ts
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

## Step 5: Build the plugin

From the root of your plugin, run the following command:

``` sh
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js`.

## Step 6: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 7: Test the plugin

1. Go to the bottom-left corner of the DocSpace interface.
2. Click ![More icon](/assets/images/docspace/more-icon.png) next to your profile (avatar).
3. A dropdown menu will appear.
4. Look for your custom menu item titled **Profile menu item**.

## Notes

- You can add multiple items via [`addProfileMenuItem`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/profilemenuplugin.md#addprofilemenuitem).
- The [`onClick`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/profilemenuitem.md#onClick) function is a good place to trigger modals, open side panels, or call APIs.
- You can extend this plugin to support other scopes like `MainButton`, `Settings`, or `ContextMenu` by updating the `package.json` and plugin logic accordingly.
