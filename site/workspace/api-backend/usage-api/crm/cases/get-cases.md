---
title: "Get cases"
sidebar_label: "Get cases"
sidebar_class_name: api-method get
description: "Returns a list of all the cases matching the parameters specified in the request."
---

**GET** `/api/2.0/crm/case/filter`

Returns a list of all the cases matching the parameters specified in the request.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### isClosed

**type:** `boolean[]`

Case status: closed or not

### tags

**type:** `string[]`

Case tags

## Request example

```json
{
  "contactid": 0,
  "isClosed": [
    true
  ],
  "tags": [
    "string"
  ]
}
```

## Returns

List of cases. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Members": [
      {
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
      }
    ],
    "CreateBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Created": "2020-12-08T17:37:04.5736385Z",
    "Title": "Exhibition organization",
    "IsClosed": false,
    "IsPrivate": false,
    "AccessList": [
      {
        "Id": "00000000-0000-0000-0000-000000000000",
        "DisplayName": "Mike Zanyatski",
        "Title": "Manager",
        "AvatarSmall": "url to small avatar",
        "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
      }
    ],
    "CanEdit": true,
    "CustomFields": [
      {
        "EntityId": 14523423,
        "Label": "Birthdate",
        "FieldValue": "2020-12-08T17:37:04.5916406Z",
        "FieldType": 5,
        "Position": 10,
        "Mask": "",
        "ID": 1234
      }
    ],
    "ID": 1234
  }
]
```
