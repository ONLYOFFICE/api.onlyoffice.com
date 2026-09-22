---
title: "Convert a currency"
sidebar_label: "Convert a currency"
sidebar_class_name: api-method get
description: "Returns a result of converting one currency into another."
---

**GET** `/api/2.0/crm/settings/currency/convert`

Returns a result of converting one currency into another.

## Request body

### amount

**type:** `number`

Amount to convert

**Example**: `0`

### fromcurrency

**type:** `string`

Currency to convert

**Example**: `"string"`

### tocurrency

**type:** `string`

Currency into which the original currency will be converted

**Example**: `"string"`

## Request example

```json
{
  "amount": 0,
  "fromcurrency": "string",
  "tocurrency": "string"
}
```

## Returns

Decimal result of converting. A request that is not authenticated returns `401`.
