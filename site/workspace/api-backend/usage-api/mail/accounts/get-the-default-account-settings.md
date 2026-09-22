---
title: "Get the default account settings"
sidebar_label: "Get the default account settings"
sidebar_class_name: api-method get
description: "Returns the default settings for an account with the email address specified in the request."
---

**GET** `/api/2.0/mail/accounts/setups`

Returns the default settings for an account with the email address specified in the request.

## Request body

### email

**type:** `string`

Account email address

**Example**: `"string"`

### action

**type:** `string`

The default settings type:
            "get_imap_pop_settings" - get the IMAP or POP settings (IMAP settings are prior),
            "get_imap_server" | "get_imap_server_full" - get the IMAP server settings,
            "get_pop_server" | "get_pop_server_full" - get the POP server settings.
            The default IMAP settings are returned by default.

**Example**: `"string"`

## Request example

```json
{
  "email": "string",
  "action": "string"
}
```

## Returns

Account with default settings. A request that is not authenticated returns `401`.

### MailBoxId

**type:** `integer`

**Example**: `1`

### EMailView

**type:** `string`

**Example**: `"email.only.com"`

### Name

**type:** `string`

**Example**: `"name"`

### Account

**type:** `string`

**Example**: `"account"`

### Password

**type:** `string`

**Example**: `"password"`

### Server

**type:** `string`

**Example**: `"server"`

### SmtpServer

**type:** `string`

**Example**: `"smtp_server"`

### SmtpPortStr

**type:** `string`

**Example**: `"smtp_port"`

### SmtpAccount

**type:** `string`

**Example**: `"smtp_account"`

### SmtpPassword

**type:** `string`

**Example**: `"smtp_password"`

### SmtpAuth

**type:** `boolean`

**Example**: `"smtp_auth"`

### PortStr

**type:** `string`

**Example**: `"port"`

### Encryption

**type:** `"None" | "SSL" | "StartTLS"`

[0 - None, 1 - SSL, 2 - StartTLS]

**Example**: `1`

### SmtpEncryption

**type:** `"None" | "SSL" | "StartTLS"`

[0 - None, 1 - SSL, 2 - StartTLS]

**Example**: `2`

### Authentication

**type:** `"None" | "Login" | "CramMd5" | "OAuth2" | "Ntlm"`

[0 - None, 1 - Login, 4 - CramMd5, 5 - OAuth2, 7 - Ntlm]

**Example**: `2`

### SmtpAuthentication

**type:** `"None" | "Login" | "CramMd5" | "OAuth2" | "Ntlm"`

[0 - None, 1 - Login, 4 - CramMd5, 5 - OAuth2, 7 - Ntlm]

**Example**: `2`

### Imap

**type:** `boolean`

**Example**: `true`

### BeginDate

**type:** `string`

**Example**: `"2020-10-01T17:04:32.0000000"`

### IsOAuth

**type:** `boolean`

**Example**: `true`

### Restrict

**type:** `boolean`

**Example**: `true`

### EMailInFolder

**type:** `string`

**Example**: `"email_in_folder"`

### IsTeamlab

**type:** `boolean`

**Example**: `"is_teamlab"`

## Response example

```json
{
  "MailBoxId": 1,
  "EMailView": "email.only.com",
  "Name": "name",
  "Account": "account",
  "Password": "password",
  "Server": "server",
  "SmtpServer": "smtp_server",
  "SmtpPortStr": "smtp_port",
  "SmtpAccount": "smtp_account",
  "SmtpPassword": "smtp_password",
  "SmtpAuth": "smtp_auth",
  "PortStr": "port",
  "Encryption": 1,
  "SmtpEncryption": 2,
  "Authentication": 2,
  "SmtpAuthentication": 2,
  "Imap": true,
  "BeginDate": "2020-10-01T17:04:32.0000000",
  "IsOAuth": true,
  "Restrict": true,
  "EMailInFolder": "email_in_folder",
  "IsTeamlab": "is_teamlab"
}
```
