---
title: "Get the \"Templates\" section"
sidebar_label: "Get the \"Templates\" section"
sidebar_class_name: api-method get
description: "Returns the detailed list of files located in the \"Templates\" section."
---

**GET** `/api/2.0/files/@templates`

Returns the detailed list of files located in the "Templates" section.

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

## Request example

```json
{
  "userIdOrGroupId": "string",
  "filterType": 0,
  "searchInContent": true,
  "extension": "string",
  "withSubfolders": true
}
```

## Returns

The "Templates" section contents. A request that is not authenticated returns `401`.

### Files

**type:** `FileWrapper[]`

### Folders

**type:** `FolderWrapper[]`

### Current

**type:** `FolderWrapper`

### PathParts

**type:** `object`

### StartIndex

**type:** `integer`

**Example**: `0`

### Count

**type:** `integer`

**Example**: `4`

### Total

**type:** `integer`

**Example**: `4`

### New

**type:** `integer`

**Example**: `0`

## Response example

```json
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
```
