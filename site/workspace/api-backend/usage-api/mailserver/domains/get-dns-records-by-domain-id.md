---
title: "Get DNS records by domain ID"
sidebar_label: "Get DNS records by domain ID"
sidebar_class_name: api-method get
description: "Returns DNS records related to the domain with the ID specified in the request."
---

**GET** `/api/2.0/mailserver/domains/dns/get`

Returns DNS records related to the domain with the ID specified in the request.

## Request body

### id

**type:** `integer`

Domain ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

DNS records associated with the domain. A request that is not authenticated returns `401`.

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
