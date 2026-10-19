---
title: "Get third-party services"
sidebar_label: "Get third-party services"
sidebar_class_name: api-method get
description: "Returns a list of all the connected third-party services."
---

**GET** `/api/2.0/files/thirdparty`

Returns a list of all the connected third-party services.

## Returns

Connected providers. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "AuthData": {
      "Login": "login",
      "Password": "password",
      "Token": "token",
      "Url": "url"
    },
    "Corporate": false,
    "CustomerTitle": "customer_title",
    "ProviderId": "provider_id",
    "ProviderKey": "provider_key"
  }
]
```
