---
title: "Start file editing"
sidebar_label: "Start file editing"
sidebar_class_name: api-method post
description: "Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors)."
---

**POST** `/api/2.0/files/file/{fileId}/startedit`

Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### editingAlone

**type:** `boolean`

Specifies whether to share a file with other users for editing or not

**Example**: `true`

### doc

**type:** `string`

Shared token

**Example**: `"string"`

## Request example

```json
{
  "editingAlone": true,
  "doc": "string"
}
```

## Returns

File key for Document Service. A request that is not authenticated returns `401`.
