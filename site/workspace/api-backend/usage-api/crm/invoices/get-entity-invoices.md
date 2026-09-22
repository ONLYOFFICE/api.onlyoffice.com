---
title: "Get entity invoices"
sidebar_label: "Get entity invoices"
sidebar_class_name: api-method get
description: "Returns a list of all the invoices related to the entity with the ID and type specified in the request."
---

**GET** `/api/2.0/crm/{entityType:(contact|person|company|opportunity)}/invoicelist/{entityid:[0-9]+}`

Returns a list of all the invoices related to the entity with the ID and type specified in the request.

## Request body

### entityType

**type:** `string`

Invoice entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Invoice entity ID

**Example**: `0`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0
}
```

## Returns

List of invoices. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
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
]
```
