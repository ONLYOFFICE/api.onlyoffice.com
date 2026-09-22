---
title: "Get contact statuses"
sidebar_label: "Get contact statuses"
sidebar_class_name: api-method get
description: "Returns a list of all the contact statuses available on the portal."
---

**GET** `/api/2.0/crm/contact/status`

Returns a list of all the contact statuses available on the portal.

## Returns

List of all the contact statuses. A request that is not authenticated returns `401`.

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
