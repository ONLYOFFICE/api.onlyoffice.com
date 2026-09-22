---
title: "Set a tag to the messages"
sidebar_label: "Set a tag to the messages"
sidebar_class_name: api-method put
description: "Adds a tag with the ID specified in the request to the messages."
---

**PUT** `/api/2.0/mail/tags/{id}/set`

Adds a tag with the ID specified in the request to the messages.

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

Added mail tag ID. A request that is not authenticated returns `401`.
