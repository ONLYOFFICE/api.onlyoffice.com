---
title: "Get the visit statistics"
sidebar_label: "Get the visit statistics"
sidebar_class_name: api-method get
description: "Returns the user visit statistics for the period specified in the request."
---

**GET** `/api/2.0/settings/statistics/visit`

Returns the user visit statistics for the period specified in the request.

## Request body

### fromDate

**type:** `string`

Start period date

**Example**: `"string"`

### toDate

**type:** `string`

End period date

**Example**: `"string"`

## Request example

```json
{
  "fromDate": "string",
  "toDate": "string"
}
```

## Returns

List of point charts. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "DisplayDate": "12/22/2020",
    "Date": "2020-12-22T04:11:57.0469085+00:00",
    "Hosts": 0,
    "Hits": 0
  }
]
```
