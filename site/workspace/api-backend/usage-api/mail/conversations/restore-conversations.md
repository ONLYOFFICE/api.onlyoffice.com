---
title: "Restore conversations"
sidebar_label: "Restore conversations"
sidebar_class_name: api-method put
description: "Restores the conversations with the IDs specified in the request to their original folders."
---

**PUT** `/api/2.0/mail/conversations/restore`

Restores the conversations with the IDs specified in the request to their original folders.

## Request body

### ids

**type:** `integer[]`

List of conversation IDs

### learnSpamTrainer

**type:** `boolean`

Specifies whether to send messages to the spam training or not

**Example**: `true`

## Request example

```json
{
  "ids": [
    0
  ],
  "learnSpamTrainer": true
}
```

## Returns

List of restored conversation IDs. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
