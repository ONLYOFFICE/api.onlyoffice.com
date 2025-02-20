---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Adding plugins

**ONLYOFFICE Desktop Editors** allows developers to add specific features which are not directly related to the OOXML format using plugins. You can use ready-made plugins from [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory) or create your own ones using our [Plugins and macros API documentation](../../plugin-and-macros/get-started/getting-started.md).

There are two ways to add plugins: through the plugin manager and through the plugin folder.

## Adding plugins through the plugin manager

Starting from version 7.4, you can download ready-to-use plugins from **ONLYOFFICE Plugin Marketplace**.

### Option 1. Using the Install button (an internet connection is required)

Follow the steps below to add the plugins to the editor using plugin manager:

1. Open the **Plugins** tab.
2. Click **Plugin Manager**.
3. Find the plugin you need and click **Install**.

![Plugins manager](/assets/images/plugins/desktop-plugin-manager.png)

### Option 2. Uploading the plugin archive (an internet connection is not required)

If you want to add your own plugin, you can do it manually, even if you are offline:

1. Pack all the [plugin files](../../plugin-and-macros/structure/manifest/manifest.md) within the plugin folder into a **zip** archive and change its extension to *.plugin* (all the plugin files and subfolders must be at the archive root).

   > If you download a plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins), unpack the plugin folder first and then archive its elements only.

2. Open the **Plugin Manager** on the **Plugins** tab.

3. Go to the **My plugins** tab and click the **Install plugin manually** button.

4. Choose your created archive and click **Open**.

![Install plugin manually](/assets/images/plugins/install-manually.png)

The plugin will be added to the opened editors and all the editors you will open afterwords and displayed within the **Plugins** tab.

## Adding plugins through the plugin folder

**Step 1.** Create a new folder in the *sdkjs-plugins* directory. The path to the folder depends on the operating system you use:

<Tabs>
  <TabItem value="win" label="Windows">
    ``` bash
    %UserProfile%\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins
    ```
  </TabItem>
  <TabItem value="mac" label="macOS">
    ``` bash
    ~/Library/Application\ Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins
    ```
  </TabItem>
  <TabItem value="lin" label="Linux">
    ``` bash
    ~/.local/share/onlyoffice/desktopeditors/sdkjs-plugins
    ```
  </TabItem>
</Tabs>

**Step 2.** Use a plugin **GUID** as the folder name. You can find the plugin GUID in the *config.json* file.

For example, for the **Extended comments** plugin the *guid* parameter will look the following way:

``` json
{
  "name": "Extended comments",
  "guid": "asc.{91EAC419-EF8B-440C-A960-B451C7DF3A37}"
}
```

So, the folder name of this plugin will be *\{91EAC419-EF8B-440C-A960-B451C7DF3A37\}*.

**Step 3.** Put all the plugin files to this folder:

![Plugin folder](/assets/images/desktop/plugins_folder.png)

**Step 4.** Start ONLYOFFICE Desktop Editors. If everything is done correctly, the plugin will be displayed within the **Plugins** tab:

![Extended comments](/assets/images/desktop/extended_comments.png)

## Removing plugins from ONLYOFFICE Desktop Editors

To uninstall the newly added plugins, proceed in the following way:

1. Open the **Plugins** tab.
2. Go to **Plugin Manager**.
3. Click the **Remove** button under the corresponding plugin.

> This option is not available for the default plugins and the plugins added via the plugin folder.

If you need to uninstall the default plugins, go to the *sdkjs-plugins* folder and remove the corresponding plugin folder from this directory.

> Please note that removing the default plugins from ONLYOFFICE Desktop Editors on macOS breaks the package integrity and may cause the application crash. Be careful and don't do this unless absolutely necessary.

The table below contains default plugins guids to make it easier for you to find them:

## Default plugins guid’s

|                |                                        |
| -------------- | -------------------------------------- |
| Highlight code | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9841\} |
| Mendeley       | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9441\} |
| OCR            | \{440EBF13-9B19-4BD8-8621-05200E58140B\} |
| Photo editor   | \{07FD8DFA-DFE0-4089-AL24-0730933CC80A\} |
| Speech         | \{D71C2EF0-F15B-47C7-80E9-86D671F9C595\} |
| Thesaurus      | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9840\} |
| Translator     | \{7327FC95-16DA-41D9-9AF2-0E7F449F6800\} |
| YouTube        | \{38E022EA-AD92-45FC-B22B-49DF39746DB4\} |
| Zotero         | \{BFC5D5C6-89DE-4168-9565-ABD8D1E48711\} |
| Send           | \{B509123E-6335-40BD-B965-91EB799346E3\} |

> Please note that after app updating the default plugins will appear again and you will need to uninstall them.
