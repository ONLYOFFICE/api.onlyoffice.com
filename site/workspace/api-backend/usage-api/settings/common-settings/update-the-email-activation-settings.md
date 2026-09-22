---
title: "Update the email activation settings"
sidebar_label: "Update the email activation settings"
sidebar_class_name: api-method put
description: "Updates the email activation settings."
---

**PUT** `/api/2.0/settings/emailactivation`

Updates the email activation settings.

## Request body

### show

**type:** `boolean`

Specifies whether to show the email activation panel to the user or not

**Example**: `true`

## Request example

```json
{
  "show": true
}
```

## Returns

Updated email activation settings. A request that is not authenticated returns `401`.

### Show

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "Show": true
}
```
