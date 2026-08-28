---
description: View EPUB, FB2, and ZIP files in a dedicated reading viewer directly in DocSpace.
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Book reader

A tool for viewing EPUB, FB2, and ZIP files in a dedicated reading viewer directly in DocSpace.

![Book reader open file](/assets/images/docspace/book-reader-open-file.png#gh-light-mode-only)![Book reader open file](/assets/images/docspace/book-reader-open-file.dark.png#gh-dark-mode-only)

## Installation

Available by default in the DocSpace SaaS solution.

You can enable it following the instructions [here](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin, you don't need to change the default settings.

In case you want to view the plugin metadata, such as the author, version, status, homepage, and description, go to **Settings → Integration → Plugins** and click ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only) next to the **Book reader** plugin.

## Usage

The plugin supports the following file formats:

- **.epub** - Electronic Publication (EPUB 2.0/3.0)
- **.fb2** - FictionBook 2.0
- **.zip** - Archives containing EPUB or FB2 files

To open a file in the reader:

1. Open one of the available rooms.
2. Click on a supported file, or right-click it and select **Open in Reader** from the context menu.
3. The file opens in a modal window.

![Book reader](/assets/images/docspace/book-reader.png#gh-light-mode-only)![Book reader](/assets/images/docspace/book-reader.dark.png#gh-dark-mode-only)

Use the **‹** and **›** buttons at the bottom to navigate between pages. A progress bar and page counter show your current position in the book.

### ZIP files

ZIP files cannot be opened with a single click — since DocSpace has a dedicated archiver plugin that handles the `.zip` file type, the book reader opens ZIP files through the context menu only (**right-click → Open in Reader**).

When a ZIP file is opened, the plugin inspects its contents:

- **One supported file found** (a single `.epub`, `.fb2`, or a raw EPUB structure with `META-INF/container.xml`) - the file is extracted and opened in the reader automatically.
- **Multiple supported files found** - the plugin opens the first one it finds.
- **No supported files found** - an error notification is shown and the reader does not open.

## Plugin structure

Repository on GitHub: [reader](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/reader).

All the required files are described [here](/docspace/plugins-sdk/usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md). Required for each plugin. It contains the plugin [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) and [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md). Used to implement a context menu action. The plugin adds an **Open in Reader** item to the context menu of supported files (`.epub`, `.fb2`, `.zip`).
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) and [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md). Used to interact with the specified file types. Enables single-click file opening directly from the file list.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
