---
title: "Update an opportunity stage color"
sidebar_label: "Update an opportunity stage color"
sidebar_class_name: api-method put
description: "Updates the selected opportunity stage with a color specified in the request."
---

**PUT** `/api/2.0/crm/opportunity/stage/{id:[0-9]+}/color`

Updates the selected opportunity stage with a color specified in the request.

## Request body

### id

**type:** `integer`

Opportunity stage ID

**Example**: `0`

### color

**type:** `string`

New stage color

**Example**: `"string"`

## Request example

```json
{
  "id": 0,
  "color": "string"
}
```

## Returns

Opportunity stage with the updated color. A request that is not authenticated returns `401`.

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
