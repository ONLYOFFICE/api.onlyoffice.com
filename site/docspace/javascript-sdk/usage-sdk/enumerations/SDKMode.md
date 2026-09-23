---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# SDKMode

The SDK initialization mode. Passed via [TFrameConfig.mode](../type-aliases/TFrameConfig.md#mode).
Determines the UI and available functionality of the embedded frame.

## Example

```typescript
sdk.initFrame({ mode: SDKMode.Manager, frameId: "ds-frame", src: "https://portal.example.com" });
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Chat` | `"chat"` | AI chat interface. Full-page conversation UI, bound to an AI agent when [TFrameConfig.agentId](../type-aliases/TFrameConfig.md#agentId) is set, to the current user otherwise. |
| `Editor` | `"editor"` | Document editor. Requires `id` — the file identifier to open for editing. |
| `FileSelector` | `"file-selector"` | File picker dialog. Returns the selected file via `onSelectCallback`. Filterable by `selectorType`. |
| `Forms` | `"forms"` | Forms gallery. Displays forms for the room specified by [TFrameConfig.id](../type-aliases/TFrameConfig.md#id). Supports [TFrameConfig.showMenu](../type-aliases/TFrameConfig.md#showMenu) to toggle the side panel. |
| `Manager` | `"manager"` | File/folder browser. Displays a list of entities at `rootPath`. Supports CRUD operations on rooms, folders, and files. Forces `noLoader: false`. |
| `Personal` | `"personal"` | Personal files browser. File/folder manager for the user's personal space (My Documents, Favorites, Recent, Trash). Uses [TFrameConfig.personalDestination](../type-aliases/TFrameConfig.md#personalDestination) to pick the initial section. |
| `PublicRoom` | `"public-room"` | Public room view. Grants anonymous access to view, edit, comment on, and review documents. Requires `requestToken`. |
| `RoomSelector` | `"room-selector"` | Room picker dialog. Returns the selected room via `onSelectCallback`. |
| `System` | `"system"` | Headless mode. Renders a blank page with a loader; used to call system methods (e.g. `login`, `logout`) without UI. Forces `noLoader: false`. |
| `Uploader` | `"uploader"` | File upload interface. Uploads files to the folder specified by `id`. |
| `Viewer` | `"viewer"` | Read-only document viewer. Requires `id` — the file identifier to open for viewing. |

</APITable>
