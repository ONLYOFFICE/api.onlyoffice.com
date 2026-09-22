---
title: "Update a currency rate"
sidebar_label: "Update a currency rate"
sidebar_class_name: api-method put
description: "Updates a currency rate with the parameters specified in the request."
---

**PUT** `/api/2.0/crm/currency/rates/{id:[0-9]+}`

Updates a currency rate with the parameters specified in the request.

## Request body

### id

**type:** `integer`

Currency ID

**Example**: `0`

### fromCurrency

**type:** `string`

New currency to convert

**Example**: `"string"`

### toCurrency

**type:** `string`

New currency into which the original currency will be converted

**Example**: `"string"`

### rate

**type:** `number`

New currency rate

**Example**: `0`

## Request example

```json
{
  "id": 0,
  "fromCurrency": "string",
  "toCurrency": "string",
  "rate": 0
}
```

## Returns

Updated currency rate. A request that is not authenticated returns `401`.

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
