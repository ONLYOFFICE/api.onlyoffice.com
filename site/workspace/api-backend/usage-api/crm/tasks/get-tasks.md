---
title: "Get tasks"
sidebar_label: "Get tasks"
sidebar_class_name: api-method get
description: "Returns a list of tasks matching the parameters specified in the request."
---

**GET** `/api/2.0/crm/task/filter`

Returns a list of tasks matching the parameters specified in the request.

## Request body

### responsibleid

**type:** `string`

Task responsible ID

**Example**: `"string"`

### categoryid

**type:** `integer`

Task category ID

**Example**: `0`

### isClosed

**type:** `boolean[]`

Task status

### fromDate

**type:** `string`

Earliest task due date

**Example**: `"string"`

### toDate

**type:** `string`

Latest task due date

**Example**: `"string"`

### entityType

**type:** `string`

Related entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Related entity ID

**Example**: `0`

## Request example

```json
{
  "responsibleid": "string",
  "categoryid": 0,
  "isClosed": [
    true
  ],
  "fromDate": "string",
  "toDate": "string",
  "entityType": "string",
  "entityid": 0
}
```

## Returns

List of all tasks. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "CreateBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Created": "2020-12-16T03:11:54.3573531Z",
    "Contact": {
      "Email": {
        "InfoType": 1,
        "Category": 0,
        "Data": "support@onlyoffice.com",
        "CategoryName": "Home",
        "IsPrimary": true,
        "ID": 1234
      },
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
    "Title": "Send a commercial offer",
    "Description": "Description",
    "DeadLine": "2020-12-16T03:11:54.3573531Z",
    "AlertValue": 1,
    "Responsible": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "IsClosed": true,
    "Category": {
      "ImagePath": "path to image",
      "Title": "Title",
      "Description": "Description",
      "Color": "#a7fc00",
      "SortOrder": 1,
      "ID": 1234
    },
    "Entity": {
      "EntityType": "opportunity",
      "EntityId": 123445,
      "EntityTitle": "Household appliances internet shop"
    },
    "CanEdit": true,
    "ID": 1234
  }
]
```
