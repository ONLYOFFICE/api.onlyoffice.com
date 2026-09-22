---
title: Get tariff
sidebar_position: 1
sidebar_label: Get tariff
sidebar_class_name: api-method get
description: Returns a pricing plan of a portal with a name specified in the request.
---

**GET** `/api/tariff/get`

Returns a pricing plan of a portal with a name specified in the request.

## Query parameters

### portalName

**type:** `string` | **required**

Portal name.

**Example**: `"example"`

## Returns

The description of the portal and the portal pricing plan. A failed request returns
[an error](../errors.md) instead.

### tariff

**type:** [`Tariff`](../objects/tariff.md)

The portal pricing plan.

### tenant

**type:** [`Tenant`](../objects/tenant.md)

The portal description.

## Response example

```json
{
  "tariff": {
    "activeUsers": 50,
    "dueDate": "2016-07-13",
    "features": "whitelabel",
    "maxFileSize": 104857600,
    "maxTotalSize": 1073741824
  },
  "tenant": {
    "tenantId": 1,
    "portalName": "example",
    "domain": "example.com",
    "created": "2010-07-07T15:46:00",
    "status": "Active",
    "ownerId": "78e1e841-8314-4846-8fc0-e7d6451b6475",
    "language": "en-US",
    "timeZoneName": "UTC"
  }
}
```
