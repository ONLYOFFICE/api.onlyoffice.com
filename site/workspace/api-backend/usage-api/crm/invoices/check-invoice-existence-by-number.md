---
title: "Check invoice existence by number"
sidebar_label: "Check invoice existence by number"
sidebar_class_name: api-method get
description: "Returns the existence of an invoice with the number specified in the request."
---

**GET** `/api/2.0/crm/invoice/bynumber/exist`

Returns the existence of an invoice with the number specified in the request.

## Request body

### number

**type:** `string`

Invoice number

**Example**: `"string"`

## Request example

```json
{
  "number": "string"
}
```

## Returns

Invoice existence. A request that is not authenticated returns `401`.
