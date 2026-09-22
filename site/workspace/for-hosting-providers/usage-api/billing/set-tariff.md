---
title: Set tariff
sidebar_position: 2
sidebar_label: Set tariff
sidebar_class_name: api-method put
description: Changes the portal pricing plan with the parameters specified in the request.
---

**PUT** `/api/tariff/set`

Changes the portal pricing plan with the parameters specified in the request.

## Request body

### portalName

**type:** `string` | **required**

Portal name.

**Example**: `"example"`

### activeUsers

**type:** `integer`

Number of active users.

**Example**: `50`

### dueDate

**type:** `string`

End date of the portal pricing plan.

**Example**: `"2016-07-13"`

### features

**type:** `string`

List of available features.

**Example**: `"whitelabel"`

### maxFileSize

**type:** `number`

Maximum size of a single uploaded file, in bytes. The default is 26214400 (25 megabytes).

**Example**: `104857600`

### maxTotalSize

**type:** `number`

Maximum size of the portal disk space, in bytes. Unlimited by default.

**Example**: `1073741824`

:::note
The value sent in `maxFileSize` and `maxTotalSize` is converted into megabytes and stored that
way. Avoid values that are not a multiple of 1048576 (1 megabyte), as they are truncated to the
integer resulting from the division by 1048576, and values below 1048576 bytes, which are stored
and returned as zero — both here and in [Get tariff](./get-tariff.md#tariff).
:::

## Request example

```json
{
  "activeUsers": 50,
  "dueDate": "2016-07-13",
  "features": "whitelabel",
  "maxFileSize": 104857600,
  "maxTotalSize": 1073741824,
  "portalName": "example"
}
```

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
