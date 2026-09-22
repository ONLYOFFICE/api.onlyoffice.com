---
title: "Get the SMTP settings"
sidebar_label: "Get the SMTP settings"
sidebar_class_name: api-method get
description: "Returns the current portal SMTP settings."
---

**GET** `/api/2.0/settings/smtp`

Returns the current portal SMTP settings.

## Returns

SMTP settings. A request that is not authenticated returns `401`.

### Host

**type:** `string`

**Example**: `"mail.example.com"`

### Port

**type:** `integer[]`

### SenderAddress

**type:** `string`

**Example**: `"notify@example.com"`

### SenderDisplayName

**type:** `string`

**Example**: `"Postman"`

### CredentialsUserName

**type:** `string`

**Example**: `"notify@example.com"`

### CredentialsUserPassword

**type:** `string`

**Example**: `"{password}"`

### EnableSSL

**type:** `boolean`

**Example**: `false`

### EnableAuth

**type:** `boolean`

**Example**: `true`

### UseNtlm

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "Host": "mail.example.com",
  "Port": [
    25
  ],
  "SenderAddress": "notify@example.com",
  "SenderDisplayName": "Postman",
  "CredentialsUserName": "notify@example.com",
  "CredentialsUserPassword": "{password}",
  "EnableSSL": false,
  "EnableAuth": true,
  "UseNtlm": true
}
```
