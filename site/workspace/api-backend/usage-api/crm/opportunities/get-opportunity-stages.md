---
title: "Get opportunity stages"
sidebar_label: "Get opportunity stages"
sidebar_class_name: api-method get
description: "Returns a list of all the opportunity stages available on the portal."
---

**GET** `/api/2.0/crm/opportunity/stage`

Returns a list of all the opportunity stages available on the portal.

## Returns

List of all the opportunity stages. A request that is not authenticated returns `401`.

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
