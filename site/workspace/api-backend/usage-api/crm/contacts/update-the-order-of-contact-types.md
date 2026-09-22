---
title: "Update the order of contact types"
sidebar_label: "Update the order of contact types"
sidebar_class_name: api-method put
description: "Updates the order of the contact types with a list specified in the request."
---

**PUT** `/api/2.0/crm/contact/type/reorder`

Updates the order of the contact types with a list specified in the request.

## Request body

### titles

**type:** `string[]`

List of contact type titles

## Request example

```json
{
  "titles": [
    "string"
  ]
}
```

## Returns

Contact types in the new order. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "RelativeItemsCount": 1,
    "Title": "Title",
    "Description": "Description",
    "Color": "#a7fc00",
    "SortOrder": 1,
    "ID": 1234
  }
]
```
