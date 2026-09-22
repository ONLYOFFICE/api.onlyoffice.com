---
title: "Get the space usage statistics"
sidebar_label: "Get the space usage statistics"
sidebar_class_name: api-method get
description: "Returns the space usage statistics of the module with the ID specified in the request."
---

**GET** `/api/2.0/settings/statistics/spaceusage/{id}`

Returns the space usage statistics of the module with the ID specified in the request.

## Path parameters

### id

**type:** `string`

Module ID

**Example**: `"string"`

## Returns

Module space usage statistics. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Name": "Item name",
    "Icon": "Item icon path",
    "Disabled": false,
    "Size": "0 Byte",
    "Url": "Item url"
  }
]
```
