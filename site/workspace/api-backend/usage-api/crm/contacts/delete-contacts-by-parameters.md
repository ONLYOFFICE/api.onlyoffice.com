---
title: "Delete contacts by parameters"
sidebar_label: "Delete contacts by parameters"
sidebar_class_name: api-method delete
description: "Deletes a list of all the contacts in the CRM module matching the parameters specified in the request."
---

**DELETE** `/api/2.0/crm/contact/filter`

Deletes a list of all the contacts in the CRM module matching the parameters specified in the request.

## Request body

### tags

**type:** `string[]`

Contact tags

### contactStage

**type:** `integer[]`

Contact stage ID (warmth)

### contactType

**type:** `integer[]`

Contact type ID

### contactListView

**type:** `integer`

Contact list view

**Example**: `0`

### fromDate

**type:** `string`

Start date

**Example**: `"string"`

### toDate

**type:** `string`

End date

**Example**: `"string"`

## Request example

```json
{
  "tags": [
    "string"
  ],
  "contactStage": [
    0
  ],
  "contactType": [
    0
  ],
  "contactListView": 0,
  "fromDate": "string",
  "toDate": "string"
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
