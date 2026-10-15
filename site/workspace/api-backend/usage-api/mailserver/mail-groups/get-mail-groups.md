---
title: "Get mail groups"
sidebar_label: "Get mail groups"
sidebar_class_name: api-method get
description: "Returns a list of mail groups associated with the tenant."
---

**GET** `/api/2.0/mailserver/groupaddress/get`

Returns a list of mail groups associated with the tenant.

## Returns

List of mail group data for the current tenant. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 1234,
    "Address": {
      "Id": 1234,
      "DomainId": 1234,
      "Email": "Email@only.com"
    },
    "Addresses": [
      {
        "Id": 1234,
        "DomainId": 1234,
        "Email": "Email@only.com"
      }
    ]
  }
]
```
