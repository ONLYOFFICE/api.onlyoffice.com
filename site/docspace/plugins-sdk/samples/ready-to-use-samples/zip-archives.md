---
description: Open and extract ZIP archives with the ZIP archives plugin.
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# ZIP archives

Open and extract ZIP archives directly in DocSpace.

![ZIP archives](/assets/images/docspace/zip-archives.png#gh-light-mode-only)![ZIP archives](/assets/images/docspace/zip-archives.dark.png#gh-dark-mode-only)

## Installation

Available by default in the DocSpace SaaS solution.

You can enable it following the instructions [here](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin, you don't need to change any settings — the ZIP archives plugin has no configurable parameters.

If you want to view plugin information, go to **Settings → Integration → Plugins** and click ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only) next to the **ZIP archives** plugin. The settings panel displays metadata only, such as the author, version, status, homepage, and description.

## Usage

### Working with archive files

The plugin enables you to work with ZIP archives directly in DocSpace. To get started, right-click on an archive file, then navigate to the **More options** dropdown menu and choose your preferred option:

- **Open archive** - view the contents of the archive without extracting it. You can also extract specific files directly from the preview window.
- **Choose location to unzip** - select a specific folder or room to extract the entire archive.
- **Unzip here** - extract the archive directly into the current folder or room where it is stored.

### Creating an archive from a folder

To compress a folder into a ZIP archive:

1. Right-click on the folder in the file list.
2. Select **Zip folder** from the context menu.
3. The plugin creates a `.zip` file with the same name as the folder in the parent directory.

## Plugin structure

Repository on GitHub: [archives](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/archives).

All the required files are described [here](/docspace/plugins-sdk/usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md). Required for each plugin. It contains the plugin [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IApiPlugin.md). Required for API interactions with DocSpace.
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IContextMenuPlugin.md) and [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md). Used to implement context menu actions: **Open archive**, **Choose location to unzip**, **Unzip here**, and **Zip folder**.
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IFilePlugin.md) and [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IFileItem.md). Used to register the `.zip` file type and handle archive operations.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
