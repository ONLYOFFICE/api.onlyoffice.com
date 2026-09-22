---
title: "Create an invoice"
sidebar_label: "Create an invoice"
sidebar_class_name: api-method post
description: "Creates an invoice with the parameters (contact ID, consignee ID, etc.) specified in the request."
---

**POST** `/api/2.0/crm/invoice`

Creates an invoice with the parameters (contact ID, consignee ID, etc.) specified in the request.

## Request body

### number

**type:** `string`

Invoice number

**Example**: `"string"`

### issueDate

**type:** `string`

Invoice issue date

**Example**: `"string"`

### templateType

**type:** `integer`

Invoice template type

**Example**: `0`

### contactId

**type:** `integer`

Invoice contact ID

**Example**: `0`

### consigneeId

**type:** `integer`

Invoice consignee ID

**Example**: `0`

### entityId

**type:** `integer`

Invoice entity ID

**Example**: `0`

### billingAddressID

**type:** `integer`

Invoice billing address ID

**Example**: `0`

### deliveryAddressID

**type:** `integer`

Invoice delivery address ID

**Example**: `0`

### dueDate

**type:** `string`

Invoice due date

**Example**: `"string"`

### language

**type:** `string`

Invoice language

**Example**: `"string"`

### currency

**type:** `string`

Invoice currency (abbreviation)

**Example**: `"string"`

### exchangeRate

**type:** `number`

Invoice exchange rate

**Example**: `0`

### purchaseOrderNumber

**type:** `string`

Invoice purchase order number

**Example**: `"string"`

### terms

**type:** `string`

Invoice terms

**Example**: `"string"`

### description

**type:** `string`

Invoice description

**Example**: `"string"`

### invoiceLines

**type:** `InvoiceLine[]`

List of invoice lines

## Request example

```json
{
  "number": "string",
  "issueDate": "string",
  "templateType": 0,
  "contactId": 0,
  "consigneeId": 0,
  "entityId": 0,
  "billingAddressID": 0,
  "deliveryAddressID": 0,
  "dueDate": "string",
  "language": "string",
  "currency": "string",
  "exchangeRate": 0,
  "purchaseOrderNumber": "string",
  "terms": "string",
  "description": "string",
  "invoiceLines": [
    {
      "ID": "1234"
    }
  ]
}
```

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
