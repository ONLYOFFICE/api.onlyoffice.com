---
title: "Get an invoice sample"
sidebar_label: "Get an invoice sample"
sidebar_class_name: api-method get
description: "Returns the detailed information about an invoice sample."
---

**GET** `/api/2.0/crm/invoice/sample`

Returns the detailed information about an invoice sample.

## Returns

Invoice. A request that is not authenticated returns `401`.

### InvoiceLines

**type:** `InvoiceLineWrapper[]`

### Status

**type:** `InvoiceStatusWrapper`

### Number

**type:** `string`

**Example**: `""`

### IssueDate

**type:** `string`

**Example**: `"2020-12-14T22:13:41.5378233Z"`

### TemplateType

**type:** `"Eur" | "Rus"`

[0 - Eur, 1 - Rus]

**Example**: `0`

### Contact

**type:** `ContactBaseWrapper`

### Consignee

**type:** `ContactBaseWrapper`

### Entity

**type:** `EntityWrapper`

### DueDate

**type:** `string`

**Example**: `"2020-12-14T22:13:41.5378233Z"`

### Language

**type:** `string`

**Example**: `""`

### Currency

**type:** `CurrencyInfoWrapper`

### ExchangeRate

**type:** `number`

**Example**: `"1,0"`

### PurchaseOrderNumber

**type:** `string`

**Example**: `""`

### Terms

**type:** `string`

**Example**: `""`

### Description

**type:** `string`

**Example**: `""`

### FileID

**type:** `integer`

**Example**: `-1`

### CreateOn

**type:** `string`

**Example**: `"2020-12-14T22:13:41.5378233Z"`

### CreateBy

**type:** `EmployeeWraper`

### Cost

**type:** `number`

**Example**: `"0,0"`

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
  "InvoiceLines": [
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
  ],
  "Status": {
    "Title": "Title",
    "ID": 1234
  },
  "Number": "",
  "IssueDate": "2020-12-14T22:13:41.5378233Z",
  "TemplateType": 0,
  "Contact": {
    "SmallFotoUrl": "url to foto",
    "MediumFotoUrl": "url to foto",
    "DisplayName": "Tadjeddine Bachir",
    "IsCompany": false,
    "AccessList": [
      {
        "Id": "00000000-0000-0000-0000-000000000000",
        "DisplayName": "Mike Zanyatski",
        "Title": "Manager",
        "AvatarSmall": "url to small avatar",
        "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
      }
    ],
    "IsPrivate": true,
    "IsShared": false,
    "ShareType": 0,
    "Currency": {
      "Title": "Chinese Yuan",
      "Symbol": "¥",
      "Abbreviation": "CNY",
      "CultureName": "CN",
      "IsConvertable": true,
      "IsBasic": false
    },
    "CanEdit": true,
    "CanDelete": true,
    "ID": 1234
  },
  "Consignee": {
    "SmallFotoUrl": "url to foto",
    "MediumFotoUrl": "url to foto",
    "DisplayName": "Tadjeddine Bachir",
    "IsCompany": false,
    "AccessList": [
      {
        "Id": "00000000-0000-0000-0000-000000000000",
        "DisplayName": "Mike Zanyatski",
        "Title": "Manager",
        "AvatarSmall": "url to small avatar",
        "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
      }
    ],
    "IsPrivate": true,
    "IsShared": false,
    "ShareType": 0,
    "Currency": {
      "Title": "Chinese Yuan",
      "Symbol": "¥",
      "Abbreviation": "CNY",
      "CultureName": "CN",
      "IsConvertable": true,
      "IsBasic": false
    },
    "CanEdit": true,
    "CanDelete": true,
    "ID": 1234
  },
  "Entity": {
    "EntityType": "opportunity",
    "EntityId": 123445,
    "EntityTitle": "Household appliances internet shop"
  },
  "DueDate": "2020-12-14T22:13:41.5378233Z",
  "Language": "",
  "Currency": {
    "Title": "Chinese Yuan",
    "Symbol": "¥",
    "Abbreviation": "CNY",
    "CultureName": "CN",
    "IsConvertable": true,
    "IsBasic": false
  },
  "ExchangeRate": "1,0",
  "PurchaseOrderNumber": "",
  "Terms": "",
  "Description": "",
  "FileID": -1,
  "CreateOn": "2020-12-14T22:13:41.5378233Z",
  "CreateBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "Cost": "0,0",
  "CanEdit": true,
  "CanDelete": true,
  "ID": 1234
}
```
