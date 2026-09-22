---
title: "Set currency rates"
sidebar_label: "Set currency rates"
sidebar_class_name: api-method post
description: "Sets currency rates to the currency specified in the request."
---

**POST** `/api/2.0/crm/currency/setrates`

Sets currency rates to the currency specified in the request.

## Request body

### currency

**type:** `string`

Currency (abbreviation)

**Example**: `"string"`

### rates

**type:** `CurrencyRate[]`

List of currency rates

## Request example

```json
{
  "currency": "string",
  "rates": [
    {
      "FromCurrency": "fromCurrency",
      "ToCurrency": "toCurrency",
      "Rate": "1.1",
      "ID": "1234"
    }
  ]
}
```

## Returns

Currency information. A request that is not authenticated returns `401`.

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
