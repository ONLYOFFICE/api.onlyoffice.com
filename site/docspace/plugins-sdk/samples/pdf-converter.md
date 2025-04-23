# PDF converter

A tool for converting documents, spreadsheets, presentations, and forms to PDF.

![PDF converter](/assets/images/docspace/pdf-converter.png)

## Installation

Available by default in the DocSpace Saas solution.

You can enable it following the instructions [here](../usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin:

1. Generate the API token using [ConvertAPI](www.convertapi.com).
2. Go to **Developer Tools -> Integration -> Plugins**.
3. Click ![Settings icon](/assets/images/docspace/settings-icon.png) next to the **PDF converter** plugin.
4. Enter the API token in the corresponding field.

Once the API token is enabled, the plugin becomes available to all users of the current DocSpace portal. 

There you can also view the plugin metadata, such as the author, version, status, homepage, and description.

## Usage

> Audio and video files cannot be converted to PDF.

To convert a file to PDF:

1. Open the **Documents** section or one of the available rooms.
2. Right-click a file name to open the file context menu.
3. Click **Convert to PDF**.
4. Change the file name in a pop-up window and click **Convert file**. The converted file is saved in the same folder as the original one.

## Plugin structure

Repository on GitHub: [pdf-converter](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/pdf-converter).

All the required files are described [here](../usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](../usage-sdk/coding-plugin/plugin-types/plugin.md). Required for each plugin. It contains the plugin [status](../usage-sdk/coding-plugin/plugin-types/plugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IApiPlugin](../usage-sdk/coding-plugin/plugin-types/apiplugin.md). Required as we implement a third-party service ([ConvertAPI](www.convertapi.com)).
- [ISettingsPlugin](../usage-sdk/coding-plugin/plugin-types/settingsplugin.md) and [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts). Used to add settings block for plugin's configuration. The users will access this block from **Settings -> Integration -> Plugins** to adjust the plugin's parameters.
- [IContextMenuPlugin](../usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) and [IContextMenuItem](../usage-sdk/coding-plugin/plugin-items/contextmenuitem.md). Used to implement a context menu action.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
