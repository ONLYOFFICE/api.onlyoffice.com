---
title: "Get audit trail mappers"
sidebar_label: "Get audit trail mappers"
sidebar_class_name: api-method get
description: "Returns the mappers for the audit trail types."
---

**GET** `/api/2.0/security/audit/mappers`

Returns the mappers for the audit trail types.

## Request body

### productType

**type:** `integer[]`

Product

### moduleType

**type:** `integer[]`

Module

## Request example

```json
{
  "productType": [
    0
  ],
  "moduleType": [
    0
  ]
}
```

## Returns

Audit trail mappers
