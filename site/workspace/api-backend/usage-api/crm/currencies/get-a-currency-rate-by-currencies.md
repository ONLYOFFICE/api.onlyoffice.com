---
title: "Get a currency rate by currencies"
sidebar_label: "Get a currency rate by currencies"
sidebar_class_name: api-method get
description: "Returns a currency rate by currencies."
---

**GET** `/api/2.0/crm/currency/rates/{fromCurrency}/{toCurrency}`

Returns a currency rate by currencies.

## Path parameters

### fromCurrency

**type:** `string`

Currency to convert

**Example**: `"string"`

### toCurrency

**type:** `string`

Currency into which the original currency will be converted

**Example**: `"string"`

## Returns

Currency rate. A request that is not authenticated returns `401`.

### FromCurrency

**type:** `string`

**Example**: `"EUR"`

### ToCurrency

**type:** `string`

**Example**: `"USD"`

### Rate

**type:** `number`

**Example**: `1.1`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "FromCurrency": "EUR",
  "ToCurrency": "USD",
  "Rate": 1.1,
  "ID": 1234
}
```
