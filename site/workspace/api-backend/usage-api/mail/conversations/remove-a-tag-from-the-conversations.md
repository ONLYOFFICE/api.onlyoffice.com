---
title: "Remove a tag from the conversations"
sidebar_label: "Remove a tag from the conversations"
sidebar_class_name: api-method put
description: "Removes a tag specified in the request from the conversations."
---

**PUT** `/api/2.0/mail/conversations/tag/{tag_id}/unset`

Removes a tag specified in the request from the conversations.

## Path parameters

### tag_id

**type:** `integer`

Tag ID

**Example**: `0`

## Request body

### messages

**type:** `integer[]`

List of conversation IDs

## Request example

```json
{
  "messages": [
    0
  ]
}
```

## Returns

Tag ID. A request that is not authenticated returns `401`.
