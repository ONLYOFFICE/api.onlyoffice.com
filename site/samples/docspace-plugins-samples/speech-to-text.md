# Speech to text

A speech recognition software that allows you to recognize and translate spoken speech into text.

![Speech to text](/assets/images/docspace/speech-to-text.png)

## Installation

Available by default in the DocSpace Saas solution.

You can enable it following the instructions [here](../../docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin:

1. Generate the API token using [AssemblyAI](https://www.assemblyai.com/).
2. Go to **Developer Tools -> Integration -> Plugins**.
3. Click ![Settings icon](/assets/images/docspace/settings-icon.png) next to the **Speech to text** plugin.
4. Enter the API token in the corresponding field.

Once the API token is enabled, the plugin becomes available to all users of the current DocSpace portal. 

There you can also view the plugin metadata, such as the author, version, status, homepage, and description.

## Usage

To convert an audio or video file to text:

1. Open the **Documents** section or one of the available rooms.
2. Right-click a file name to open the file context menu.
3. Click **Convert to text**.
4. If speech is detected in the audio / video file, a new file called *"Filename + text"* will be created.

## Plugin structure

Repository on GitHub: [speech-to-text](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/speech-to-text).

All the required files are described [here](../../docspace/plugins-sdk/usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](../../docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md). Required for each plugin. It contains the plugin [status](../../docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IApiPlugin](../../docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md). Required as we implement a third-party service ([AssemblyAI](https://www.assemblyai.com/)).
- [ISettingsPlugin](../../docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md) and [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts). Used to add settings block for plugin's configuration. The users will access this block from **Settings -> Integration -> Plugins** to adjust the plugin's parameters.
- [IContextMenuPlugin](../../docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) and [IContextMenuItem](../../docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md). Used to implement a context menu action.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
