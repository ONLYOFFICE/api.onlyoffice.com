---
title: "Authenticate a user"
sidebar_label: "Authenticate a user"
sidebar_class_name: api-method post
description: "Authenticates the current user by SMS, authenticator app, or without two-factor authentication."
---

**POST** `/api/2.0/authentication/`

Authenticates the current user by SMS, authenticator app, or without two-factor authentication.

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

### codeOAuth

**type:** `string`

Code for getting a token

**Example**: `"string"`

## Request example

```json
{
  "userName": "string",
  "password": "string",
  "provider": "string",
  "accessToken": "string",
  "codeOAuth": "string"
}
```

## Returns

Authentication token to use in the 'Authorization' header when calling API methods

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
