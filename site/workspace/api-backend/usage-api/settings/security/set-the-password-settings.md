---
title: "Set the password settings"
sidebar_label: "Set the password settings"
sidebar_class_name: api-method put
description: "Sets the portal password settings."
---

**PUT** `/api/2.0/settings/security/password`

Sets the portal password settings.

## Request body

### maxLength

**type:** `integer`

Maximum length

**Example**: `0`

### minLength

**type:** `integer`

Minimum length

**Example**: `0`

### upperCase

**type:** `boolean`

Specifies whether to include uppercase letters or not

**Example**: `true`

### digits

**type:** `boolean`

Specifies whether to include digits or not

**Example**: `true`

### specSymbols

**type:** `boolean`

Specifies whether to include special symbols or not

**Example**: `true`

## Request example

```json
{
  "maxLength": 0,
  "minLength": 0,
  "upperCase": true,
  "digits": true,
  "specSymbols": true
}
```

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
