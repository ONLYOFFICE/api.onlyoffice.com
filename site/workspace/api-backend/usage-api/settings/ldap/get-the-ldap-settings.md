---
title: "Get the LDAP settings"
sidebar_label: "Get the LDAP settings"
sidebar_class_name: api-method get
description: "Returns the current portal LDAP settings."
---

**GET** `/api/2.0/settings/ldap`

Returns the current portal LDAP settings.

## Returns

LDAP settings. A request that is not authenticated returns `401`.

### EnableLdapAuthentication

**type:** `boolean`

**Example**: `true`

### StartTls

**type:** `boolean`

**Example**: `true`

### Ssl

**type:** `boolean`

**Example**: `true`

### SendWelcomeEmail

**type:** `boolean`

**Example**: `true`

### Server

**type:** `string`

**Example**: `"Server"`

### UserDN

**type:** `string`

**Example**: `"UserDN"`

### PortNumber

**type:** `integer`

**Example**: `1`

### UserFilter

**type:** `string`

**Example**: `"UserFilter"`

### LoginAttribute

**type:** `string`

**Example**: `"LoginAttribute"`

### LdapMapping

**type:** `object`

### AccessRights

**type:** `object`

### FirstNameAttribute

**type:** `string`

**Example**: `"FirstNameAttribute"`

### SecondNameAttribute

**type:** `string`

**Example**: `"SecondNameAttribute"`

### MailAttribute

**type:** `string`

**Example**: `"MailAttribute"`

### TitleAttribute

**type:** `string`

**Example**: `"TitleAttribute"`

### MobilePhoneAttribute

**type:** `string`

**Example**: `"MobilePhoneAttribute"`

### LocationAttribute

**type:** `string`

**Example**: `"LocationAttribute"`

### GroupMembership

**type:** `boolean`

**Example**: `true`

### GroupDN

**type:** `string`

**Example**: `"GroupDN"`

### GroupNameAttribute

**type:** `string`

**Example**: `"GroupNameAttribute"`

### GroupFilter

**type:** `string`

**Example**: `"GroupFilter"`

### UserAttribute

**type:** `string`

**Example**: `"UserAttribute"`

### GroupAttribute

**type:** `string`

**Example**: `"GroupAttribute"`

### Authentication

**type:** `boolean`

**Example**: `true`

### Login

**type:** `string`

**Example**: `"Login"`

### Password

**type:** `string`

**Example**: `"Password"`

### PasswordBytes

**type:** `object[]`

### IsDefault

**type:** `boolean`

**Example**: `true`

### AcceptCertificate

**type:** `boolean`

**Example**: `true`

### AcceptCertificateHash

**type:** `string`

**Example**: `"AcceptCertificateHash"`

## Response example

```json
{
  "EnableLdapAuthentication": true,
  "StartTls": true,
  "Ssl": true,
  "SendWelcomeEmail": true,
  "Server": "Server",
  "UserDN": "UserDN",
  "PortNumber": 1,
  "UserFilter": "UserFilter",
  "LoginAttribute": "LoginAttribute",
  "FirstNameAttribute": "FirstNameAttribute",
  "SecondNameAttribute": "SecondNameAttribute",
  "MailAttribute": "MailAttribute",
  "TitleAttribute": "TitleAttribute",
  "MobilePhoneAttribute": "MobilePhoneAttribute",
  "LocationAttribute": "LocationAttribute",
  "GroupMembership": true,
  "GroupDN": "GroupDN",
  "GroupNameAttribute": "GroupNameAttribute",
  "GroupFilter": "GroupFilter",
  "UserAttribute": "UserAttribute",
  "GroupAttribute": "GroupAttribute",
  "Authentication": true,
  "Login": "Login",
  "Password": "Password",
  "PasswordBytes": [
    "1"
  ],
  "IsDefault": true,
  "AcceptCertificate": true,
  "AcceptCertificateHash": "AcceptCertificateHash"
}
```
