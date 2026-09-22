---
title: "Update a file version if it exists"
sidebar_label: "Update a file version if it exists"
sidebar_class_name: api-method put
description: "Updates a file version if a file with such a name already exists."
---

**PUT** `/api/2.0/files/updateifexist`

Updates a file version if a file with such a name already exists.

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
