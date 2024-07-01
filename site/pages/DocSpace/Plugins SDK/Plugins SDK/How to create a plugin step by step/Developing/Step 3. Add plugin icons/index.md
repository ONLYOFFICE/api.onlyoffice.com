Create the [assets](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/speech-to-text/assets) folder in the root plugin folder and add there all the plugin icons. The number of icons and their sizes will depend on the plugin types you implement. For the **speech-to-text** plugin, we need the following icons:

* The default plugin type requires a [logo](/docspace/pluginssdk/config#image) image. It is equal to the *logo* parameter from the *package.json* file. The logo will be displayed in the DocSpace plugin settings. The required icon size is 48x48 px. Otherwise, it will be compressed to this size.

  ![Plugin logo](/content/img/docspace/plugin-logo.png)

* The context menu plugin uses an [icon](/docspace/pluginssdk/codingplugin/pluginitems/contextmenuitem#icon) on the **Convert to text** button. The required icon size is 16x16 px. Otherwise, it will be compressed to this size.

  ![Convert to text](/content/img/docspace/convert-to-text.png)

  This icon can be also used for the main button icon. For example, in the **draw\.io** plugin, the same icon is used for the context and main button menu.

  ![Main button icon](/content/img/docspace/main-button-icon.png)

  The **draw\.io** plugin also uses the specific file icon near the *.drawio* files, which are created with the file plugin type. The preferred icon size for the [table format](/docspace/pluginssdk/codingplugin/pluginitems/fileitem#fileRowIcon) is 32x32 px.

  ![File icon](/content/img/docspace/file-icon.png)

  In this plugin, the same file icon is also used for the [tile view](/docspace/pluginssdk/codingplugin/pluginitems/fileitem#fileTileIcon). But it is recommended to add another icon of the 96x96 px size in this case.

  ![File icon tile](/content/img/docspace/file-icon-tile.png)
