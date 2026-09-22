---
title: "Get the password settings"
sidebar_label: "Get the password settings"
sidebar_class_name: api-method get
description: "Returns the portal password settings."
---

**GET** `/api/2.0/settings/security/password`

Returns the portal password settings.

## Returns

Password settings. A request that is not authenticated returns `401`.

### LimitMaxLength

**type:** `integer`

**Example**: `0`

### LimitMinLength

**type:** `integer`

**Example**: `0`

### MaxLength

**type:** `integer`

**Example**: `0`

### MinLength

**type:** `integer`

**Example**: `0`

### AllowedCharactersRegexStr

**type:** `string`

**Example**: `"string"`

### UpperCase

**type:** `boolean`

**Example**: `true`

### UpperCaseRegexStr

**type:** `string`

**Example**: `"string"`

### Digits

**type:** `boolean`

**Example**: `true`

### DigitsRegexStr

**type:** `string`

**Example**: `"string"`

### SpecSymbols

**type:** `boolean`

**Example**: `true`

### SpecSymbolsRegexStr

**type:** `string`

**Example**: `"string"`

## Response example

```json
{
  "LimitMaxLength": 0,
  "LimitMinLength": 0,
  "MaxLength": 0,
  "MinLength": 0,
  "AllowedCharactersRegexStr": "string",
  "UpperCase": true,
  "UpperCaseRegexStr": "string",
  "Digits": true,
  "DigitsRegexStr": "string",
  "SpecSymbols": true,
  "SpecSymbolsRegexStr": "string"
}
```
