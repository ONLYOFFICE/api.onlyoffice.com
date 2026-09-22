---
title: "Get active operations"
sidebar_label: "Get active operations"
sidebar_class_name: api-method get
description: "Returns a list of all the active operations."
---

**GET** `/api/2.0/files/fileops`

Returns a list of all the active operations.

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
