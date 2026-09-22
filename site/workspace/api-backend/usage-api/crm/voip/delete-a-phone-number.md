---
title: "Delete a phone number"
sidebar_label: "Delete a phone number"
sidebar_class_name: api-method delete
description: "Deletes a phone number with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/voip/numbers/{numberId:\w+}`

Deletes a phone number with the ID specified in the request.

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
