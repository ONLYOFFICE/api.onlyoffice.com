---
title: "Get user accounts"
sidebar_label: "Get user accounts"
sidebar_class_name: api-method get
description: "Returns a list of all the user mailboxes, aliases, and groups."
---

**GET** `/api/2.0/mail/accounts`

Returns a list of all the user mailboxes, aliases, and groups.

## Request body

### username

**type:** `string`

User name

**Example**: `"string"`

## Request example

```json
{
  "username": "string"
}
```

## Returns

List of user mailboxes, aliases and groups. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
