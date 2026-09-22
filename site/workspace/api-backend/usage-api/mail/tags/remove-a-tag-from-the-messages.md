---
title: "Remove a tag from the messages"
sidebar_label: "Remove a tag from the messages"
sidebar_class_name: api-method put
description: "Removes a tag with the ID specified in the request from the messages."
---

**PUT** `/api/2.0/mail/tags/{id}/unset`

Removes a tag with the ID specified in the request from the messages.

## Path parameters

### id

**type:** `integer`

Tag ID

**Example**: `0`

## Request body

### messages

**type:** `integer[]`

List of message IDs

## Request example

```json
{
  "messages": [
    0
  ]
}
```

## Returns

Removed mail tag ID. A request that is not authenticated returns `401`.
