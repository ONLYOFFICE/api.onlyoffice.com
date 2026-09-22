---
title: "Update impersonation settings"
sidebar_label: "Update impersonation settings"
sidebar_class_name: api-method put
description: "Uppdates the impersonation settings with the parameters specified in the request."
---

**PUT** `/api/2.0/security/impersonate/settings`

Uppdates the impersonation settings with the parameters specified in the request.

## Request body

### enable

**type:** `boolean`

Specifies whether impersonation is enabled or not

**Example**: `true`

### enableType

**type:** `integer`

Specifies for whom impersonation is enabled (DisableForAdmins, EnableForAllFullAdmins, or EnableWithLimits)

**Example**: `0`

### onlyForOwnGroups

**type:** `boolean`

Specifies if impersonation is enabled only for the current user groups or not

**Example**: `true`

### allowedAdmins

**type:** `string[]`

List of admins who can be impersonated

### restrictionUsers

**type:** `string[]`

List of users who cannot be impersonated

### restrictionGroups

**type:** `string[]`

List of groups who cannot be impersonated

## Request example

```json
{
  "enable": true,
  "enableType": 0,
  "onlyForOwnGroups": true,
  "allowedAdmins": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "restrictionUsers": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "restrictionGroups": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

## Returns

Updated impersonation settings. A request that is not authenticated returns `401`.

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
