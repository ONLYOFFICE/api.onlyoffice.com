---
title: "Set a conversation status"
sidebar_label: "Set a conversation status"
sidebar_class_name: api-method put
description: "Sets a status to the conversations with the IDs specified in the request."
---

**PUT** `/api/2.0/mail/conversations/mark`

Sets a status to the conversations with the IDs specified in the request.

## Request body

### ids

**type:** `integer[]`

List of conversation IDs

### status

**type:** `string`

New status ("read", "unread", "important", or "normal")

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

List of conversations with the changed status. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
