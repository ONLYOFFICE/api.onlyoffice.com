---
title: "Add currency rates"
sidebar_label: "Add currency rates"
sidebar_class_name: api-method post
description: "Adds currency rates specified in the request."
---

**POST** `/api/2.0/crm/currency/addrates`

Adds currency rates specified in the request.

## Request body

### rates

**type:** `CurrencyRate[]`

List of currency rates

## Request example

```json
{
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
