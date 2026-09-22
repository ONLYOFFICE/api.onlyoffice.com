---
title: "Check files and folders for conflicts"
sidebar_label: "Check files and folders for conflicts"
sidebar_class_name: api-method get
description: "Checks a batch of files and folders for conflicts when moving or copying them to the folder with the ID specified in the request."
---

**GET** `/api/2.0/files/fileops/move`

Checks a batch of files and folders for conflicts when moving or copying them to the folder with the ID specified in the request.

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

## Request example

```json
{
  "destFolderId": "string",
  "folderIds": [
    "string"
  ],
  "fileIds": [
    "string"
  ]
}
```

## Returns

IDs of files with conflicts. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
