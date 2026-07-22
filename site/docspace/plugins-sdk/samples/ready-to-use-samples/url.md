---
description: Save external URLs in the file list and open them in a new browser tab.
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# URL

Save external URLs in a file list. When a saved link is opened, the corresponding resource launches in a new browser tab.

![URL](/assets/images/docspace/url.png#gh-light-mode-only)![URL](/assets/images/docspace/url.dark.png#gh-dark-mode-only)

## Installation

Available by default in the DocSpace Saas solution.

You can enable it following the instructions [here](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin, you don't need to change the default settings.

In case you want to view the plugin metadata, such as the author, version, status, homepage, and description, go to **Settings → Integration → Plugins** and click ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only) next to the **URL** plugin.

## Usage

### Creating a new URL

To add a link to the file list:

1. Open the **Documents** section or one of the available rooms.
2. Click **Actions → More**.
3. Select **New URL**.
4. In the dialog box, specify the URL address and the link display name, then click **Create**.

![Create URL](/assets/images/docspace/url-create.png#gh-light-mode-only)![Create URL](/assets/images/docspace/url-create.dark.png#gh-dark-mode-only)

The link appears in the file list as a `.url` file. When you click the item, the external resource opens in a separate browser tab.

### Editing an existing URL

To change a saved link:

1. Right-click the `.url` item in the file list to open the context menu.
2. Select **Edit URL**.
3. Update the URL address and/or the link display name in the dialog box, then click **Save**.

![Edit URL](/assets/images/docspace/url-edit.png#gh-light-mode-only)![Edit URL](/assets/images/docspace/url-edit.dark.png#gh-dark-mode-only)

## Plugin structure

Repository on GitHub: [url](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/url).

All the required files are described [here](/docspace/plugins-sdk/usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md). Required for each plugin. It contains the plugin [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md). Required for API interactions with DocSpace (creating, updating, and reading `.url` files).
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md) and [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts). Used to add a settings block for plugin configuration. Users can access this block from **Settings → Integration → Plugins** to view plugin metadata.
- [IMainButtonPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/mainbuttonplugin.md) and [IMainButtonItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md). Used to add the **New URL** option to the **Actions → More** menu.
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) and [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md). Used to implement the **Edit URL** context menu action for `.url` files.
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) and [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md). Used to register the `.url` file type and open the stored link in a new browser tab when the file is selected.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
