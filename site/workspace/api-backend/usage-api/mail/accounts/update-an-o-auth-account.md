---
title: "Update an OAuth account"
sidebar_label: "Update an OAuth account"
sidebar_class_name: api-method put
description: "Updates a mail account with OAuth (only Google OAuth is supported)."
---

**PUT** `/api/2.0/mail/accounts/oauth`

Updates a mail account with OAuth (only Google OAuth is supported).

## Request body

### code

**type:** `string`

New OAuth code

**Example**: `"string"`

### type

**type:** `object`

New OAuth service type: 0 - Unknown, 1 - Google

### mailboxId

**type:** `integer`

Mailbox ID

**Example**: `0`

## Request example

```json
{
  "code": "string",
  "type": {},
  "mailboxId": 0
}
```

## Returns

Updated OAuth account. A request that is not authenticated returns `401`.

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
