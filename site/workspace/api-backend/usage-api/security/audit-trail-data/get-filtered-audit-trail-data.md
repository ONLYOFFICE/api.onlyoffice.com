---
title: "Get filtered audit trail data"
sidebar_label: "Get filtered audit trail data"
sidebar_class_name: api-method get
description: "Returns a list of the audit events by the parameters specified in the request."
---

**GET** `/api/2.0/security/audit/events/filter`

Returns a list of the audit events by the parameters specified in the request.

## Request body

### userId

**type:** `string`

User ID

**Example**: `"string"`

### productType

**type:** `integer`

Product

**Example**: `0`

### moduleType

**type:** `integer`

Module

**Example**: `0`

### actionType

**type:** `integer`

Action type

**Example**: `0`

### action

**type:** `integer`

Action

**Example**: `0`

### entryType

**type:** `integer`

Entry

**Example**: `0`

### target

**type:** `string`

Target

**Example**: `"string"`

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
  "productType": 0,
  "moduleType": 0,
  "actionType": 0,
  "action": 0,
  "entryType": 0,
  "target": "string",
  "from": "string",
  "to": "string"
}
```

## Returns

List of filtered audit trail data. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
