---
title: "Update the order of history categories"
sidebar_label: "Update the order of history categories"
sidebar_class_name: api-method put
description: "Updates the order of the history categories with a list specified in the request."
---

**PUT** `/api/2.0/crm/history/category/reorder`

Updates the order of the history categories with a list specified in the request.

## Request body

### titles

**type:** `string[]`

List of history category titles

## Request example

```json
{
  "titles": [
    "string"
  ]
}
```

## Returns

History categories in the new order. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "RelativeItemsCount": 1,
    "ImagePath": "path to image",
    "Title": "Title",
    "Description": "Description",
    "Color": "#a7fc00",
    "SortOrder": 1,
    "ID": 1234
  }
]
```
