---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# For desktop editors

To develop a plugin for ONLYOFFICE desktop editors, follow the instructions below.

1. Create a folder on your machine and put there the [index.html](../../structure/entry-point.md) and [config.json](../../structure/manifest/manifest.md) files.

2. Pack all the plugin files within the plugin folder into a **zip** archive and change its extension to *.plugin* (all the plugin files and subfolders must be at the archive root).

3. Install a plugin [through the Plugin Manager](../installing/onlyoffice-desktop-editors.md#adding-plugins-through-the-plugin-manager).

   The plugin will appear in the *sdkjs-plugins* directory. The path to the folder depends on the operating system you use:

   <Tabs>
      <TabItem value="win" label="Windows">
            ``` bash
            C:\Users\<username>\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\
            ```
      </TabItem>
      <TabItem value="mac" label="macOS">
            ``` bash
            Users/<username>/Library/Application Support/asc.onlyoffice.ONLYOFFICE/sdkjs-plugins/
            ```
      </TabItem>
      <TabItem value="lin" label="Linux">
            ``` bash
            home/<username>/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/
            ```
      </TabItem>
   </Tabs>
   
   A plugin **GUID** will be used as the folder name. For example, *\{07FD8DFA-DFE0-4089-AL24-0730933CC80A\}*.

   ![Sdkjs-plugins folder](/assets/images/plugins/sdkjs-plugins-folder.png)

   You can edit the plugin and reload it to see the changes.

## Debugging

To debug ONLYOFFICE plugins in the desktop editors, use the *--ascdesktop-support-debug-info* flag. To do this, follow the instructions [here](../../../desktop-editors/usage-api/debugging/running-in-debug-mode-on-windows.md) depending on the operating system you use.

![Debug](/assets/images/desktop/debugging.png#gh-light-mode-only)![Debug](/assets/images/desktop/debugging.dark.png#gh-dark-mode-only)
