---
title: "Set tenant quota settings"
sidebar_label: "Set tenant quota settings"
sidebar_class_name: api-method put
description: "Set tenant quota settings"
---

**PUT** `/api/2.0/settings/tenantquotasettings`

Set tenant quota settings

## Returns

Operation result. A request that is not authenticated returns `401`.

### DisableQuota

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "DisableQuota": true
}
```
