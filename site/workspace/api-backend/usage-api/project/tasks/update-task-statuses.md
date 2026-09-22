---
title: "Update task statuses"
sidebar_label: "Update task statuses"
sidebar_class_name: api-method put
description: "Updates the task statuses with the values specified in the request."
---

**PUT** `/api/2.0/project/statuses`

Updates the task statuses with the values specified in the request.

## Request body

### statuses

**type:** `CustomTaskStatus[]`

New task statuses

## Request example

```json
{
  "statuses": [
    {}
  ]
}
```

## Returns

Updated task statuses. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
