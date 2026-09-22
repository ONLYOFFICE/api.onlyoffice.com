---
title: "Update the tip settings"
sidebar_label: "Update the tip settings"
sidebar_class_name: api-method put
description: "Updates the tip settings with a parameter specified in the request."
---

**PUT** `/api/2.0/settings/tips`

Updates the tip settings with a parameter specified in the request.

## Request body

### show

**type:** `boolean`

Specifies whether to show tips for the user or not

**Example**: `true`

## Request example

```json
{
  "show": true
}
```

## Returns

Updated tip settings. A request that is not authenticated returns `401`.

### Show

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "Show": true
}
```
