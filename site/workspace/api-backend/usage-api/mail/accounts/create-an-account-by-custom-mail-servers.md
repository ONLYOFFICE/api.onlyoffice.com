---
title: "Create an account by custom mail servers"
sidebar_label: "Create an account by custom mail servers"
sidebar_class_name: api-method post
description: "Creates an account using full information about mail servers specified in the request."
---

**POST** `/api/2.0/mail/accounts`

Creates an account using full information about mail servers specified in the request.

## Request body

### name

**type:** `string`

Account name

**Example**: `"string"`

### email

**type:** `string`

Account email address in the name@domain format

**Example**: `"string"`

### account

**type:** `string`

IMAP or POP server login

**Example**: `"string"`

### password

**type:** `string`

IMAP or POP server password

**Example**: `"string"`

### port

**type:** `integer`

IMAP or POP server port

**Example**: `0`

### server

**type:** `string`

IMAP or POP server address or IP

**Example**: `"string"`

### smtp_account

**type:** `string`

SMTP server login

**Example**: `"string"`

### smtp_password

**type:** `string`

SMTP server password

**Example**: `"string"`

### smtp_port

**type:** `integer`

SMTP server port

**Example**: `0`

### smtp_server

**type:** `string`

SMTP server address or IP

**Example**: `"string"`

### smtp_auth

**type:** `boolean`

Specifies if the authentication is needed for the SMTP server or not

**Example**: `true`

### imap

**type:** `boolean`

Specifies if the IMAP server is used for incoming mails or not

**Example**: `true`

### restrict

**type:** `boolean`

Specifies if all the mails should be downloaded from the account (false) or not (true). If true, then messages for the last 30 days only will be imported

**Example**: `true`

### incoming_encryption_type

**type:** `integer`

Encryption type for the IMAP or POP server: 0 - None, 1 - SSL, 2 - StartTLS

**Example**: `0`

### outcoming_encryption_type

**type:** `integer`

Encryption type for the SMTP server: 0 - None, 1 - SSL, 2 - StartTLS

**Example**: `0`

### auth_type_in

**type:** `integer`

Authentication type for the IMAP or POP server: 0 - None, 1 - Login, 4 - CramMd5, 5 - OAuth2

**Example**: `0`

### auth_type_smtp

**type:** `integer`

Authentication type for the SMTP server: 0 - None, 1 - Login, 4 - CramMd5, 5 - OAuth2

**Example**: `0`

## Request example

```json
{
  "name": "string",
  "email": "string",
  "account": "string",
  "password": "string",
  "port": 0,
  "server": "string",
  "smtp_account": "string",
  "smtp_password": "string",
  "smtp_port": 0,
  "smtp_server": "string",
  "smtp_auth": true,
  "imap": true,
  "restrict": true,
  "incoming_encryption_type": 0,
  "outcoming_encryption_type": 0,
  "auth_type_in": 0,
  "auth_type_smtp": 0
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
