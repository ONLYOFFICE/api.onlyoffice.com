---
title: "Get the folder path"
sidebar_label: "Get the folder path"
sidebar_class_name: api-method get
description: "Returns a path to the folder with the ID specified in the request."
---

**GET** `/api/2.0/files/folder/{folderId}/path`

Returns a path to the folder with the ID specified in the request.

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Returns

Folder path. A request that is not authenticated returns `401`.

## Response example

```json
[
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
```
