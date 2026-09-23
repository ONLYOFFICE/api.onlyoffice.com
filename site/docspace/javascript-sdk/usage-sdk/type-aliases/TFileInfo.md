---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFileInfo

File information returned by SDK methods.

```ts
type TFileInfo = TEntityBase & object;
```

## Type Declaration

<APITable>

| Name | Type | Description |
| ------ | ------ | ------ |
| `comment`? | `string` | File comment text. |
| `contentLength` | `string` | Formatted file size string. |
| `denyDownload`? | `boolean` | Whether downloads are denied. |
| `denySharing`? | `boolean` | Whether sharing is denied. |
| `fileExst` | `string` | File extension (e.g. `".docx"`). |
| `fileStatus` | `number` | Numeric file status flags. |
| `fileType` | `number` | Numeric file type. |
| `folderId` | `number` | Parent folder ID. |
| `hasDraft`? | `boolean` | Whether the file has an unsaved draft. |
| `isFavorite`? | `boolean` | Whether the file is marked as favorite. |
| `isFolder`? | `boolean` | Whether this entry is a folder. |
| `isForm`? | `boolean` | Whether the file is a form template. |
| `locked`? | `boolean` | Whether the file is locked for editing. |
| `lockedBy`? | `string` | ID of the user who locked the file. |
| `parentId`? | `number` | Parent folder ID. |
| `parentRoomType`? | `number` | Parent room type number. |
| `pureContentLength`? | `number` | Raw file size in bytes. |
| `rootFolderId` | `number` | Root folder ID. |
| `rootFolderType` | `number` | Root folder type. |
| `shortWebUrl`? | `string` | Short sharing URL. |
| `thumbnailStatus` | `number` | Thumbnail generation status. |
| `thumbnailUrl`? | `string` | Thumbnail image URL. |
| `version` | `number` | File version number. |
| `versionGroup`? | `number` | Version group number. |
| `viewAccessibility` | `Record`\<`string`, `boolean`\> | View capability flags. |
| `viewUrl`? | `string` | Direct view URL. |
| `webUrl` | `string` | Web view URL. |

</APITable>
