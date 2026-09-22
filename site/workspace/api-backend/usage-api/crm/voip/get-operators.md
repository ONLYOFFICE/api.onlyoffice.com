---
title: "Get operators"
sidebar_label: "Get operators"
sidebar_class_name: api-method get
description: "Returns the operators of the phone number with the ID specified in the request."
---

**GET** `/api/2.0/crm/voip/numbers/{numberId:\w+}/oper`

Returns the operators of the phone number with the ID specified in the request.

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

Phone number operators. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
