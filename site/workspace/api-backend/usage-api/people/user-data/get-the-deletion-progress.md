---
title: "Get the deletion progress"
sidebar_label: "Get the deletion progress"
sidebar_class_name: api-method get
description: "Returns the progress of the started data deletion for the user with the ID specified in the request."
---

**GET** `/api/2.0/people/remove/progress`

Returns the progress of the started data deletion for the user with the ID specified in the request.

## Request body

### userId

**type:** `string`

User ID

**Example**: `"string"`

## Request example

```json
{
  "userId": "string"
}
```

## Returns

Deletion progress. A request that is not authenticated returns `401`.
