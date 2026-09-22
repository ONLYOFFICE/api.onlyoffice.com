---
title: "Delete contacts by IDs"
sidebar_label: "Delete contacts by IDs"
sidebar_class_name: api-method put
description: "Deletes a group of contacts with the IDs specified in the request."
---

**PUT** `/api/2.0/crm/contact`

Deletes a group of contacts with the IDs specified in the request.

## Request body

### contactids

**type:** `integer[]`

List of contact IDs

## Request example

```json
{
  "contactids": [
    0
  ]
}
```

## Returns

List of contacts. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
