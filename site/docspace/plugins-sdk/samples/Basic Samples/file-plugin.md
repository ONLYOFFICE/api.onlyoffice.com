# Creating a File Plugin

This guide walks you through creating a plugin for DocSpace that adds support for a specific file extension, custom icons, and an action when such files are clicked.

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
Use the arrow keys to highlight `File action`, press `space` to select it, then press `enter` to confirm and generate the plugin template.

## Step 2: Confirm Plugin Configuration

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:

```json
"scopes": ["File"]
```

Also verify that the `scripts/createZip.js` file is present. This script will:
- Compile your plugin
- Package everything into `dist/plugin.zip`

## Step 3: Review and Extend Plugin Code

By default, the plugin template includes a base implementation inside `src/index.ts`. Here’s an example for supporting `.md` (Markdown) files:

```js
import {
  IPlugin,
  PluginStatus,
  IFilePlugin,
  IFileItem
} from '@onlyoffice/docspace-plugin-sdk'

class Filesplugin implements IPlugin, IFilePlugin {
  status: PluginStatus = PluginStatus.active;
  fileItems: Map<string, IFileItem> = new Map();

  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => { this.status = status };
  getStatus = () => this.status;
  setOnLoadCallback = (callback: () => Promise<void>) => { this.onLoadCallback = callback };
  addFileItem = (item: IFileItem ): void => { this.fileItems.set(item.extension, item) };
  getFileItems = (): Map<string, IFileItem > => this.fileItems;
  updateFileItem = (item: IFileItem): void => { this.fileItems.set(item.extension, item) };
}

const plugin = new Filesplugin();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Filesplugin = plugin || {};

export default plugin;
```

## Step 4: Add Your File Item

Now append the following to the bottom of the script:

```js
...
const plugin = new Filesplugin();


export const fileItem: IFileItem = {
  extension: ".md",
  fileTypeName: "Markdown",
  fileRowIcon: "icon.svg",
  fileTileIcon: "icon.svg",
  onClick: () => {
    console.log("Markdown file clicked!")
  }
}

plugin.addFileItem(fileItem)


declare global {
  interface Window {
    Plugins: any;
  }
}
...
```

For reference:
[MainButtonPlugin Docs](../../../usage-sdk/coding-plugin/plugin-types/fileplugin)
[MainButtonItem Docs](../../../usage-sdk/coding-plugin/plugin-items/fileitem)

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

1. Upload a `.md` file to any **Room**
2. You should now see a custom icon for `.md` files
3. Clicking the file should trigger the `onClick` function instead of downloading

## Notes

- The `fileItem.extension` must match files in your DocSpace (e.g. `.md`)
- You can customize both list and tile icons using `fileRowIcon` and `fileTileIcon`
- Without this plugin, unknown file types simply download on click
- With this plugin, your `onClick` logic runs instead