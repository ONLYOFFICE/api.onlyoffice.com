---
title: "Save user quota limit"
sidebar_label: "Save user quota limit"
sidebar_class_name: api-method post
description: "Save user quota limit"
---

**POST** `/api/2.0/settings/userquotasettings`

Save user quota limit

## Returns

Operation result. A request that is not authenticated returns `401`.

### EnableUserQuota

**type:** `boolean`

**Example**: `true`

### DefaultUserQuota

**type:** `integer`

**Example**: `0`

### LastRecalculateDate

**type:** `string`

**Example**: `"2024-01-15T09:30:00"`

## Response example

```json
{
  "EnableUserQuota": true,
  "DefaultUserQuota": 0,
  "LastRecalculateDate": "2024-01-15T09:30:00"
}
```
