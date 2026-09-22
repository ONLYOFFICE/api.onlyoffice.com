---
title: "Delete an uploaded file"
sidebar_label: "Delete an uploaded file"
sidebar_class_name: api-method delete
description: "Deletes an uploaded file with the name specified in the request."
---

**DELETE** `/api/2.0/crm/voip/uploads`

Deletes an uploaded file with the name specified in the request.

## Request body

### audioType

**type:** `integer`

Audio type

**Example**: `0`

### fileName

**type:** `string`

Uploaded file name

**Example**: `"string"`

## Request example

```json
{
  "audioType": 0,
  "fileName": "string"
}
```

## Returns

Uploaded file. A request that is not authenticated returns `401`.
