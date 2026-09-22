---
title: "Get the document service URL"
sidebar_label: "Get the document service URL"
sidebar_class_name: api-method get
description: "Returns the address of the connected editors."
---

**GET** `/api/2.0/files/docservice`

Returns the address of the connected editors.

## Request body

### version

**type:** `boolean`

Specifies the editor version or not

**Example**: `true`

## Request example

```json
{
  "version": true
}
```

## Returns

Address. A request that is not authenticated returns `401`.
