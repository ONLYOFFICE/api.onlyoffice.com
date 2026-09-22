---
title: List portals
sidebar_position: 1
sidebar_label: List portals
sidebar_class_name: api-method get
description: Returns a list of all the portals registered for the user with the email address specified in the request.
---

**GET** `/api/portal/get`

Returns a list of all the portals registered for the user with the email address specified in
the request.

## Query parameters

### email

**type:** `string` | **required**

Portal owner email address.

**Example**: `"test@example.com"`

## Returns

The descriptions of the portals registered for that email address. A failed request returns
[an error](../errors.md) instead.

### tenants

**type:** [`Tenant`](../objects/tenant.md)[]

## Response example

```json
{
  "tenants": [
    {
      "tenantId": 1,
      "portalName": "example",
      "domain": "example.com",
      "created": "2010-07-07T15:46:00",
      "status": "Active",
      "ownerId": "78e1e841-8314-4846-8fc0-e7d6451b6475",
      "language": "en-US",
      "timeZoneName": "UTC"
    },
    {
      "tenantId": 2,
      "portalName": "example2",
      "domain": "example2.com",
      "created": "2014-02-07T20:14:00",
      "status": "Active",
      "ownerId": "be7bc931-b966-493e-a8b5-56fc7d21f9c8",
      "language": "de-DE",
      "timeZoneName": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    }
  ]
}
```
