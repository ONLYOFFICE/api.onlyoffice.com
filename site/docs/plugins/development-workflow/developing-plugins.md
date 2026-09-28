---
sidebar_position: 2
description: Load a plugin you are developing into the ONLYOFFICE web or desktop editors and reload it after each change.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Developing plugins

To develop a plugin, create a folder on your machine and place the [index.html](../configuration/entry-point.md) and [config.json](../configuration/configuration.md) files there. Then load the folder into the editors as described below.

## Web editors

1. Serve the plugin folder with CORS enabled. The editor fetches `config.json` and the other plugin files from a different origin, so the server must send CORS headers. For example, run the following command in the plugin folder:

   ```sh
   npx http-server -p 8080 --cors
   ```

2. Open any document in an ONLYOFFICE web editor. In the browser DevTools, go to the **Console** tab, select `frameEditor` from the drop-down list, and run:

   ```js
   Asc.editor.installDeveloperPlugin("http://localhost:8080/config.json");
   ```

   ![Developer console](/assets/images/plugins/developer-console.png)

The command returns `true` and the plugin appears in the **Plugins** tab. If it returns `false`, `config.json` could not be fetched or parsed. The command does not report the reason. Check the URL, then see [Plugin files blocked by CORS](debugging/common-errors-solutions.md#plugin-files-blocked-by-cors).

If you control the editor configuration of your integration, you can load the plugin on every document open instead: add the URL of its `config.json` to [`editorConfig.plugins.pluginsData`](../../docs-api/usage-api/config/editor/plugins.md#pluginsdata). See [Adding plugins through the config.json file](installing-and-testing/docs-on-premises-installation.md#adding-plugins-through-the-configjson-file).

The plugin files are loaded relative to the folder that contains `config.json`. The plugin stays installed after the page is reloaded, in the same browser and for the same editor address. After you change the plugin files, reload the page to load the new version.

## Desktop editors

1. Pack all the plugin files into a `zip` archive and change its extension to `.plugin`. All the plugin files and subfolders must be at the archive root.

2. Install the plugin [through the Plugin Manager](installing-and-testing/desktop-editors-installation.md#adding-plugins-through-the-plugin-manager). The plugin is copied to the `sdkjs-plugins` directory, into a folder named after the plugin [`guid`](../configuration/configuration.md#guid) without the `asc.` prefix, for example `{91EAC419-EF8B-440C-A960-B451C7DF3A37}`:

   <Tabs>
      <TabItem value="win" label="Windows">
         ```bash
         %LOCALAPPDATA%\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\
         ```
      </TabItem>
      <TabItem value="mac" label="macOS">
         ```bash
         ~/Library/Application\ Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins/
         ```
      </TabItem>
      <TabItem value="lin" label="Linux">
         ```bash
         ~/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/
         ```
      </TabItem>
   </Tabs>

   ![Sdkjs-plugins folder](/assets/images/plugins/sdkjs-plugins-folder.png)

3. To avoid repacking the plugin after every change, replace this folder with a symbolic link to your development folder. Close the desktop editors, delete the installed plugin folder, and create the link:

   <Tabs>
      <TabItem value="win" label="Windows">
         Run as Administrator:

         ```bash
         mklink /D "%LOCALAPPDATA%\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\{YOUR-GUID}" "C:\path\to\your\plugin"
         ```
      </TabItem>
      <TabItem value="mac" label="macOS">
         ```bash
         ln -s /path/to/your/plugin ~/Library/Application\ Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins/{YOUR-GUID}
         ```
      </TabItem>
      <TabItem value="lin" label="Linux">
         ```bash
         ln -s /path/to/your/plugin ~/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/{YOUR-GUID}
         ```
      </TabItem>
   </Tabs>

After you change the plugin files, reopen the document to load the new version.

## Next steps

To pause and inspect the plugin code, see [Debugging plugins](debugging/debugging-plugins.md).
