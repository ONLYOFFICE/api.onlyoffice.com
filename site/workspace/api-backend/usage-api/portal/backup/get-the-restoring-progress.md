---
title: "Get the restoring progress"
sidebar_label: "Get the restoring progress"
sidebar_class_name: api-method get
description: "Returns the progress of the started restoring process."
---

**GET** `/api/2.0/portal/getrestoreprogress`

Returns the progress of the started restoring process.

## Returns

Restoring progress. A request that is not authenticated returns `401`.

### IsCompleted

**type:** `boolean`

**Example**: `false`

### Progress

**type:** `integer`

**Example**: `44`

### Error

**type:** `string`

### Link

**type:** `string`

**Example**: `"Link"`

## Response example

```json
{
  "IsCompleted": false,
  "Progress": 44,
  "Link": "Link"
}
```
