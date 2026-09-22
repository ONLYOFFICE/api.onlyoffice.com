---
title: "Delete tasks"
sidebar_label: "Delete tasks"
sidebar_class_name: api-method delete
description: "Deletes the tasks with the IDs specified in the request from the project."
---

**DELETE** `/api/2.0/project/task`

Deletes the tasks with the IDs specified in the request from the project.

## Request body

### taskids

**type:** `integer[]`

Task IDs

## Request example

```json
{
  "taskids": [
    0
  ]
}
```

## Returns

Deleted tasks. A request that is not authenticated returns `401`.

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
