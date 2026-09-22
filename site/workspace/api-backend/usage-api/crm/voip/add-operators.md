---
title: "Add operators"
sidebar_label: "Add operators"
sidebar_class_name: api-method put
description: "Adds the operators to the phone number with the ID specified in the request."
---

**PUT** `/api/2.0/crm/voip/numbers/{numberId:\w+}/oper`

Adds the operators to the phone number with the ID specified in the request.

## Request body

### numberId

**type:** `string`

Phone number ID

**Example**: `"string"`

### operators

**type:** `string[]`

Phone number operators

## Request example

```json
{
  "numberId": "string",
  "operators": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

## Returns

Added phone number operators. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
