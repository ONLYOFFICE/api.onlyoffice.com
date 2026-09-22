---
title: "Generate a report"
sidebar_label: "Generate a report"
sidebar_class_name: api-method post
description: "Runs the report generation task with the parameters specified in the request."
---

**POST** `/api/2.0/crm/report/generate`

Runs the report generation task with the parameters specified in the request.

## Request body

### type

**type:** `integer`

Report type

**Example**: `0`

### timePeriod

**type:** `integer`

Report time period

**Example**: `0`

### managers

**type:** `string[]`

Managers

## Request example

```json
{
  "type": 0,
  "timePeriod": 0,
  "managers": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

## Returns

Report status. A request that is not authenticated returns `401`.
