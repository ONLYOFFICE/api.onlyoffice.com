---
title: "Delete template files"
sidebar_label: "Delete template files"
sidebar_class_name: api-method delete
description: "Removes files with the IDs specified in the request from the template list."
---

**DELETE** `/api/2.0/files/templates`

Removes files with the IDs specified in the request from the template list.

## Request body

### fileIds

**type:** `string[]`

List of file IDs

## Request example

```json
{
  "fileIds": [
    "string"
  ]
}
```

## Returns

Bool value: true if the operation is successful. A request that is not authenticated returns `401`.
