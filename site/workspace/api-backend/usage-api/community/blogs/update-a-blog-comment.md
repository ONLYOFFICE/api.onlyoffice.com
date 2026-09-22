---
title: "Update a blog comment"
sidebar_label: "Update a blog comment"
sidebar_class_name: api-method put
description: "Updates a blog comment specified in the request changing its content."
---

**PUT** `/api/2.0/community/blog/comment/{commentid}`

Updates a blog comment specified in the request changing its content.

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

Updated blog comment. A request that is not authenticated returns `401`.
