---
title: "Get the reassignment progress"
sidebar_label: "Get the reassignment progress"
sidebar_class_name: api-method get
description: "Returns the progress of the started data reassignment for the user with the ID specified in the request."
---

**GET** `/api/2.0/people/reassign/progress`

Returns the progress of the started data reassignment for the user with the ID specified in the request.

## Request body

### userId

**type:** `string`

User ID whose data is reassigned

**Example**: `"string"`

## Request example

```json
{
  "userId": "string"
}
```

## Returns

Reassignment progress. A request that is not authenticated returns `401`.
