---
title: "Update the order of opportunity stages"
sidebar_label: "Update the order of opportunity stages"
sidebar_class_name: api-method put
description: "Updates the available order of opportunity stages with a list specified in the request."
---

**PUT** `/api/2.0/crm/opportunity/stage/reorder`

Updates the available order of opportunity stages with a list specified in the request.

## Request body

### ids

**type:** `integer[]`

List of opportunity stage IDs

## Request example

```json
{
  "ids": [
    0
  ]
}
```

## Returns

Opportunity stages in the new order. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
