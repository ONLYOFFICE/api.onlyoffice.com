---
title: "Buy a phone number"
sidebar_label: "Buy a phone number"
sidebar_class_name: api-method post
description: "Buys a phone number specified in the request."
---

**POST** `/api/2.0/crm/voip/numbers`

Buys a phone number specified in the request.

## Request body

### number

**type:** `string`

Phone number

**Example**: `"string"`

## Request example

```json
{
  "number": "string"
}
```

## Returns

Phone number. A request that is not authenticated returns `401`.
