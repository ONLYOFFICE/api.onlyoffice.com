---
description: View and edit code files with the CodeMirror plugin.
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# CodeMirror

Tool for viewing and editing files with various programming code formats.

![CodeMirror](/assets/images/docspace/codemirror.png#gh-light-mode-only)![CodeMirror](/assets/images/docspace/codemirror.dark.png#gh-dark-mode-only)

## Installation

Available by default in the DocSpace SaaS solution.

You can enable it following the instructions [here](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins).

## Configuration

To start working with the plugin, you don't need to change the default settings.

In case you want to adjust the plugin settings, go to **Settings → Integration → Plugins** and click ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only) next to the **CodeMirror** plugin. You can change the following plugin parameters:

- **Highlight whitespace** - enable or disable the highlighting of spaces in the code editor.
- **Highlight trailing whitespace** - enable or disable the highlighting of trailing whitespace at the end of a line.
- **Auto close tags** - when enabled, close tags are automatically inserted when a `>` or `/` is typed in HTML-like files.

There you can also view the plugin metadata, such as the author, version, status, homepage, and description.

## Usage

### Creating a new file

To create a new code file:

1. Open the **Documents** section or one of the available rooms.
2. Click **Actions → More**.

    ![CreateFile](/assets/images/docspace/codemirror-create-file.png#gh-light-mode-only)![CreateFile](/assets/images/docspace/codemirror-create-file.dark.png#gh-dark-mode-only)
3. Select the **Text file** option from the appeared menu.
4. Enter a file name with the appropriate extension (e.g., `style.css`, `script.js`, `app.py`) in the pop-up window and click **Create**.
5. The CodeMirror code editor opens in a new pop-up window where you can edit the file content.

    ![Editor](/assets/images/docspace/codemirror-editor.png#gh-light-mode-only)![Editor](/assets/images/docspace/codemirror-editor.dark.png#gh-dark-mode-only)
6. Click **Save** to save your changes. To close the editor, click the **X** icon in the upper-right corner of the pop-up.

The newly created file will appear in the file list.

### Editing files

You can open previously created or downloaded files using the CodeMirror plugin:

- Click on the file name with the CodeMirror icon, or
- Right-click to open the context menu and select **Edit file with Codemirror**.

### Keyboard shortcuts

On desktop devices, the editor includes a keyboard shortcuts side panel. Click the Shortcuts plugin icon (a circle with an exclamation mark) in the upper-right corner of the editor area to open or close the panel. The panel lists available shortcuts for your operating system (Windows or macOS). This panel is not available on mobile devices.

![Shortcuts](/assets/images/docspace/codemirror-keyboard-shortcuts.png#gh-light-mode-only)![Shortcuts](/assets/images/docspace/codemirror-keyboard-shortcuts.dark.png#gh-dark-mode-only)

### Supported languages

The plugin supports syntax highlighting for the following languages and file formats:

| Language | File extensions |
|----------|-----------------|
| C/C++ | `.cpp`, `.cc`, `.h`, `.hpp` |
| CSS | `.css` |
| Go | `.go` |
| HTML | `.html`, `.htm` |
| Java | `.java`, `.class` |
| JavaScript/TypeScript | `.js`, `.jsx`, `.ts`, `.tsx` |
| JSON | `.json` |
| Liquid | `.liquid` |
| PHP | `.php` |
| Python | `.py` |
| Rust | `.rs` |
| SCSS/Sass | `.sass`, `.scss` |
| SQL | `.sql`, `.mysql`, `.pgsql`, `.postgresql`, `.sqlite`, `.db`, `.mssql`, `.cql`, `.plsql`, `.mariadb` |
| WAST | `.wast`, `.wat` |
| YAML | `.yaml`, `.yml` |

## Plugin structure

Repository on GitHub: [codemirror](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/codemirror).

All the required files are described [here](/docspace/plugins-sdk/usage-sdk/plugin-structure.md).

### Interfaces

The following plugin interfaces are used:

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md). Required for each plugin. It contains the plugin [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status) (PluginStatus) variable, used to embed the plugin into the DocSpace.
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md). Required as we implement a code editor service ([CodeMirror](https://codemirror.net/)).
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md) and [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts). Used to add a settings block for plugin configuration. Users can access this block from **Settings → Integration → Plugins** to adjust the plugin parameters.
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) and [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md). Used to implement the **Edit file with Codemirror** context menu action.
- [IMainButtonPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/mainbuttonplugin.md) and [IMainButtonItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md). Used to add the **Text file** option to the **+** → **More** menu for creating new code files.
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) and [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md). Used to register supported file types and open them in the CodeMirror editor.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues).
