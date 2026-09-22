---
title: "Get currency summary table"
sidebar_label: "Get currency summary table"
sidebar_class_name: api-method get
description: "Returns a summary table with the rates for the currency specified in the request."
---

**GET** `/api/2.0/crm/settings/currency/summarytable`

Returns a summary table with the rates for the currency specified in the request.

## Request body

### currency

**type:** `string`

Currency (abbreviation)

**Example**: `"string"`

## Request example

```json
{
  "currency": "string"
}
```

## Returns

Dictionary of currency rates for the specified currency. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Rate": "1,1",
    "Title": "Chinese Yuan",
    "Symbol": "¥",
    "Abbreviation": "CNY",
    "CultureName": "CN",
    "IsConvertable": true,
    "IsBasic": false
  }
]
```
