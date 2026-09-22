---
title: "Update a currency"
sidebar_label: "Update a currency"
sidebar_class_name: api-method put
description: "Updates the default CRM currency with the currency specified in the request."
---

**PUT** `/api/2.0/crm/settings/currency`

Updates the default CRM currency with the currency specified in the request.

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

Updated currency. A request that is not authenticated returns `401`.

### Title

**type:** `string`

**Example**: `"Chinese Yuan"`

### Symbol

**type:** `string`

**Example**: `"¥"`

### Abbreviation

**type:** `string`

**Example**: `"CNY"`

### CultureName

**type:** `string`

**Example**: `"CN"`

### IsConvertable

**type:** `boolean`

**Example**: `true`

### IsBasic

**type:** `boolean`

**Example**: `false`

## Response example

```json
{
  "Title": "Chinese Yuan",
  "Symbol": "¥",
  "Abbreviation": "CNY",
  "CultureName": "CN",
  "IsConvertable": true,
  "IsBasic": false
}
```
