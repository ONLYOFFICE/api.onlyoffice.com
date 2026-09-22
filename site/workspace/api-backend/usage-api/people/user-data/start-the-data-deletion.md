---
title: "Start the data deletion"
sidebar_label: "Start the data deletion"
sidebar_class_name: api-method post
description: "Starts the data deletion for the user with the ID specified in the request."
---

**POST** `/api/2.0/people/remove/start`

Starts the data deletion for the user with the ID specified in the request.

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
