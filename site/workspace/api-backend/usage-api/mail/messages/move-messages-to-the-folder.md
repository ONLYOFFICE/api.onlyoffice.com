---
title: "Move messages to the folder"
sidebar_label: "Move messages to the folder"
sidebar_class_name: api-method put
description: "Moves the messages to a folder with the ID specified in the request."
---

**PUT** `/api/2.0/mail/messages/move`

Moves the messages to a folder with the ID specified in the request.

## Request body

### ids

**type:** `integer[]`

List of message IDs

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

List of moved message IDs. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
