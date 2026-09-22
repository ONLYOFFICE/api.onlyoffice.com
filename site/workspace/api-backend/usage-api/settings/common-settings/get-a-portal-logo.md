---
title: "Get a portal logo"
sidebar_label: "Get a portal logo"
sidebar_class_name: api-method get
description: "Returns the portal logo image URL."
---

**GET** `/api/2.0/settings/logo`

Returns the portal logo image URL.

## Request body

### dark

**type:** `boolean`

Specifies if the portal logo will be used for the dark theme or not

**Example**: `true`

## Request example

```json
{
  "dark": true
}
```

## Returns

Portal logo image URL. A request that is not authenticated returns `401`.
