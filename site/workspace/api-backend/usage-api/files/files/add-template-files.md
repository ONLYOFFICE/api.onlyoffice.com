---
title: "Add template files"
sidebar_label: "Add template files"
sidebar_class_name: api-method post
description: "Adds files with the IDs specified in the request to the template list."
---

**POST** `/api/2.0/files/templates`

Adds files with the IDs specified in the request to the template list.

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
