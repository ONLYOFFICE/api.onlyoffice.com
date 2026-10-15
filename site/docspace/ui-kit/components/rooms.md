---
description: "The Rooms section: the active rooms the caller can see, with a header, the filter bar and the rows."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/docs/sections/Rooms.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Rooms

:::warning[Portal only]

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

The Rooms section: the active rooms the caller can see, with a header, the filter bar and the
rows. Search, a sort order and two filter groups narrow the list, and a room — then a folder in
it — opens in place. There is nothing to create — the filter bar has no main button, and a
row's context menu only opens it or copies its link, so this screen never writes to a portal.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./rooms--default-light.png').default, dark: require('./rooms--default-dark.png').default }} />

### Features

- **Room type filter** — Collaboration, Public, Custom, Virtual data room
- **Owner filter** — `Me`: only the rooms the caller owns. It combines with the room type
- **Search and sort** — by name or last modified, newest first by default
- **No form rooms** — form-filling rooms live in the [Forms](./forms.md) section, as in the portal
- **Rooms open in place** — see below
- **Demo or portal** — the same screen on in-memory data or on a real portal

### Opening rooms and folders, and the context menu

A click on a room's name, or **Open** in its context menu, lists what is inside; a folder in it
opens the same way. The header becomes the kit's `Navigation`: the title, a breadcrumb back to
Rooms (the room itself drawn with the room's mark), and a back arrow to the parent.

Inside a room the filter changes to what the portal offers there: **Type** — Folders,
Documents, Spreadsheets, Presentations, PDF — sent as `filterType`. Room type and owner mean
nothing inside a room, so every level starts with no filter and an empty search. The list is
`foldersApi.getFolderByFolderId({ folderId, ... })`, and its `pathParts` become the breadcrumb.

Each row has a context menu with the minimum a read-only list needs:

<APITable>

| Item                   | Shown for               | Does                                                                  |
| ---------------------- | ----------------------- | --------------------------------------------------------------------- |
| **Open**               | rooms and folders       | lists it in place                                                     |
| **Open in ONLYOFFICE** | files                   | opens the file in the portal's editor in a new tab; a toast in the demo |
| **Copy link**          | files, on a real portal | copies the editor link                                                |

</APITable>

### Choosing a room or folder in a picker

<ThemedImage alt="With Folder Picker" width={1014} sources={{ light: require('./rooms--with-folder-picker-light.png').default, dark: require('./rooms--with-folder-picker-dark.png').default }} />

With `withFolderPicker`, the header carries **Select folder**, which opens a picker whose root
holds **Rooms** and nothing else. Inside it are the rooms, then a room's folders — never its
files. **Open** takes wherever the picker stands: inside Rooms it shows the rooms list, inside a
room or a folder it opens that one in the list. At the picker's root **Open** is disabled.

It is the kit's `Selector` over the same source as the list; see the
[Files](./files.md) page for why it is not `FilesSelector`, which cannot
show Rooms alone.

### Where the rows come from

The header says which source answered: `Demo data`, or the host of the connected portal.

- **No portal.** With nothing picked in the **API Config** toolbar the list runs on
  `demoSource("rooms")`: six rooms covering every type, three of them owned by `You`, which is
  who `Me` means in the demo.
- **A portal.** Pick one in the toolbar and the story reads that portal's rooms, as whoever the
  key belongs to — `Me` is the key's owner, not the reader.

Every filter goes to the portal in the request:

<APITable>

| Control      | Request parameter                                                              |
| ------------ | ------------------------------------------------------------------------------ |
| Search       | `filterValue`                                                                  |
| Room type    | `type: [RoomType.EditingRoom \| PublicRoom \| CustomRoom \| VirtualDataRoom]` |
| Owner: Me    | `subjectId` (the caller's id) with `subjectFilter: SubjectFilter.Owner`        |
| Sort         | `sortBy` (`"AZ"`, `"DateAndTime"`) and `sortOrder`                             |
| —            | `searchArea: SearchArea.Active`, always                                        |

</APITable>

`Me` needs the caller's own id, which the story asks for once, with
`profilesApi.getSelfProfile()`, the first time the filter is applied.

The split between Rooms and Forms is made by the server, not here: `SearchArea.Active` never
returns a form-filling room.

### Usage

```tsx
import {
  RoomType,
  SearchArea,
  SortOrder,
  SubjectFilter,
} from "@onlyoffice/docspace-api-sdk";
import { useApi } from "@onlyoffice/apps-ui-kit/providers/api";

const { roomsApi, profilesApi } = useApi();
const me = (await profilesApi.getSelfProfile()).data.response?.id;

const response = await roomsApi.getRoomsFolder({
  searchArea: SearchArea.Active,
  type: [RoomType.PublicRoom],
  subjectId: me,
  subjectFilter: SubjectFilter.Owner,
  sortBy: "DateAndTime",
  sortOrder: SortOrder.Descending,
  count: 100,
});

const { folders: rooms, total } = response.data.response;
```

### Why `Owner` is a plain tag group

The portal's own owner filter is `FilterGroups.roomFilterOwner`, and `FilterInput` treats that
group specially: it expects exactly three entries — `Me`, `Other` and a people selector — reads
the second one unconditionally, and will not deselect an entry the usual way. With `Me` alone
the panel throws on open. `Other` needs a people selector mounted through `renderSelector`,
which a read-only list has no use for, so the story puts `Me` in a plain tag group
(`FilterGroups.filterOther`) under the same `Owner` heading. A host that wants the full
`Me / Other` choice has to supply all three entries and the selector.
