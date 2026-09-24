# Plugins

Core plugin interfaces that define the contract for each plugin type supported by DocSpace. Every plugin must implement `IPlugin` plus one or more type-specific interfaces.

Implement the interface that matches the DocSpace UI area you want to extend. Each plugin type registers its UI entries as [items](../items/index.md) kept in a `Map`.

## Overview

Available plugin type interfaces:

| Interface | Description |
| --- | --- |
| [`IApiPlugin`](IApiPlugin.md) | The plugin that is provided with the origin, proxy, and prefix to make requests to the portal server. |
| [`IArticleButtonPlugin`](IArticleButtonPlugin.md) | Describes a plugin that adds custom button items to the article sidebar. |
| [`IContextMenuPlugin`](IContextMenuPlugin.md) | The plugin that is embedded in the context menu of files, folders, rooms, images, video (audio). |
| [`IEventListenerPlugin`](IEventListenerPlugin.md) | The plugin that is given the access to the portal events. |
| [`IFilePlugin`](IFilePlugin.md) | The plugin that can interact with the file list. |
| [`IInfoPanelPlugin`](IInfoPanelPlugin.md) | The plugin that is embedded as a separate tab in the file info panel. |
| [`IMainButtonPlugin`](IMainButtonPlugin.md) | The plugin that can add items to the main button menu. |
| [`IPlugin`](IPlugin.md) | The default plugin. |
| [`IPostMessagePlugin`](IPostMessagePlugin.md) | The plugin that is given the access to handle postMessage events from iframe components. |
| [`IProfileMenuPlugin`](IProfileMenuPlugin.md) | Plugin for embedding items in the profile menu. |
| [`ISettingsPlugin`](ISettingsPlugin.md) | The plugin that manages settings for the administrator or owner. |