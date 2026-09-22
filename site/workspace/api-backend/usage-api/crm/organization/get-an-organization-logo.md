---
title: "Get an organization logo"
sidebar_label: "Get an organization logo"
sidebar_class_name: api-method get
description: "Returns an organization logo with the ID specified in the request in the base64 format."
---

**GET** `/api/2.0/crm/settings/organisation/logo`

Returns an organization logo with the ID specified in the request in the base64 format.

## Request body

### id

**type:** `integer`

Organization logo ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

Organization logo in the base64 format. A request that is not authenticated returns `401`.
