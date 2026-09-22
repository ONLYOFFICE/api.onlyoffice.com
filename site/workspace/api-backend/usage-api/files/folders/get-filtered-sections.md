---
title: "Get filtered sections"
sidebar_label: "Get filtered sections"
sidebar_class_name: api-method get
description: "Returns all the sections matching the parameters specified in the request."
---

**GET** `/api/2.0/files/@root`

Returns all the sections matching the parameters specified in the request.

## Request body

### userIdOrGroupId

**type:** `string`

User or group ID

**Example**: `"string"`

### filterType

**type:** `integer`

Filter type

**Example**: `0`

### searchInContent

**type:** `boolean`

Specifies whether to search within the section contents or not

**Example**: `true`

### extension

**type:** `string`

File extension by which files will be searched for if the FilterType.ByExtension parameter is passed

**Example**: `"string"`

### withSubfolders

**type:** `boolean`

Specifies whether to return sections with or without subfolders

**Example**: `true`

### withoutTrash

**type:** `boolean`

Specifies whether to return sections with or without trash folder

**Example**: `true`

### withoutAdditionalFolder

**type:** `boolean`

Specifies whether to return sections with or without additional folders

**Example**: `true`

## Request example

```json
{
  "userIdOrGroupId": "string",
  "filterType": 0,
  "searchInContent": true,
  "extension": "string",
  "withSubfolders": true,
  "withoutTrash": true,
  "withoutAdditionalFolder": true
}
```

## Returns

Contents of the sections. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
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
    ],
    "Current": {
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
    },
    "StartIndex": 0,
    "Count": 4,
    "Total": 4,
    "New": 0
  }
]
```
