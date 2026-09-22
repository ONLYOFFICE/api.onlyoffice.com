---
title: "Get a token for a password-protected external link"
sidebar_label: "Get a token for a password-protected external link"
sidebar_class_name: api-method post
description: "Returns a token after verifying the password or password hash for a password-protected external link."
---

**POST** `/api/2.0/files/{fileId}/sharedlink/{linkId}/password`

Returns a token after verifying the password or password hash for a password-protected external link.

**Note**: The token is used in the cookies with the 'sharelink[linkId]' name when calling API methods.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

### linkId

**type:** `string`

Link ID

**Example**: `"string"`

## Request body

### password

**type:** `string`

Password

**Example**: `"string"`

### passwordHash

**type:** `string`

Password hash

**Example**: `"string"`

## Request example

```json
{
  "password": "string",
  "passwordHash": "string"
}
```

## Returns

Token for a password-protected external link. A request that is not authenticated returns `401`.

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
