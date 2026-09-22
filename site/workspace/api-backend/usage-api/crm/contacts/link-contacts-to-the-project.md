---
title: "Link contacts to the project"
sidebar_label: "Link contacts to the project"
sidebar_class_name: api-method post
description: "Links the selected contacts to the project with the ID specified in the request."
---

**POST** `/api/2.0/crm/contact/project/{projectid:[0-9]+}`

Links the selected contacts to the project with the ID specified in the request.

## Request body

### contactid

**type:** `integer[]`

Array of contact IDs

### projectid

**type:** `integer`

Project ID

**Example**: `0`

## Request example

```json
{
  "contactid": [
    0
  ],
  "projectid": 0
}
```

## Returns

List of contacts. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Addresses": [
      {
        "Street": "Lubanas st. 125a-25",
        "City": "",
        "State": "",
        "Zip": "LV-1021",
        "Country": "Latvia",
        "Category": 0,
        "CategoryName": "Home",
        "IsPrimary": true
      }
    ],
    "CreateBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Created": "2020-12-08T17:37:04.5916406Z",
    "About": "About",
    "Industry": "Industry",
    "ContactStatus": {
      "Title": "Title",
      "Description": "Description",
      "Color": "#a7fc00",
      "SortOrder": 1,
      "ID": 1234
    },
    "ContactType": {
      "Title": "Title",
      "Description": "Description",
      "Color": "#a7fc00",
      "SortOrder": 1,
      "ID": 1234
    },
    "CommonData": [
      {
        "InfoType": 1,
        "Category": 0,
        "Data": "support@onlyoffice.com",
        "CategoryName": "Home",
        "IsPrimary": true,
        "ID": 1234
      }
    ],
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
    "Tags": [
      "Tag1,Tag2"
    ],
    "TaskCount": 1,
    "HaveLateTasks": true,
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
