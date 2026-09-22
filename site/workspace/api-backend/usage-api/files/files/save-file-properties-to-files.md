---
title: "Save file properties to files"
sidebar_label: "Save file properties to files"
sidebar_class_name: api-method put
description: "Saves file properties to the specified files."
---

**PUT** `/api/2.0/files/batch/properties`

Saves file properties to the specified files.

## Request body

### filesId

**type:** `string[]`

IDs of files

### createSubfolder

**type:** `boolean`

Creates a subfolder or not

**Example**: `true`

### fileProperties

**type:** `object`

File properties

## Request example

```json
{
  "filesId": [
    "string"
  ],
  "createSubfolder": true
}
```

## Returns

List of file properties. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "FormFilling": {
      "CollectFillForm": true,
      "ToFolderId": "string",
      "ToFolderPath": "string",
      "CreateFolderTitle": "string",
      "CreateFileMask": "string"
    }
  }
]
```
