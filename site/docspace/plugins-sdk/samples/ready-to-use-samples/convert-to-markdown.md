---
description: Convert DOCX, TXT, and HTML files to Markdown format directly in DocSpace.
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Convert to markdown

A tool for converting DOCX, TXT, and HTML files to Markdown format directly in DocSpace.

![Convert to markdown](/assets/images/docspace/convert-to-markdown.png#gh-light-mode-only)![Convert to markdown](/assets/images/docspace/convert-to-markdown.dark.png#gh-dark-mode-only)

## Installation

Available by default in the DocSpace SaaS solution.

You can enable it following the instructions [here](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin, you don't need to change the default settings.

In case you want to view the plugin metadata, such as the author, version, status, homepage, and description, go to **Settings → Integration → Plugins** and click ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only) next to the **Convert to markdown** plugin.

## Usage

:::warning
Files in Virtual Data Room (VDR) with the **Add watermarks to documents** setting enabled cannot be converted. Disable this setting and try again. For more information about VDR, see the [Creating VDR with watermark](/docspace/api-backend/samples/basic-samples/create-vdr.md) example.
:::

To convert a file to Markdown:

1. Open the **Documents** section or one of the available rooms.
2. Right-click a `.docx`, `.txt`, or `.html` file to open the context menu.
3. Click **Convert to Markdown**.

![Convert File](/assets/images/docspace/convert-to-markdown-convert-file.png#gh-light-mode-only)![Convert File](/assets/images/docspace/convert-to-markdown-convert-file.dark.png#gh-dark-mode-only)

A new `.md` file is created in the same folder as the original file. A success notification confirms that the conversion is complete.

## Plugin structure

Repository on GitHub: [convert-to-markdown](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/convert-to-markdown).

All the required files are described [here](/docspace/plugins-sdk/usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md). Required for each plugin. It contains the plugin [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md). Used to access the DocSpace API for downloading the source file and uploading the converted Markdown file to the same folder.
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) and [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md). Used to implement a context menu action. The plugin adds a **Convert to Markdown** item to the context menu of `.docx`, `.txt`, and `.html` files.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
