---
title: "Create an account by email and password"
sidebar_label: "Create an account by email and password"
sidebar_class_name: api-method post
description: "Creates an account based on the email address and password specified in the request."
---

**POST** `/api/2.0/mail/accounts/simple`

Creates an account based on the email address and password specified in the request.

## Request body

### email

**type:** `string`

Account email address in the name@domain format

**Example**: `"string"`

### password

**type:** `string`

Email password

**Example**: `"string"`

## Request example

```json
{
  "email": "string",
  "password": "string"
}
```

## Returns

Created account. A request that is not authenticated returns `401`.

### MailboxId

**type:** `integer`

**Example**: `12`

### Email

**type:** `string`

**Example**: `"email@only.com"`

### Enabled

**type:** `boolean`

**Example**: `true`

### Name

**type:** `string`

**Example**: `"name"`

### OAuthConnection

**type:** `boolean`

**Example**: `true`

### Signature

**type:** `MailSignatureData`

### Autoreply

**type:** `MailAutoreplyData`

### EMailInFolder

**type:** `string`

**Example**: `"eMailInFolder"`

### QuotaError

**type:** `boolean`

**Example**: `false`

### AuthError

**type:** `boolean`

**Example**: `false`

### IsGroup

**type:** `boolean`

**Example**: `true`

### IsAlias

**type:** `boolean`

**Example**: `true`

### IsTeamlabMailbox

**type:** `boolean`

**Example**: `true`

### IsDefault

**type:** `boolean`

**Example**: `true`

### IsSharedDomainMailbox

**type:** `boolean`

**Example**: `true`

### DateCreated

**type:** `string[]`

## Response example

```json
{
  "MailboxId": 12,
  "Email": "email@only.com",
  "Enabled": true,
  "Name": "name",
  "OAuthConnection": true,
  "Signature": {
    "MailboxId": 132,
    "Html": "html",
    "IsActive": true
  },
  "Autoreply": {
    "MailboxId": 33,
    "TurnOn": true,
    "OnlyContacts": false,
    "TurnOnToDate": true,
    "FromDate": "2020-10-01T17:04:32.0000000",
    "ToDate": "2020-10-01T17:04:32.0000000",
    "Subject": "subject",
    "Html": "html"
  },
  "EMailInFolder": "eMailInFolder",
  "QuotaError": false,
  "AuthError": false,
  "IsGroup": true,
  "IsAlias": true,
  "IsTeamlabMailbox": true,
  "IsDefault": true,
  "IsSharedDomainMailbox": true,
  "DateCreated": [
    "2024-01-15T09:30:00"
  ]
}
```
