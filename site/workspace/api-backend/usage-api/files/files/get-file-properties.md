---
title: "Get file properties"
sidebar_label: "Get file properties"
sidebar_class_name: api-method get
description: "Returns file properties of the specified file."
---

**GET** `/api/2.0/files/{fileId}/properties`

Returns file properties of the specified file.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

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
