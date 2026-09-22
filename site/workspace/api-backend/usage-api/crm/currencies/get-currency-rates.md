---
title: "Get currency rates"
sidebar_label: "Get currency rates"
sidebar_class_name: api-method get
description: "Returns a list of all the currency rates."
---

**GET** `/api/2.0/crm/currency/rates`

Returns a list of all the currency rates.

## Returns

List of currency rates. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "FromCurrency": "EUR",
    "ToCurrency": "USD",
    "Rate": 1.1,
    "ID": 1234
  }
]
```
