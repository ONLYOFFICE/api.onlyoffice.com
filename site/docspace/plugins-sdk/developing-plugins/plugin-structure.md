---
sidebar_position: -5
---

# Plugin structure

Each DocSpace plugin is a folder with files. It must contain the following files required for the plugin to work.

## assets

A folder for storing plugin images. Nesting is not supported. The number of icons and their sizes will depend on the plugin types you implement. The following formats are currently supported: *.jpg, .jpeg, .png, .svg*.

- The default plugin type requires a [logo](../config.md#image) image. It is equal to the *logo* parameter from the *package.json* file. The logo will be displayed in the DocSpace plugin settings. The required icon size is 48x48 px. Otherwise, it will be compressed to this size.

  <img alt="Plugin logo" src="/assets/images/docspace/plugin-logo.png" width="300px" />

- The context menu plugin uses an [icon](../coding-plugin/plugin-items/contextmenuitem.md#icon) on the **Convert to text** button. The required icon size is 16x16 px. Otherwise, it will be compressed to this size.

  ![Convert to text](/assets/images/docspace/convert-to-text.png)

  This icon can be also used for the main button icon. For example, in the **draw\.io** plugin, the same icon is used for the context and main button menu.

  ![Main button icon](/assets/images/docspace/main-button-icon.png)

  The **draw\.io** plugin also uses the specific file icon near the *.drawio* files, which are created with the file plugin type. The preferred icon size for the [table format](../coding-plugin/plugin-items/fileitem.md#filerowicon) is 32x32 px.

  ![File icon](/assets/images/docspace/file-icon.png)

  In this plugin, the same file icon is also used for the [tile view](../coding-plugin/plugin-items/fileitem.md#filetileicon). But it is recommended to add another icon of the 96x96 px size in this case.

  ![File icon tile](/assets/images/docspace/file-icon-tile.png)

## dist

A folder for storing the compiled plugin version.

## scripts

A folder for storing script files for building the plugin. The *createZip.js* script is added to this folder. The script is executed when building the plugin to automatically archive it and create the *config.json* file.

## src

A folder for the plugin source files.

## src/index.ts

The entry point for building the plugin. This file is required. All the necessary functionality is added to this file for the plugin to work in the specified scope. In this file, the plugin is declared in the *window\.Plugins.\[pluginName]* DocSpace scope, where *pluginName* must match the same parameter from the *package.json* file:

  ``` ts
  window.Plugins.PDFConverter = plugin || {}
  ```

## webpack.config.js

The webpack configuration file. This file can be edited but this is important that in the *output* parameter, the *fileName* field is equal to *plugin.js* and the *path* field is equal to *dist*:

  ``` ts
  const config = {
    output: {
      filename: "plugin.js",
      path: path.resolve(dirname, "dist"),
    },
  }
  
  ```

## tsconfig

The *typescript* configuration file. This file can be edited.

## package.json

A file with the information about the plugin and dependencies. This file can be edited and the new dependencies can be added.

## .prettierrc

The configuration file for the *prettier* npm package. This file can be edited.
