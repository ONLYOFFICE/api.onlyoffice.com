---
title: "Get invoice converter data"
sidebar_label: "Get invoice converter data"
sidebar_class_name: api-method post
description: "Returns information about the generation of the invoice pdf file."
---

**POST** `/api/2.0/crm/invoice/converter/data`

Returns information about the generation of the invoice pdf file.

## Request body

### invoiceId

**type:** `integer`

Invoice ID

**Example**: `0`

### storageUrl

**type:** `string`

Storage URL

**Example**: `"string"`

### revisionId

**type:** `string`

Revision ID

**Example**: `"string"`

## Request example

```json
{
  "invoiceId": 0,
  "storageUrl": "string",
  "revisionId": "string"
}
```

## Returns

Converter data. A request that is not authenticated returns `401`.
