---
title: "Create an invoice line"
sidebar_label: "Create an invoice line"
sidebar_class_name: api-method post
description: "Creates an invoice line with the parameters (invoice ID, invoice item ID, etc.) specified in the request."
---

**POST** `/api/2.0/crm/invoiceline`

Creates an invoice line with the parameters (invoice ID, invoice item ID, etc.) specified in the request.

## Request body

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

First invoice tax ID

**Example**: `0`

### invoiceTax2Id

**type:** `integer`

Second invoice tax ID

**Example**: `0`

### sortOrder

**type:** `integer`

Sort order

**Example**: `0`

### description

**type:** `string`

Description

**Example**: `"string"`

### quantity

**type:** `number`

Quantity

**Example**: `0`

### price

**type:** `number`

Price

**Example**: `0`

### discount

**type:** `number`

Discount

**Example**: `0`

## Request example

```json
{
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

Invoice line. A request that is not authenticated returns `401`.

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
