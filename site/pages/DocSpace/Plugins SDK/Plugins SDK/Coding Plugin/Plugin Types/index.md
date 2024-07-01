The following plugin types can be distinguished:

| Type                                                                                     | Interface            | Description                                                                                           |
| ---------------------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------- |
| [Plugin](/docspace/pluginssdk/codingplugin/plugintypes/plugin)                           | IPlugin              | The default plugin. This interface is required.                                                       |
| [SettingsPlugin](/docspace/pluginssdk/codingplugin/plugintypes/settingsplugin)           | ISettingsPlugin      | The plugin that manages settings for the administrator or owner.                                      |
| [APIPlugin](/docspace/pluginssdk/codingplugin/plugintypes/apiplugin)                     | IApiPlugin           | The plugin that is provided with the origin, proxy, and prefix to make requests to the portal server. |
| [ContextMenuPlugin](/docspace/pluginssdk/codingplugin/plugintypes/contextmenuplugin)     | IContextMenuPlugin   | The plugin that is embedded in the context menu of files, folders, rooms, images, video (audio).      |
| [InfoPanelPlugin](/docspace/pluginssdk/codingplugin/plugintypes/infopanelplugin)         | IInfoPanelPlugin     | The plugin that is embedded as a separate tab in the file info panel.                                 |
| [MainButtonPlugin](/docspace/pluginssdk/codingplugin/plugintypes/mainbuttonplugin)       | IMainButtonPlugin    | The plugin that is embedded in the main button.                                                       |
| [ProfileMenuPlugin](/docspace/pluginssdk/codingplugin/plugintypes/profilemenuplugin)     | IProfileMenuPlugin   | The plugin that is embedded in the profile menu.                                                      |
| [EventListenerPlugin](/docspace/pluginssdk/codingplugin/plugintypes/eventlistenerplugin) | IEventListenerPlugin | The plugin that is given the access to the portal events.                                             |
| [FilePlugin](/docspace/pluginssdk/codingplugin/plugintypes/fileplugin)                   | IFilePlugin          | The plugin that can interact with the file list.                                                      |
