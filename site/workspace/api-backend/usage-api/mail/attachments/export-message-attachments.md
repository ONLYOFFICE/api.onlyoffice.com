---
title: "Export message attachments"
sidebar_label: "Export message attachments"
sidebar_class_name: api-method put
description: "Exports all the message attachments to the folder with documents."
---

**PUT** `/api/2.0/mail/messages/attachments/export`

Exports all the message attachments to the folder with documents.

## Request body

### id_message

**type:** `integer`

Message ID

**Example**: `0`

### id_folder

**type:** `string`

Folder ID (if this parameter is empty, the "My documents" folder is used)

**Example**: `"string"`

## Request example

```json
{
  "id_message": 0,
  "id_folder": "string"
}
```

## Returns

Number of attachments exported. A request that is not authenticated returns `401`.
