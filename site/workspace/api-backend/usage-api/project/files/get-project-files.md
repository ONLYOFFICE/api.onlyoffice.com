---
title: "Get project files"
sidebar_label: "Get project files"
sidebar_class_name: api-method get
description: "Returns the detailed list of all the files and folders for the project with the ID specified in the request."
---

**GET** `/api/2.0/project/{id:[0-9]+}/files`

Returns the detailed list of all the files and folders for the project with the ID specified in the request.

## Request body

### id

**type:** `integer`

Project ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

Project files. A request that is not authenticated returns `401`.

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
