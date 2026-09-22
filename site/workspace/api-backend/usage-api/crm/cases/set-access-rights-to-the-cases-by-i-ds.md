---
title: "Set access rights to the cases by IDs"
sidebar_label: "Set access rights to the cases by IDs"
sidebar_class_name: api-method put
description: "Sets access rights to the list of cases with the IDs specified in the request."
---

**PUT** `/api/2.0/crm/case/access`

Sets access rights to the list of cases with the IDs specified in the request.

## Request body

### casesid

**type:** `integer[]`

List of case IDs

### isPrivate

**type:** `boolean`

Case privacy: private or not

**Example**: `true`

### accessList

**type:** `string[]`

List of users with access

## Request example

```json
{
  "casesid": [
    0
  ],
  "isPrivate": true,
  "accessList": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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
