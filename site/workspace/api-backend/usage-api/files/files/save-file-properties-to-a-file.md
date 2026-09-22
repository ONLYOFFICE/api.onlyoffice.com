---
title: "Save file properties to a file"
sidebar_label: "Save file properties to a file"
sidebar_class_name: api-method put
description: "Saves file properties to the specified file."
---

**PUT** `/api/2.0/files/{fileId}/properties`

Saves file properties to the specified file.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### fileProperties

**type:** `object`

File properties

## Request example

```json
{}
```

## Returns

File properties. A request that is not authenticated returns `401`.

### FormFilling

**type:** `FormFillingProperties`

## Response example

```json
{
  "FormFilling": {
    "CollectFillForm": true,
    "ToFolderId": "string",
    "ToFolderPath": "string",
    "CreateFolderTitle": "string",
    "CreateFileMask": "string"
  }
}
```
