---
title: "Test the LDAP synchronization"
sidebar_label: "Test the LDAP synchronization"
sidebar_class_name: api-method get
description: "Starts the process of collecting preliminary changes on the portal during the synchronization process according to the selected LDAP settings."
---

**GET** `/api/2.0/settings/ldap/sync/test`

Starts the process of collecting preliminary changes on the portal during the synchronization process according to the selected LDAP settings.

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
