---
title: "Change the default access rights"
sidebar_label: "Change the default access rights"
sidebar_class_name: api-method put
description: "Changes the default access rights in the sharing settings."
---

**PUT** `/api/2.0/files/settings/dafaultaccessrights`

Changes the default access rights in the sharing settings.

## Request body

### value

**type:** `integer[]`

Default access rights

## Request example

```json
{
  "value": [
    0
  ]
}
```

## Returns

Default access rights. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
