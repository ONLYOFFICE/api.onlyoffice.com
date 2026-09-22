---
title: "Add a tag to the conversations"
sidebar_label: "Add a tag to the conversations"
sidebar_class_name: api-method put
description: "Adds a tag specified in the request to the selected conversations."
---

**PUT** `/api/2.0/mail/conversations/tag/{tag_id}/set`

Adds a tag specified in the request to the selected conversations.

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
