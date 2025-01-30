---
sidebar_position: -5
---

The following plugin types can be distinguished:

| Type                                                | Interface            | Description                                                                                           |
| --------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------- |
| [Plugin](Plugin.md)                           | IPlugin              | The default plugin. This interface is required.                                                       |
| [SettingsPlugin](SettingsPlugin.md)           | ISettingsPlugin      | The plugin that manages settings for the administrator or owner.                                      |
| [APIPlugin](APIPlugin.md)                     | IApiPlugin           | The plugin that is provided with the origin, proxy, and prefix to make requests to the portal server. |
| [ContextMenuPlugin](ContextMenuPlugin.md)     | IContextMenuPlugin   | The plugin that is embedded in the context menu of files, folders, rooms, images, video (audio).      |
| [InfoPanelPlugin](InfoPanelPlugin.md)         | IInfoPanelPlugin     | The plugin that is embedded as a separate tab in the file info panel.                                 |
| [MainButtonPlugin](MainButtonPlugin.md)       | IMainButtonPlugin    | The plugin that is embedded in the main button.                                                       |
| [ProfileMenuPlugin](ProfileMenuPlugin.md)     | IProfileMenuPlugin   | The plugin that is embedded in the profile menu.                                                      |
| [EventListenerPlugin](EventListenerPlugin.md) | IEventListenerPlugin | The plugin that is given the access to the portal events.                                             |
| [FilePlugin](FilePlugin.md)                   | IFilePlugin          | The plugin that can interact with the file list.                                                      |
