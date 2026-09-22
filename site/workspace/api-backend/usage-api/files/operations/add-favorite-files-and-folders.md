---
title: "Add favorite files and folders"
sidebar_label: "Add favorite files and folders"
sidebar_class_name: api-method post
description: "Adds files and folders with the IDs specified in the request to the favorite list."
---

**POST** `/api/2.0/files/favorites`

Adds files and folders with the IDs specified in the request to the favorite list.

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
