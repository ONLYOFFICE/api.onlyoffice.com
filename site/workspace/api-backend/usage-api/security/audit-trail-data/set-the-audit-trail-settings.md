---
title: "Set the audit trail settings"
sidebar_label: "Set the audit trail settings"
sidebar_class_name: api-method post
description: "Sets the audit trail settings for the current portal."
---

**POST** `/api/2.0/security/audit/settings/lifetime`

Sets the audit trail settings for the current portal.

## Request body

### settings

**type:** `object`

Audit trail settings

## Request example

```json
{}
```

## Returns

Audit trail settings. A request that is not authenticated returns `401`.

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
