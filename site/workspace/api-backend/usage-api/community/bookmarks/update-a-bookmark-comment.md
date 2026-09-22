---
title: "Update a bookmark comment"
sidebar_label: "Update a bookmark comment"
sidebar_class_name: api-method put
description: "Updates the selected bookmark comment with the content specified in the request."
---

**PUT** `/api/2.0/community/bookmark/comment/{commentid}`

Updates the selected bookmark comment with the content specified in the request.

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

Updated bookmark. A request that is not authenticated returns `401`.
