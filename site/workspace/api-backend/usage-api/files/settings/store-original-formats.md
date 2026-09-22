---
title: "Store original formats"
sidebar_label: "Store original formats"
sidebar_class_name: api-method put
description: "Stores files in the original formats as well when uploading and converting."
---

**PUT** `/api/2.0/files/storeoriginal`

Stores files in the original formats as well when uploading and converting.

## Request body

### set

**type:** `boolean`

Turns the parameter on or off

**Example**: `true`

## Request example

```json
{
  "set": true
}
```

## Returns

Bool value: true if the parameter is enabled. A request that is not authenticated returns `401`.
