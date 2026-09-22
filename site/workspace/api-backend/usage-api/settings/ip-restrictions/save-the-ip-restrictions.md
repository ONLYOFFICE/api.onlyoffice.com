---
title: "Save the IP restrictions"
sidebar_label: "Save the IP restrictions"
sidebar_class_name: api-method put
description: "Saves the new portal IP restrictions specified in the request."
---

**PUT** `/api/2.0/settings/iprestrictions`

Saves the new portal IP restrictions specified in the request.

## Request body

### ips

**type:** `IPRestrictionBase[]`

New IP restrictions

## Request example

```json
{
  "ips": [
    {}
  ]
}
```

## Returns

New IP restrictions. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
