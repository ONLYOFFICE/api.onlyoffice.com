---
title: "Get filtered events"
sidebar_label: "Get filtered events"
sidebar_class_name: api-method get
description: "Returns a list of all the events matching the parameters specified in the request."
---

**GET** `/api/2.0/crm/history/filter`

Returns a list of all the events matching the parameters specified in the request.

## Request body

### entityType

**type:** `string`

Related entity type

**Example**: `"string"`

### entityId

**type:** `integer`

Related entity ID

**Example**: `0`

### categoryId

**type:** `integer`

Event category ID

**Example**: `0`

### createBy

**type:** `string`

Event author

**Example**: `"string"`

### fromDate

**type:** `string`

Earliest event due date

**Example**: `"string"`

### toDate

**type:** `string`

Latest event due date

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string",
  "entityId": 0,
  "categoryId": 0,
  "createBy": "string",
  "fromDate": "string",
  "toDate": "string"
}
```

## Returns

Event list. A request that is not authenticated returns `401`.

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
    "Created": "2020-12-13T17:13:31.5902727Z",
    "Content": "Agreed to meet at lunch and discuss the client commercial offer",
    "Category": {
      "ImagePath": "path to image",
      "Title": "Title",
      "Description": "Description",
      "Color": "#a7fc00",
      "SortOrder": 1,
      "ID": 1234
    },
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
    "Entity": {
      "EntityType": "opportunity",
      "EntityId": 123445,
      "EntityTitle": "Household appliances internet shop"
    },
    "CanEdit": true,
    "Files": [
      {
        "Name": "File name",
        "UpdatedBy": {
          "Id": "00000000-0000-0000-0000-000000000000",
          "DisplayName": "Mike Zanyatski",
          "Title": "Manager",
          "AvatarSmall": "url to small avatar",
          "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
        },
        "Updated": "2020-12-08T17:37:03.3424957Z",
        "Location": "4\\\\46\\\\File name"
      }
    ],
    "ID": 1234
  }
]
```
