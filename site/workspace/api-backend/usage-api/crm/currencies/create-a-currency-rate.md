---
title: "Create a currency rate"
sidebar_label: "Create a currency rate"
sidebar_class_name: api-method post
description: "Creates a new currency rate with the parameters specified in the request."
---

**POST** `/api/2.0/crm/currency/rates`

Creates a new currency rate with the parameters specified in the request.

## Request body

### fromCurrency

**type:** `string`

Currency to convert

**Example**: `"string"`

### toCurrency

**type:** `string`

Currency into which the original currency will be converted

**Example**: `"string"`

### rate

**type:** `number`

Exchange rate

**Example**: `0`

## Request example

```json
{
  "fromCurrency": "string",
  "toCurrency": "string",
  "rate": 0
}
```

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
