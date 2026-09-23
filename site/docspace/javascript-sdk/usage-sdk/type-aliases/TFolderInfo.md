---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFolderInfo

Folder information returned by SDK methods.

```ts
type TFolderInfo = TEntityBase & object;
```

## Type Declaration

<APITable>

| Name | Type | Description |
| ------ | ------ | ------ |
| `denyDownload` | `boolean` | Whether downloads are denied. |
| `filesCount` | `number` | Number of files inside. |
| `foldersCount` | `number` | Number of sub-folders inside. |
| `indexing` | `boolean` | Whether folder indexing is enabled. |
| `isArchive`? | `boolean` | Whether the folder is archived. |
| `new` | `number` | Count of new/unread items. |
| `ownedBy`? | [`TCreatedBy`](TCreatedBy.md) | Folder owner reference. |
| `parentId` | `number` | Parent folder ID. |
| `parentRoomType`? | `number` | Parent room type number. |
| `parentShared`? | `boolean` | Whether the parent is shared. |
| `pinned` | `boolean` | Whether the folder is pinned. |
| `private`? | `boolean` | Whether the folder is private. |
| `roomType`? | `number` | Room type number. |
| `rootFolderId` | `number` | Root folder ID. |
| `rootFolderType` | `number` | Root folder type. |
| `sharedBy`? | [`TCreatedBy`](TCreatedBy.md) | User who shared the folder. |
| `type`? | `number` | Folder type number. |

</APITable>
