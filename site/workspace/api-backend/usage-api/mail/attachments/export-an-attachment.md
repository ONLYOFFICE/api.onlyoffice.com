---
title: "Export an attachment"
sidebar_label: "Export an attachment"
sidebar_class_name: api-method put
description: "Exports an attachment with the ID specified in the request to the folder with documents."
---

**PUT** `/api/2.0/mail/messages/attachment/export`

Exports an attachment with the ID specified in the request to the folder with documents.

## Request body

### id_attachment

**type:** `integer`

Attachment ID

**Example**: `0`

### id_folder

**type:** `string`

Folder ID (if this parameter is empty, the "My documents" folder is used)

**Example**: `"string"`

## Request example

```json
{
  "id_attachment": 0,
  "id_folder": "string"
}
```

## Returns

Document ID in the folder with documents. A request that is not authenticated returns `401`.
