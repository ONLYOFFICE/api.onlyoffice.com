---
title: "Set a mobile phone"
sidebar_label: "Set a mobile phone"
sidebar_class_name: api-method post
description: "Sets a mobile phone for the user with the name specified in the request."
---

**POST** `/api/2.0/authentication/setphone`

Sets a mobile phone for the user with the name specified in the request.

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

### mobilePhone

**type:** `string`

New mobile phone

**Example**: `"string"`

## Request example

```json
{
  "userName": "string",
  "password": "string",
  "provider": "string",
  "accessToken": "string",
  "mobilePhone": "string"
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
