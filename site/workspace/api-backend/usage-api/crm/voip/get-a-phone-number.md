---
title: "Get a phone number"
sidebar_label: "Get a phone number"
sidebar_class_name: api-method get
description: "Returns a phone number with the ID specified in the request."
---

**GET** `/api/2.0/crm/voip/numbers/{numberId:\w+}`

Returns a phone number with the ID specified in the request.

## Request body

### numberId

**type:** `string`

Phone number ID

**Example**: `"string"`

## Request example

```json
{
  "numberId": "string"
}
```

## Returns

Phone number. A request that is not authenticated returns `401`.
