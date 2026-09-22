---
title: "Delete an opportunity stage"
sidebar_label: "Delete an opportunity stage"
sidebar_class_name: api-method delete
description: "Deletes an opportunity stage with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/opportunity/stage/{id:[0-9]+}`

Deletes an opportunity stage with the ID specified in the request.

## Request body

### id

**type:** `integer`

Opportunity stage ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

Opportunity stage. A request that is not authenticated returns `401`.

### RelativeItemsCount

**type:** `integer`

**Example**: `1`

### SuccessProbability

**type:** `integer`

**Example**: `20`

### StageType

**type:** `"Open" | "ClosedAndWon" | "ClosedAndLost"`

[0 - Open, 1 - ClosedAndWon, 2 - ClosedAndLost]

**Example**: `0`

### Title

**type:** `string`

**Example**: `"Title"`

### Description

**type:** `string`

**Example**: `"Description"`

### Color

**type:** `string`

**Example**: `"#a7fc00"`

### SortOrder

**type:** `integer`

**Example**: `1`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "RelativeItemsCount": 1,
  "SuccessProbability": 20,
  "StageType": 0,
  "Title": "Title",
  "Description": "Description",
  "Color": "#a7fc00",
  "SortOrder": 1,
  "ID": 1234
}
```
