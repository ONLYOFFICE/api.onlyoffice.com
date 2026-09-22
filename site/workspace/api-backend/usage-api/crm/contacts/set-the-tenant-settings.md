---
title: "Set the tenant settings"
sidebar_label: "Set the tenant settings"
sidebar_class_name: api-method put
description: "Sets the tenant settings specified in the request to the portal."
---

**PUT** `/api/2.0/crm/settings`

Sets the tenant settings specified in the request to the portal.

## Request body

### configured

**type:** `boolean[]`

Defines if the portal is configured or not

### webFormKey

**type:** `string[]`

Website contact form key

## Request example

```json
{
  "configured": [
    true
  ],
  "webFormKey": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

## Returns

The tenant setting for the portal configuration value (true or false). A request that is not authenticated returns `401`.
