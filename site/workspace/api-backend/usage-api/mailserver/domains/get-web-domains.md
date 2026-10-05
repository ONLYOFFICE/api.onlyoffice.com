---
title: "Get web domains"
sidebar_label: "Get web domains"
sidebar_class_name: api-method get
description: "Returns a list of all the web domains associated with the current tenant."
---

**GET** `/api/2.0/mailserver/domains/get`

Returns a list of all the web domains associated with the current tenant.

## Returns

List of web domains for the current tenant. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
