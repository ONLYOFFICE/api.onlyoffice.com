---
title: "Save the LDAP settings"
sidebar_label: "Save the LDAP settings"
sidebar_class_name: api-method post
description: "Saves the LDAP settings specified in the request and starts importing/synchronizing users and groups by LDAP."
---

**POST** `/api/2.0/settings/ldap`

Saves the LDAP settings specified in the request and starts importing/synchronizing users and groups by LDAP.

## Request body

### settings

**type:** `string`

LDAP settings in the serialized string format

**Example**: `"string"`

### acceptCertificate

**type:** `boolean`

Specifies if a certificate will be accepted (true) or not (false)

**Example**: `true`

## Request example

```json
{
  "settings": "string",
  "acceptCertificate": true
}
```

## Returns

Operation status. A request that is not authenticated returns `401`.

### Completed

**type:** `boolean`

**Example**: `true`

### Id

**type:** `string`

**Example**: `"true"`

### Status

**type:** `string`

**Example**: `"true"`

### Error

**type:** `string`

**Example**: `"true"`

### Warning

**type:** `string`

**Example**: `"true"`

### Percents

**type:** `integer`

**Example**: `"true"`

### CertificateConfirmRequest

**type:** `LdapCertificateConfirmRequest`

### Source

**type:** `string`

**Example**: `"Source"`

### OperationType

**type:** `string`

**Example**: `"OperationType"`

## Response example

```json
{
  "Completed": true,
  "Id": "true",
  "Status": "true",
  "Error": "true",
  "Warning": "true",
  "Percents": "true",
  "CertificateConfirmRequest": {
    "Approved": true,
    "Requested": true,
    "SerialNumber": "SerialNumber",
    "IssuerName": "IssuerName",
    "SubjectName": "SubjectName",
    "ValidFrom": "2019-07-26T00:00:00",
    "ValidUntil": "2019-07-26T00:00:00",
    "Hash": "Hash",
    "CertificateErrors": [
      1
    ]
  },
  "Source": "Source",
  "OperationType": "OperationType"
}
```
