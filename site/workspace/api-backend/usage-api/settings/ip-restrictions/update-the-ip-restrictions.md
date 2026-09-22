---
title: "Update the IP restrictions"
sidebar_label: "Update the IP restrictions"
sidebar_class_name: api-method put
description: "Updates the IP restriction settings with a parameter specified in the request."
---

**PUT** `/api/2.0/settings/iprestrictions/settings`

Updates the IP restriction settings with a parameter specified in the request.

## Request body

### enable

**type:** `boolean`

Specifies whether to enable IP restrictions or not

**Example**: `true`

## Request example

```json
{
  "enable": true
}
```

## Returns

Updated IP restriction settings. A request that is not authenticated returns `401`.

### Enable

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "Enable": true
}
```
