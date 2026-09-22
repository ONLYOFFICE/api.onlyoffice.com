---
title: "Send SMS code"
sidebar_label: "Send SMS code"
sidebar_class_name: api-method post
description: "Sends SMS with an authentication code."
---

**POST** `/api/2.0/authentication/sendsms`

Sends SMS with an authentication code.

## Request body

### userName

**type:** `string`

User name or email

**Example**: `"string"`

### password

**type:** `string`

Password

**Example**: `"string"`

### provider

**type:** `string`

Social media provider type

**Example**: `"string"`

### accessToken

**type:** `string`

Provider token

**Example**: `"string"`

## Request example

```json
{
  "userName": "string",
  "password": "string",
  "provider": "string",
  "accessToken": "string"
}
```

## Returns

Authentication data: authentication by SMS or not, phone number, SMS expiration time

### Token

**type:** `string`

**Example**: `"abcde12345"`

### Expires

**type:** `string`

**Example**: `"2020-11-24T05:36:20.4206897Z"`

### Sms

**type:** `boolean`

**Example**: `true`

### PhoneNoise

**type:** `string`

**Example**: `"+1 555 0100"`

### Tfa

**type:** `boolean`

**Example**: `true`

### TfaKey

**type:** `string`

**Example**: `"123dwa"`

## Response example

```json
{
  "Token": "abcde12345",
  "Expires": "2020-11-24T05:36:20.4206897Z",
  "Sms": true,
  "PhoneNoise": "+1 555 0100",
  "Tfa": true,
  "TfaKey": "123dwa"
}
```
