---
title: "Start the data reassignment"
sidebar_label: "Start the data reassignment"
sidebar_class_name: api-method post
description: "Starts the data reassignment for the user with the ID specified in the request."
---

**POST** `/api/2.0/people/reassign/start`

Starts the data reassignment for the user with the ID specified in the request.

## Request body

### fromUserId

**type:** `string`

User ID whose data will be reassigned to another user

**Example**: `"string"`

### toUserId

**type:** `string`

User ID to whom all the data will be reassigned

**Example**: `"string"`

### deleteProfile

**type:** `boolean`

Specifies whether to delete a profile when the data reassignment will be finished or not

**Example**: `true`

## Request example

```json
{
  "fromUserId": "string",
  "toUserId": "string",
  "deleteProfile": true
}
```

## Returns

Reassignment progress. A request that is not authenticated returns `401`.
