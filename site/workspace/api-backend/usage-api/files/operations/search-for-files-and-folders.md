---
title: "Search for files and folders"
sidebar_label: "Search for files and folders"
sidebar_class_name: api-method get
description: "Searches for files and folders by the query specified in the request."
---

**GET** `/api/2.0/files/@search/{query}`

Searches for files and folders by the query specified in the request.

## Path parameters

### query

**type:** `string`

Query string

**Example**: `"string"`

## Returns

Files and folders. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
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
