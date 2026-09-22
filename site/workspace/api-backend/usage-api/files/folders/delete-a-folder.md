---
title: "Delete a folder"
sidebar_label: "Delete a folder"
sidebar_class_name: api-method delete
description: "Deletes a folder with the ID specified in the request."
---

**DELETE** `/api/2.0/files/folder/{folderId}`

Deletes a folder with the ID specified in the request.

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Request body

### deleteAfter

**type:** `boolean`

Specifies whether to delete a folder after the editing session is finished or not

**Example**: `true`

### immediately

**type:** `boolean`

Specifies whether to move a folder to the "Trash" folder or delete it immediately

**Example**: `true`

## Request example

```json
{
  "deleteAfter": true,
  "immediately": true
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
