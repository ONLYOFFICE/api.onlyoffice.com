---
title: Change portal activation status
sidebar_position: 4
sidebar_label: Change portal activation status
sidebar_class_name: api-method put
description: Changes a portal activation status with a value specified in the request.
---

**PUT** `/api/portal/status`

Changes a portal activation status with a value specified in the request.

## Query parameters

### status

**type:** `string` | **required**

New portal status: `Active` (0) or `Suspended` (1).

## Request body

### portalName

**type:** `string`

Portal name.

**Example**: `"example"`

## Request example

```json
{
  "portalName": "example"
}
```

## Returns

The description of the portal with its new status. A failed request returns
[an error](../errors.md) instead.

### tenant

**type:** [`Tenant`](../objects/tenant.md)

## Response example

```json
{
  "tenant": {
    "tenantId": 1,
    "portalName": "example",
    "domain": "example.com",
    "created": "2010-07-07T15:46:00",
    "status": "Suspended",
    "ownerId": "78e1e841-8314-4846-8fc0-e7d6451b6475",
    "language": "en-US",
    "timeZoneName": "UTC"
  }
}
```
