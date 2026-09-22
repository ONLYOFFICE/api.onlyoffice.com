---
title: "Get the backup progress"
sidebar_label: "Get the backup progress"
sidebar_class_name: api-method get
description: "Returns the progress of the started backup."
---

**GET** `/api/2.0/portal/getbackupprogress`

Returns the progress of the started backup.

## Returns

Backup progress. A request that is not authenticated returns `401`.

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
