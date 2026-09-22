---
title: "Move conversations"
sidebar_label: "Move conversations"
sidebar_class_name: api-method put
description: "Moves conversations with the IDs specified in the request to the selected folder."
---

**PUT** `/api/2.0/mail/conversations/move`

Moves conversations with the IDs specified in the request to the selected folder.

## Request body

### ids

**type:** `integer[]`

List of message IDs from the conversations

### folder

**type:** `integer`

Folder type: 1 - inbox, 2 - sent, 3 - drafts, 4 - trash, 5 - spam

**Example**: `0`

### userFolderId

**type:** `integer[]`

User folder ID

## Request example

```json
{
  "ids": [
    0
  ],
  "folder": 0,
  "userFolderId": [
    0
  ]
}
```

## Returns

List of message IDs from the conversations. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
