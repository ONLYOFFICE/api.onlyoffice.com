---
sidebar_position: -4
---

# Items

Each plugin type has the specific plugin items that are described in this section:

| Type                                            | Description                                                                                                                                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ContextMenuItem](contextmenuitem.md)     | Describes an item that will be embedded in the **Actions** item of the file context menu.                                                                                                                          |
| [InfoPanelItem](infopanelitem.md)         | Describes an item that will be embedded in the file info panel as a separate tab.                                                                                                                                  |
| [MainButtonItem](mainbuttonitem.md)       | Describes an item that will be embedded in the **More** item of the main button menu. It is available only inside a room (folder) and is not available for the room list.                                          |
| [ProfileMenuItem](profilemenuitem.md)     | Describes an item that will be embedded in the profile menu.                                                                                                                                                       |
| [FileItem](fileitem.md)                   | Describes an item that allows the plugin to control clicking on the specified file type. It does not work with the files that already have some actions.                                                           |
| [EventListenerItem](eventlisteneritem.md) | Describes an item that allows the plugin to respond to the built-in DocSpace events (creating a room/file, etc.). Each event can have several listeners. When the event is activated, the dialog cannot be hooked. |
