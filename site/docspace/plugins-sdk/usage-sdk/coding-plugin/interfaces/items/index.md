# Items

Plugin items that extend specific DocSpace UI locations — context menus, file rows, info panels, profile menus, and navigation buttons.

Choose the item interface that matches the DocSpace UI area you want to extend with your plugin action. Items are registered through the matching [plugin type interface](../plugins/index.md). For example, a context menu plugin stores its `IContextMenuItem` objects in a `Map` and returns them from the `getContextMenuItems()` method.

## Overview

Each plugin type has specific items described in this section:

| Interface | Description |
| --- | --- |
| [`IArticleButtonItem`](IArticleButtonItem.md) | Describes a button item that will be embedded in the article sidebar. |
| [`IContextMenuItem`](IContextMenuItem.md) | Describes an item that will be embedded in the context menu. |
| [`IEventListenerItem`](IEventListenerItem.md) | Describes an event listener that reacts to portal events. |
| [`IFileItem`](IFileItem.md) | Describes an item that will be embedded in the file list. |
| [`IInfoPanelItem`](IInfoPanelItem.md) | The info panel item that is displayed in the info panel. |
| [`IMainButtonItem`](IMainButtonItem.md) | Describes an item that will be embedded in the More item of the main button menu. |
| [`IProfileMenuItem`](IProfileMenuItem.md) | Describes an item that will be embedded in the profile menu. |