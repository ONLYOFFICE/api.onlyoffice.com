---
title: "Create a notification address"
sidebar_label: "Create a notification address"
sidebar_class_name: api-method post
description: "Creates an address for the tenant notifications with the parameters specified in the request."
---

**POST** `/api/2.0/mailserver/notification/address/add`

Creates an address for the tenant notifications with the parameters specified in the request.

## Request body

### name

**type:** `string`

Address name

**Example**: `"string"`

### password

**type:** `string`

Address password

**Example**: `"string"`

### domain_id

**type:** `integer`

Domain ID

**Example**: `0`

## Request example

```json
{
  "name": "string",
  "password": "string",
  "domain_id": 0
}
```

## Returns

Notification address data associated with the tenant. A request that is not authenticated returns `401`.

### Email

**type:** `string`

**Example**: `"Email"`

### SmtpServer

**type:** `string`

**Example**: `"smtp_server"`

### SmtpPort

**type:** `integer`

**Example**: `33`

### SmtpAccount

**type:** `string`

**Example**: `"smtp_account"`

### SmtpAuth

**type:** `boolean`

**Example**: `true`

### SmptEncryptionType

**type:** `string`

**Example**: `"smtp_encryption_type"`

### SmtpAuthenticationType

**type:** `string`

**Example**: `"smtp_auth_type"`

## Response example

```json
{
  "Email": "Email",
  "SmtpServer": "smtp_server",
  "SmtpPort": 33,
  "SmtpAccount": "smtp_account",
  "SmtpAuth": true,
  "SmptEncryptionType": "smtp_encryption_type",
  "SmtpAuthenticationType": "smtp_auth_type"
}
```
