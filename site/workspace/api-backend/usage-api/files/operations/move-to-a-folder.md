---
title: "Move to a folder"
sidebar_label: "Move to a folder"
sidebar_class_name: api-method put
description: "Moves all the selected files and folders to the folder with the ID specified in the request."
---

**PUT** `/api/2.0/files/fileops/move`

Moves all the selected files and folders to the folder with the ID specified in the request.

## Request body

### destFolderId

**type:** `string`

Destination folder ID

**Example**: `"string"`

### folderIds

**type:** `string[]`

List of folder IDs

### fileIds

**type:** `string[]`

List of file IDs

### conflictResolveType

**type:** `integer`

Overwriting behavior: skip (0), overwrite (1) or duplicate (2)

**Example**: `0`

### deleteAfter

**type:** `boolean`

Specifies whether to delete a folder after the editing session is finished or not

**Example**: `true`

## Request example

```json
{
  "destFolderId": "string",
  "folderIds": [
    "string"
  ],
  "fileIds": [
    "string"
  ],
  "conflictResolveType": 0,
  "deleteAfter": true
}
```

## Returns

List of file operations. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": "d5490cba-a5e6-40db-acb2-94203dba12d6",
    "OperationType": 1,
    "Progress": 100,
    "Error": "",
    "Processed": "1",
    "Finished": false,
    "Files": [
      {
        "Name": "File name",
        "UpdatedBy": {
          "Id": "00000000-0000-0000-0000-000000000000",
          "DisplayName": "Mike Zanyatski",
          "Title": "Manager",
          "AvatarSmall": "url to small avatar",
          "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
        },
        "Updated": "2020-12-08T17:37:03.3424957Z",
        "Location": "4\\\\46\\\\File name"
      }
    ],
    "Folders": [
      {
        "ParentId": "1840746475",
        "FilesCount": 1840746475,
        "FoldersCount": 1840746475,
        "IsShareable": true,
        "IsFavorite": true,
        "Id": "857864274",
        "Title": "Some titile.txt",
        "Access": 1,
        "Shared": false,
        "Created": "2020-12-13T17:13:31.5902727Z",
        "CreatedBy": {
          "Id": "00000000-0000-0000-0000-000000000000",
          "DisplayName": "Mike Zanyatski",
          "Title": "Manager",
          "AvatarSmall": "url to small avatar",
          "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
        },
        "Updated": "2020-12-13T17:13:31.5902727Z",
        "RootFolderType": 2,
        "UpdatedBy": {
          "Id": "00000000-0000-0000-0000-000000000000",
          "DisplayName": "Mike Zanyatski",
          "Title": "Manager",
          "AvatarSmall": "url to small avatar",
          "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
        },
        "ProviderItem": true,
        "ProviderKey": "1234d",
        "ProviderId": 1234,
        "DenyDownload": true,
        "DenySharing": true
      }
    ]
  }
]
```
