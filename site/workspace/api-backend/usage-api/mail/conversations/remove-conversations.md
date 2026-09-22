---
title: "Remove conversations"
sidebar_label: "Remove conversations"
sidebar_class_name: api-method put
description: "Removes conversations with the IDs specified in the request from the folders."
---

**PUT** `/api/2.0/mail/conversations/remove`

Removes conversations with the IDs specified in the request from the folders.

## Request body

### ids

**type:** `integer[]`

List of conversation IDs

## Request example

```json
{
  "ids": [
    0
  ]
}
```

## Returns

List of removed conversation IDs. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
