---
title: "Update an invoice line"
sidebar_label: "Update an invoice line"
sidebar_class_name: api-method put
description: "Updates the selected invoice line with the parameters (invoice ID, invoice item ID, etc.) specified in the request."
---

**PUT** `/api/2.0/crm/invoiceline/{id:[0-9]+}`

Updates the selected invoice line with the parameters (invoice ID, invoice item ID, etc.) specified in the request.

## Request body

### id

**type:** `integer`

Invoice line ID

**Example**: `0`

### invoiceId

**type:** `integer`

Invoice ID

**Example**: `0`

### invoiceItemId

**type:** `integer`

Invoice item ID

**Example**: `0`

### invoiceTax1Id

**type:** `integer`

New first invoice tax ID

**Example**: `0`

### invoiceTax2Id

**type:** `integer`

New second invoice tax ID

**Example**: `0`

### sortOrder

**type:** `integer`

New sort order

**Example**: `0`

### description

**type:** `string`

New description

**Example**: `"string"`

### quantity

**type:** `number`

New quantity

**Example**: `0`

### price

**type:** `number`

New price

**Example**: `0`

### discount

**type:** `number`

New discount

**Example**: `0`

## Request example

```json
{
  "id": 0,
  "invoiceId": 0,
  "invoiceItemId": 0,
  "invoiceTax1Id": 0,
  "invoiceTax2Id": 0,
  "sortOrder": 0,
  "description": "string",
  "quantity": 0,
  "price": 0,
  "discount": 0
}
```

## Returns

Updated invoice line. A request that is not authenticated returns `401`.

### InvoiceID

**type:** `integer`

**Example**: `0`

### InvoiceItemID

**type:** `integer`

**Example**: `0`

### InvoiceTax1ID

**type:** `integer`

**Example**: `0`

### InvoiceTax2ID

**type:** `integer`

**Example**: `0`

### SortOrder

**type:** `integer`

**Example**: `0`

### Description

**type:** `string`

**Example**: `"Description"`

### Quantity

**type:** `number`

**Example**: `"0,0"`

### Price

**type:** `number`

**Example**: `"0,0"`

### Discount

**type:** `number`

**Example**: `"0,0"`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "InvoiceID": 0,
  "InvoiceItemID": 0,
  "InvoiceTax1ID": 0,
  "InvoiceTax2ID": 0,
  "SortOrder": 0,
  "Description": "Description",
  "Quantity": "0,0",
  "Price": "0,0",
  "Discount": "0,0",
  "ID": 1234
}
```
