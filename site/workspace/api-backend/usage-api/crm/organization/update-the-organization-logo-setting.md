---
title: "Update the organization logo setting"
sidebar_label: "Update the organization logo setting"
sidebar_class_name: api-method put
description: "Updates the organization logo setting with the parameter specified in the request."
---

**PUT** `/api/2.0/crm/settings/organisation/logo`

Updates the organization logo setting with the parameter specified in the request.

## Request body

### reset

**type:** `boolean`

Resets the organization logo or not

**Example**: `true`

## Request example

```json
{
  "reset": true
}
```

## Returns

Organization logo ID. A request that is not authenticated returns `401`.
