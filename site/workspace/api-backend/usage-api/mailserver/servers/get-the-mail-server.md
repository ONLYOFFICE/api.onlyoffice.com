---
title: "Get the mail server"
sidebar_label: "Get the mail server"
sidebar_class_name: api-method get
description: "Returns the mail server associated with the current tenant."
---

**GET** `/api/2.0/mailserver/server`

Returns the mail server associated with the current tenant.

## Returns

Mail server data for the current tenant. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `1234`

### Dns

**type:** `ServerDomainDnsData`

### ServerLimits

**type:** `ServerLimitData`

### InServer

**type:** `MailboxServer`

### OutServer

**type:** `MailboxServer`

## Response example

```json
{
  "Id": 1234,
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
  },
  "ServerLimits": {
    "MailboxMaxCountPerUser": 5
  }
}
```
