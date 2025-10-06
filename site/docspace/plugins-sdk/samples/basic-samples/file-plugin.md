# File plugin

This guide walks you through creating a plugin for DocSpace that adds support for a specific file extension, custom icons, and an action when such files are clicked.

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

3. Select the required scopes from the list of available options. Use the arrow keys to highlight `File action`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["File"]
}
```

Also verify that the `scripts/createZip.js` file is present. This script will:

- compile your plugin;
- package everything into `dist/plugin.zip`.

## Step 3: Review and extend plugin code

By default, the plugin template includes a base implementation in the `src/index.ts` file. Here's an example of a [file plugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) for supporting `.md` (Markdown) files:

``` ts
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

## Step 4: Add a file item

Create a [file item](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md) and append it to the end of the script:

```ts
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

## Step 7: Test the plugin

1. Upload a `.md` file to any room.
2. You should now see a custom icon for `.md` files.
3. Clicking the file should trigger the `onClick` function instead of downloading.

## Notes

- The [`extension`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md#extension) must match a file type used in your DocSpace (e.g. `.md`).
- You can customize both list and tile icons using [`fileRowIcon`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md#fileRowIcon) and [`fileTileIcon`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md#fileTileIcon).
- Without this plugin, unknown file types simply download on click. This plugin runs your [`onClick`](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md#onClick) logic instead.
