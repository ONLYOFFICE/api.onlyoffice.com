---
title: "Update the order of contact statuses"
sidebar_label: "Update the order of contact statuses"
sidebar_class_name: api-method put
description: "Updates the order of the contact statuses with a list specified in the request."
---

**PUT** `/api/2.0/crm/contact/status/reorder`

Updates the order of the contact statuses with a list specified in the request.

## Request body

### titles

**type:** `string[]`

List of contact status titles

## Request example

```json
{
  "titles": [
    "string"
  ]
}
```

## Returns

Contact statuses in the new order. A request that is not authenticated returns `401`.

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
