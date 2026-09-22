---
title: "Get common web domain"
sidebar_label: "Get common web domain"
sidebar_class_name: api-method get
description: "Returns the common web domain."
---

**GET** `/api/2.0/mailserver/domains/common`

Returns the common web domain.

## Returns

Common web domain. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `"id"`

### IsSharedDomain

**type:** `boolean`

**Example**: `true`

### Name

**type:** `string`

**Example**: `"Name"`

### Dns

**type:** `ServerDomainDnsData`

## Response example

```json
{
  "Id": "id",
  "IsSharedDomain": true,
  "Name": "Name",
  "Dns": {
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
}
```
