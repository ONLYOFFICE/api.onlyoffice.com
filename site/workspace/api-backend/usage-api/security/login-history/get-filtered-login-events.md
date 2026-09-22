---
title: "Get filtered login events"
sidebar_label: "Get filtered login events"
sidebar_class_name: api-method get
description: "Returns a list of the login events by the parameters specified in the request."
---

**GET** `/api/2.0/security/audit/login/filter`

Returns a list of the login events by the parameters specified in the request.

## Request body

### userId

**type:** `string`

User ID

**Example**: `"string"`

### action

**type:** `integer`

Action

**Example**: `0`

### from

**type:** `string`

Start date

**Example**: `"string"`

### to

**type:** `string`

End date

**Example**: `"string"`

## Request example

```json
{
  "userId": "string",
  "action": 0,
  "from": "string",
  "to": "string"
}
```

## Returns

List of filtered login events. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
