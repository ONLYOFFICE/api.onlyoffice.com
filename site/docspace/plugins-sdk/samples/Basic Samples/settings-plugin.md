# Creating a Settings Plugin

This guide walks you through creating a plugin for DocSpace that uses the **Settings** scope. This scope adds a plugin configuration panel to the plugin settings area in the admin interface.

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
Use the arrow keys to highlight `Settings`, press `space` to select it, then press `enter` to confirm and generate the plugin template.

## Step 2: Confirm Plugin Configuration

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:

```json
"scopes": ["Settings"]
```

Also verify that the `scripts/createZip.js` file is present. This script will:
- Compile your plugin
- Package everything into `dist/plugin.zip`

## Step 3: Review the Plugin Code

By default, the plugin template includes a working implementation inside `src/index.ts`. This works out of the box and does not require modification to appear in the plugin settings.

Here's the default implementation:

```js
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

## Step 4: Build the Plugin

From the root of your plugin:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`.

## Step 5: Upload to DocSpace

1. Log in as an administrator
2. Navigate to: **Admin Panel → Integration → Plugins**
3. Click **Upload**, and select the generated `dist/plugin.zip`
4. Enable the plugin toggle if not already active

## Step 6: Test It

1. Go to **Admin Panel → Integration → Plugins**
2. Click the gear icon for your plugin
3. The settings panel should open with default behavior
4. You can customize this panel further in your plugin frontend if needed

## Notes

- You don't need to define settings items manually unless you want a custom UI
- The plugin SDK handles basic settings persistence for you
- You can access or update saved settings using `getAdminPluginSettings()` and `setAdminPluginSettings()`

For reference:
[MainButtonPlugin Docs](../../../usage-sdk/coding-plugin/plugin-types/settingsplugin)