---
title: "Get or create free DNS records"
sidebar_label: "Get or create free DNS records"
sidebar_class_name: api-method get
description: "Returns or generates free DNS records."
---

**GET** `/api/2.0/mailserver/freedns/get`

Returns or generates free DNS records.

## Returns

DNS records for the current tenant and user. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `1234`

### MxRecord

**type:** `ServerDomainMxRecordData`

### SpfRecord

**type:** `ServerDomainDnsRecordData`

### DkimRecord

**type:** `ServerDomainDkimRecordData`

### DomainCheckRecord

**type:** `ServerDomainDnsRecordData`

### IsVerified

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "Id": 1234,
  "MxRecord": {
    "Host": "Host",
    "Priority": 1234,
    "IsVerified": true
  },
  "SpfRecord": {
    "Name": "name",
    "Value": "value",
    "IsVerified": true
  },
  "DkimRecord": {
    "Selector": "Selector",
    "PublicKey": "PublicKey",
    "IsVerified": true
  },
  "DomainCheckRecord": {
    "Name": "name",
    "Value": "value",
    "IsVerified": true
  },
  "IsVerified": true
}
```
