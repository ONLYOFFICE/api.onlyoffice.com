---
title: "Delete an invoice item"
sidebar_label: "Delete an invoice item"
sidebar_class_name: api-method delete
description: "Deletes an invoice item with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/invoiceitem/{id:[0-9]+}`

Deletes an invoice item with the ID specified in the request.

## Request body

### id

**type:** `integer`

Invoice item ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

Invoice item. A request that is not authenticated returns `401`.

### Title

**type:** `string`

**Example**: `"Title"`

### StockKeepingUnit

**type:** `string`

**Example**: `"StockKeepingUnit"`

### Description

**type:** `string`

**Example**: `"Description"`

### Price

**type:** `number`

**Example**: `1.2`

### Currency

**type:** `CurrencyInfoWrapper`

### StockQuantity

**type:** `number`

**Example**: `2.2`

### TrackInvenory

**type:** `boolean`

**Example**: `true`

### InvoiceTax1

**type:** `InvoiceTaxWrapper`

### InvoiceTax2

**type:** `InvoiceTaxWrapper`

### CreateOn

**type:** `string`

**Example**: `"2020-12-14T22:13:41.5378233Z"`

### CreateBy

**type:** `EmployeeWraper`

### CanEdit

**type:** `boolean`

**Example**: `true`

### CanDelete

**type:** `boolean`

**Example**: `true`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "Title": "Title",
  "StockKeepingUnit": "StockKeepingUnit",
  "Description": "Description",
  "Price": 1.2,
  "Currency": {
    "Title": "Chinese Yuan",
    "Symbol": "¥",
    "Abbreviation": "CNY",
    "CultureName": "CN",
    "IsConvertable": true,
    "IsBasic": false
  },
  "StockQuantity": 2.2,
  "TrackInvenory": true,
  "InvoiceTax1": {
    "Name": "Name",
    "Description": "Description",
    "Rate": "Rate",
    "CreateOn": "2020-12-14T22:13:41.5378233Z",
    "CreateBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "CanEdit": true,
    "CanDelete": true,
    "ID": 1234
  },
  "InvoiceTax2": {
    "Name": "Name",
    "Description": "Description",
    "Rate": "Rate",
    "CreateOn": "2020-12-14T22:13:41.5378233Z",
    "CreateBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "CanEdit": true,
    "CanDelete": true,
    "ID": 1234
  },
  "CreateOn": "2020-12-14T22:13:41.5378233Z",
  "CreateBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "CanEdit": true,
  "CanDelete": true,
  "ID": 1234
}
```
