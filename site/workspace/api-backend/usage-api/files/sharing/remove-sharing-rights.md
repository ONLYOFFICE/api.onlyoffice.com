---
title: "Remove sharing rights"
sidebar_label: "Remove sharing rights"
sidebar_class_name: api-method delete
description: "Removes the sharing rights for the group of folders and files with the IDs specified in the request."
---

**DELETE** `/api/2.0/files/share`

Removes the sharing rights for the group of folders and files with the IDs specified in the request.

## Request body

### folderIds

**type:** `string[]`

List of folder IDs

### fileIds

**type:** `string[]`

List of file IDs

## Request example

```json
{
  "folderIds": [
    "string"
  ],
  "fileIds": [
    "string"
  ]
}
```

## Returns

Bool value: true if the operation is successful. A request that is not authenticated returns `401`.
