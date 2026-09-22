---
title: "Set a message status"
sidebar_label: "Set a message status"
sidebar_class_name: api-method put
description: "Sets a status to the messages with the IDs specified in the request."
---

**PUT** `/api/2.0/mail/messages/mark`

Sets a status to the messages with the IDs specified in the request.

## Request body

### ids

**type:** `integer[]`

List of message IDs

### status

**type:** `string`

Message status: "read", "unread", "important", or "normal"

**Example**: `"string"`

## Request example

```json
{
  "ids": [
    0
  ],
  "status": "string"
}
```

## Returns

List of messages with changed status. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
