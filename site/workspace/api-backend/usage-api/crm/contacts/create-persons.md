---
title: "Create persons"
sidebar_label: "Create persons"
sidebar_class_name: api-method post
description: "Creates a list of persons with the first and last names specified in the request."
---

**POST** `/api/2.0/crm/contact/person/quick`

Creates a list of persons with the first and last names specified in the request.

**Note**: Data has the following format:
             [`{key: 'First name 1', value: 'Last name 1'}`, `{key: 'First name 2', value: 'Last name 2'}`].

## Request body

### data

**type:** `object[]`

Pairs: user first name, user last name

## Request example

```json
{
  "data": [
    {}
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
