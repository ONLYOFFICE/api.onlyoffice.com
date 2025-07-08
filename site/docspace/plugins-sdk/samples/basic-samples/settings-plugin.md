# Creating a settings plugin

This guide walks you through creating a plugin for DocSpace that adds a plugin configuration panel to the plugin settings area in the admin interface.

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

3. Select the required scopes from the list of available options. Use the arrow keys to highlight `Settings`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["Settings"]
}
```

Also verify that the `scripts/createZip.js` file is present. This script will:

- compile your plugin;
- package everything into `dist/plugin.zip`.

## Step 3: Review the plugin code

By default, the plugin template includes a working implementation in the `src/index.ts` file. This works out of the box and does not require modification to appear in the plugin settings.

Here's the default implementation of a [settings plugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md):

``` ts
import {
  IPlugin,
  PluginStatus,
  ISettingsPlugin,
  ISettings
} from '@onlyoffice/docspace-plugin-sdk'

class Settingsmenu implements IPlugin, ISettingsPlugin {
  status: PluginStatus = PluginStatus.active;
  adminPluginSettings: ISettings | null = {} as ISettings;

  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => { this.status = status };
  getStatus = () => this.status;
  setOnLoadCallback = (callback: () => Promise<void>) => { this.onLoadCallback = callback };
  getAdminPluginSettings = () => this.adminPluginSettings;
  setAdminPluginSettings = (settings: ISettings | null): void => { this.adminPluginSettings = settings };
  setAdminPluginSettingsValue = (settings: string | null): void => {};
}

const plugin = new Settingsmenu();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Settingsmenu = plugin || {};
export default plugin;
```

## Step 4: Build the plugin

From the root of your plugin, run the following command:

``` sh
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`.

## Step 5: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 6: Test it

1. Go to **Admin Panel → Integration → Plugins**.
2. Click ![Settings icon](/assets/images/docspace/settings-icon.png) for your plugin.
3. The settings panel should open with default behavior.
4. You can customize this panel further in your plugin frontend if needed.

## Notes

- You don't need to define settings items manually unless you want a custom UI.
- The Plugins SDK handles basic settings persistence for you.
- You can access or update saved settings using [`getAdminPluginSettings`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md#getadminpluginsettings) and [`setAdminPluginSettings`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md#setadminpluginsettings).
