---
title: "Get filtered total task time"
sidebar_label: "Get filtered total task time"
sidebar_class_name: api-method get
description: "Returns the total time spent matching the filter parameters specified in the request."
---

**GET** `/api/2.0/project/time/filter/total`

Returns the total time spent matching the filter parameters specified in the request.

## Request body

### projectid

**type:** `integer`

Project ID

**Example**: `0`

### myProjects

**type:** `boolean`

Specifies whether to return task time only for my projects or not

**Example**: `true`

### milestone

**type:** `integer[]`

Milestone ID

### myMilestones

**type:** `boolean`

Specifies whether to return task time only for my milestones or not

**Example**: `true`

### tag

**type:** `integer`

Project tag

**Example**: `0`

### departament

**type:** `string`

Departament GUID

**Example**: `"string"`

### participant

**type:** `string`

Participant GUID

**Example**: `"string"`

### createdStart

**type:** `string`

The earliest date of task creation

**Example**: `"string"`

### createdStop

**type:** `string`

The latest date of task creation

**Example**: `"string"`

### lastId

**type:** `integer`

Last spent time ID

**Example**: `0`

### status

**type:** `integer[]`

Payment status ("NotChargeable", "NotBilled", or "Billed")

## Request example

```json
{
  "projectid": 0,
  "myProjects": true,
  "milestone": [
    0
  ],
  "myMilestones": true,
  "tag": 0,
  "departament": "string",
  "participant": "string",
  "createdStart": "string",
  "createdStop": "string",
  "lastId": 0,
  "status": [
    0
  ]
}
```

## Returns

Total spent time. A request that is not authenticated returns `401`.
