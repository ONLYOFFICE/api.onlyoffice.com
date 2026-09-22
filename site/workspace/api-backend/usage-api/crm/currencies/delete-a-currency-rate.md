---
title: "Delete a currency rate"
sidebar_label: "Delete a currency rate"
sidebar_class_name: api-method delete
description: "Deletes a currency rate with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/currency/rates/{id:[0-9]+}`

Deletes a currency rate with the ID specified in the request.

## Request body

### id

**type:** `integer`

Currency rate ID

**Example**: `0`

## Request example

```json
{
  "id": 0
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
