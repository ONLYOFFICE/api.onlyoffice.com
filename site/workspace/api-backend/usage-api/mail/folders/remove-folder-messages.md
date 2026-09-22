---
title: "Remove folder messages"
sidebar_label: "Remove folder messages"
sidebar_class_name: api-method delete
description: "Removes all the messages from the trash or spam folder."
---

**DELETE** `/api/2.0/mail/folders/{folderid:[0-9]+}/messages`

Removes all the messages from the trash or spam folder.

## Request body

### folderid

**type:** `integer`

Folder ID: 4 - Trash, 5 - Spam

**Example**: `0`

## Request example

```json
{
  "folderid": 0
}
```

## Returns

Folder ID. A request that is not authenticated returns `401`.
