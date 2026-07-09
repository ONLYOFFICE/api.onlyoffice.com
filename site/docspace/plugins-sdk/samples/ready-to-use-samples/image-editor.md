---
description: View and edit images with the Image Editor plugin.
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Image Editor

View and edit images directly in DocSpace.

![Image Editor](/assets/images/docspace/image-editor.png#gh-light-mode-only)![Image Editor](/assets/images/docspace/image-editor.dark.png#gh-dark-mode-only)

## Installation

Available by default in the DocSpace SaaS solution.

You can enable it following the instructions [here](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin, you don't need to change any settings — the Image Editor plugin has no configurable parameters.

If you want to view plugin information, go to **Settings → Integration → Plugins** and click ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only) next to the **Image Editor** plugin. The settings panel displays metadata only, such as the author, version, status, homepage, and description.

## Usage

To edit an image:

1. Right-click on an image file in the file list.
2. Select **Edit image** from the context menu.
3. An image editor pop-up will open with a toolbar on the right featuring various tools:
   - **Resize** - change image dimensions
   - **Crop** - crop the image to a specific area
   - **Flip** - flip the image horizontally or vertically
   - **Rotate** - rotate the image
   - **Draw** - draw freehand on the image
   - **Shape** - add shapes to the image
   - **Icon** - add icons to the image
   - **Text** - add text to the image
   - **Mask** - apply masks to the image
4. Once you've made your edits, click **Save and Exit** to apply the changes.

After saving, a notification will confirm the successful update, and the file version will be updated accordingly.

### Supported formats

`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`, `.bmp`, `.tiff`, `.ico`

## Plugin structure

Repository on GitHub: [image-editor](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/image-editor).

All the required files are described [here](/docspace/plugins-sdk/usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md). Required for each plugin. It contains the plugin [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md). Required for API interactions with DocSpace.
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) and [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md). Used to implement the **Edit image** context menu action for supported image formats.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
