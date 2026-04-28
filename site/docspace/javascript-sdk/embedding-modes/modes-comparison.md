---
sidebar_position: 1
---

# Comparison of embedding modes

The SDK supports multiple initialization modes:

| Mode | UI shown to user | User can browse | User can edit | Requires file/room ID | Auth required |
| ------ | ----------------- | ------ | -------- | ------ | ------ |
| Manager | Full file and room manager | Yes | Yes | No | Yes |
| Public room | Public room view | Yes (within room) | Yes (within room) | Yes (room) | No |
| Viewer | Document viewer | No | No | Yes (file) | Yes |
| Editor | Document editor | No | Yes | Yes (file) | Yes |
| Room selector | Room picker dialog | Rooms only | No | No | Yes |
| File selector | File picker dialog | Yes | No | No | Yes |
| System | None (hidden frame) | N/A | N/A | N/A | Yes |

:::note
- For Public room, editing is scoped to documents within the room.
- Selector and system modes do not expose editing capabilities.
:::