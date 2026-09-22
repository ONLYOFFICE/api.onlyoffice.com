---
title: "Update a comment"
sidebar_label: "Update a comment"
sidebar_class_name: api-method put
description: "Updates the selected event comment with the content specified in the request."
---

**PUT** `/api/2.0/community/event/comment/{commentid}`

Updates the selected event comment with the content specified in the request.

## Path parameters

### commentid

**type:** `string`

Comment ID

**Example**: `"string"`

## Request body

### content

**type:** `string`

New comment text

**Example**: `"string"`

## Request example

```json
{
  "content": "string"
}
```

## Returns

Updated comment. A request that is not authenticated returns `401`.
