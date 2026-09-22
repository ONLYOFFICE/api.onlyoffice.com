---
title: "Update an invoice group status"
sidebar_label: "Update an invoice group status"
sidebar_class_name: api-method put
description: "Updates a status of invoices with the IDs specified in the request."
---

**PUT** `/api/2.0/crm/invoice/status/{status:[\w\d-]+}`

Updates a status of invoices with the IDs specified in the request.

## Request body

### invoiceids

**type:** `integer[]`

List of invoice IDs

### status

**type:** `integer`

New invoice status

**Example**: `0`

## Request example

```json
{
  "invoiceids": [
    0
  ],
  "status": 0
}
```

## Returns

Invoice information. A request that is not authenticated returns `401`.
