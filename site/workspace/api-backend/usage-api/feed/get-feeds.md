---
title: "Get feeds"
sidebar_label: "Get feeds"
sidebar_class_name: api-method get
description: "Returns a list of feeds that are filtered by the parameters specified in the request."
---

**GET** `/api/2.0/feed/filter`

Returns a list of feeds that are filtered by the parameters specified in the request.

## Request body

### product

**type:** `string`

Product which feeds you want to read

**Example**: `"string"`

### from

**type:** `string`

Time from which the feeds should be displayed

**Example**: `"string"`

### to

**type:** `string`

Time until which the feeds should be displayed

**Example**: `"string"`

### author

**type:** `string[]`

Author whose feeds you want to read

### onlyNew

**type:** `boolean[]`

Displays only fresh feeds

### timeReaded

**type:** `string`

Time when the feeds were read

**Example**: `"string"`

## Request example

```json
{
  "product": "string",
  "from": "string",
  "to": "string",
  "author": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "onlyNew": [
    true
  ],
  "timeReaded": "string"
}
```

## Returns

List of filtered feeds. A request that is not authenticated returns `401`.
