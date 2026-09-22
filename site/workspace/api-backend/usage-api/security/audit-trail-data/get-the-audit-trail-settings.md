---
title: "Get the audit trail settings"
sidebar_label: "Get the audit trail settings"
sidebar_class_name: api-method get
description: "Returns the audit trail settings."
---

**GET** `/api/2.0/security/audit/settings/lifetime`

Returns the audit trail settings.

## Returns

Audit settings. A request that is not authenticated returns `401`.

### LoginHistoryLifeTime

**type:** `integer`

**Example**: `0`

### AuditTrailLifeTime

**type:** `integer`

**Example**: `0`

## Response example

```json
{
  "LoginHistoryLifeTime": 0,
  "AuditTrailLifeTime": 0
}
```
