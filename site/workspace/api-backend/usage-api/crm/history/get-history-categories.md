---
title: "Get history categories"
sidebar_label: "Get history categories"
sidebar_class_name: api-method get
description: "Returns a list of all the history categories available on the portal."
---

**GET** `/api/2.0/crm/history/category`

Returns a list of all the history categories available on the portal.

## Returns

List of all the history categories. A request that is not authenticated returns `401`.

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
