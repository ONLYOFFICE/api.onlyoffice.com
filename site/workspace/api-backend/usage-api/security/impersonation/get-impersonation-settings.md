---
title: "Get impersonation settings"
sidebar_label: "Get impersonation settings"
sidebar_class_name: api-method get
description: "Returns the impersonation settings for the current portal."
---

**GET** `/api/2.0/security/impersonate/settings`

Returns the impersonation settings for the current portal.

## Returns

Impersonation settings. A request that is not authenticated returns `401`.

### Enabled

**type:** `boolean`

**Example**: `true`

### EnableType

**type:** `"DisableForAdmins" | "EnableForAllFullAdmins" | "EnableWithLimits"`

[0 - DisableForAdmins, 1 - EnableForAllFullAdmins, 2 - EnableWithLimits]

**Example**: `"DisableForAdmins"`

### OnlyForOwnGroups

**type:** `boolean`

**Example**: `true`

### AllowedAdmins

**type:** `string[]`

### RestrictionUsers

**type:** `string[]`

### RestrictionGroups

**type:** `string[]`

## Response example

```json
{
  "Enabled": true,
  "EnableType": "DisableForAdmins",
  "OnlyForOwnGroups": true,
  "AllowedAdmins": [
    "string"
  ],
  "RestrictionUsers": [
    "string"
  ],
  "RestrictionGroups": [
    "string"
  ]
}
```
