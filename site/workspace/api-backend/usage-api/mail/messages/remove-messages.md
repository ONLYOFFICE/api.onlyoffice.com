---
title: "Remove messages"
sidebar_label: "Remove messages"
sidebar_class_name: api-method put
description: "Removes messages with the IDs specified in the request."
---

**PUT** `/api/2.0/mail/messages/remove`

Removes messages with the IDs specified in the request.

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

List of removed message IDs. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
