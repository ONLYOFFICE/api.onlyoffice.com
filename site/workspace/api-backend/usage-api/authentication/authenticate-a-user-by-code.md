---
title: "Authenticate a user by code"
sidebar_label: "Authenticate a user by code"
sidebar_class_name: api-method post
description: "Authenticates the current user by SMS or two-factor authentication code."
---

**POST** `/api/2.0/authentication/{code}`

Authenticates the current user by SMS or two-factor authentication code.

## Path parameters

### code

**type:** `string`

Two-factor authentication code

**Example**: `"string"`

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

Two-factor authentication token to use in the 'Authorization' header when calling API methods

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
