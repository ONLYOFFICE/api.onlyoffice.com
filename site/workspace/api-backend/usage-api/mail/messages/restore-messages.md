---
title: "Restore messages"
sidebar_label: "Restore messages"
sidebar_class_name: api-method put
description: "Restores the messages with the IDs specified in the request to their original folders."
---

**PUT** `/api/2.0/mail/messages/restore`

Restores the messages with the IDs specified in the request to their original folders.

## Request body

### ids

**type:** `integer[]`

List of message IDs

## Request example

```json
{
  "ids": [
    0
  ]
}
```

## Returns

List of restored message IDs. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
