---
title: "Get common third-party services"
sidebar_label: "Get common third-party services"
sidebar_class_name: api-method get
description: "Returns a list of the third-party services connected to the \"Common\" section."
---

**GET** `/api/2.0/files/thirdparty/common`

Returns a list of the third-party services connected to the "Common" section.

## Returns

Common third-party folders. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "TotalFiles": 5,
    "TotalSubFolders": 5,
    "Shareable": true,
    "NewForMe": 3,
    "FolderUrl": "folder url",
    "IsFavorite": true,
    "ID": "123wda-wdaw",
    "Title": "title",
    "CreateBy": "d40b68d0-5b86-4823-b22a-f57f429f5aff",
    "CreateByString": "admin",
    "CreateOnString": "create_on",
    "ModifiedOnString": "modified_on",
    "ModifiedBy": "d40b68d0-5b86-4823-b22a-f57f429f5aff",
    "ModifiedByString": "admin",
    "Error": "",
    "Access": 3,
    "Shared": true,
    "ProviderId": 3,
    "ProviderKey": "provider_key",
    "FolderIdDisplay": "123wda5",
    "DeletedPermanentlyOnString": "string",
    "DenyDownload": true,
    "DenySharing": true
  }
]
```
