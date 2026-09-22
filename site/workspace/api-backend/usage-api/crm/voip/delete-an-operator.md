---
title: "Delete an operator"
sidebar_label: "Delete an operator"
sidebar_class_name: api-method delete
description: "Deletes an operator from the phone number with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/voip/numbers/{numberId:\w+}/oper`

Deletes an operator from the phone number with the ID specified in the request.

## Request body

### numberId

**type:** `string`

Phone number ID

**Example**: `"string"`

### oper

**type:** `string`

Phone number operator GUID

**Example**: `"string"`

## Request example

```json
{
  "numberId": "string",
  "oper": "string"
}
```

## Returns

Phone number operator. A request that is not authenticated returns `401`.
