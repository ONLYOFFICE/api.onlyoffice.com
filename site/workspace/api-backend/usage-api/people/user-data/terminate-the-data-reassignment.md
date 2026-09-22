---
title: "Terminate the data reassignment"
sidebar_label: "Terminate the data reassignment"
sidebar_class_name: api-method put
description: "Terminates the data reassignment for the user with the ID specified in the request."
---

**PUT** `/api/2.0/people/reassign/terminate`

Terminates the data reassignment for the user with the ID specified in the request.

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
