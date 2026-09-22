---
title: Delete a portal
sidebar_position: 3
sidebar_label: Delete a portal
sidebar_class_name: api-method delete
description: Deletes a portal with a name specified in the request.
---

**DELETE** `/api/portal/remove`

Deletes a portal with a name specified in the request.

## Query parameters

### portalName

**type:** `string` | **required**

Portal name.

**Example**: `"example"`

## Returns

The description of the deleted portal. A failed request returns [an error](../errors.md)
instead.

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
    "status": "Active",
    "ownerId": "78e1e841-8314-4846-8fc0-e7d6451b6475",
    "language": "en-US",
    "timeZoneName": "UTC"
  }
}
```
