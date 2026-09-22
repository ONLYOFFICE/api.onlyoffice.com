---
title: "Update an operator"
sidebar_label: "Update an operator"
sidebar_class_name: api-method put
description: "Updates a phone number operator with the parameters specified in the request."
---

**PUT** `/api/2.0/crm/voip/opers/{operatorId}`

Updates a phone number operator with the parameters specified in the request.

## Path parameters

### operatorId

**type:** `string`

Phone number operator ID

**Example**: `"string"`

## Request body

### status

**type:** `integer[]`

New operator status

### allowOutgoingCalls

**type:** `boolean[]`

Defines if an operator allows making the outgoing calls or not

### record

**type:** `boolean[]`

Defines if an operator allows recording calls or not

### answerType

**type:** `integer[]`

New operator answer type

### redirectToNumber

**type:** `string`

New redirect phone number

**Example**: `"string"`

## Request example

```json
{
  "status": [
    0
  ],
  "allowOutgoingCalls": [
    true
  ],
  "record": [
    true
  ],
  "answerType": [
    0
  ],
  "redirectToNumber": "string"
}
```

## Returns

Updated operator. A request that is not authenticated returns `401`.
