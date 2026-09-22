---
title: "Get filtered invoice items"
sidebar_label: "Get filtered invoice items"
sidebar_class_name: api-method get
description: "Returns a list of invoice items matching the parameters specified in the request."
---

**GET** `/api/2.0/crm/invoiceitem/filter`

Returns a list of invoice items matching the parameters specified in the request.

## Request body

### status

**type:** `integer`

Invoice status

**Example**: `0`

### inventoryStock

**type:** `boolean[]`

Specifies if the inventory is tracked or not

## Request example

```json
{
  "status": 0,
  "inventoryStock": [
    true
  ]
}
```

## Returns

List of invoice items. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
