# Markdown

A tool for viewing, editing and creating `.md` files.

![Markdown](/assets/images/docspace/markdown.png)

## Installation

Available by default in the DocSpace Saas solution.

You can enable it following the instructions [here](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin, you don't need to change the default settings.

In case you want to view the plugin metadata, such as the author, version, status, homepage, and description, go to **Developer Tools -> Integration -> Plugins** and click ![Settings icon](/assets/images/docspace/settings-icon.png) next to the **Markdown** plugin.

## Usage

### Creating a new .md file

To create a new `.md` file:

1. Open the **Documents** section or one of the available rooms.
2. Click **Actions -> More**.
3. Select the **Markdown** plugin from the appeared menu.
4. Change the file name in a pop-up window and click **Create**. A new `.md` file appears in the file list.

To open the created `.md` file, click the file name or do it via the file context menu: **right-click -> Edit markdown (Preview markdown)**. The file will open in the same tab. To get back to the file list, click **Save and close** or ![Cross](/assets/images/docspace/cross.png). If a file is opened by a user with the view rights, only ![Cross](/assets/images/docspace/cross.png) is available. Any changes made by this user will not be saved.

### Editing .md files

To edit the `.md` file, you need to add markup text to the **Markdown** section. The entered text will appear in the right **Preview** section.

To expand the **Markdown** / **Preview** section, use the **Resize** button.

When opening a file for viewing, there is no option to expand the **Preview** section, since it immediately opens in an expanded form.

## Plugin structure

Repository on GitHub: [markdown](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/markdown).

All the required files are described [here](/docspace/plugins-sdk/usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md). Required for each plugin. It contains the plugin [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md). Required as we implement a third-party service ([markdown-it](https://markdown-it.github.io/markdown-it/)).
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md) and [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts). Used to add settings block for plugin's configuration. The users will access this block from **Settings -> Integration -> Plugins** to adjust the plugin's parameters.
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) and [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md). Used to implement a context menu action.
- [IMainButtonPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/mainbuttonplugin.md) and [IMainButtonItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md). Used to implement the main button action. In the **Markdown** plugin, we use the **Action button -> More** menu elements in the **Documents** section or in the selected room to create `.md` files.
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) and [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md). Used to interact with the specified file types. In this case, with the `.md` files.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
