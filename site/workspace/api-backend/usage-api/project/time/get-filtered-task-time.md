---
title: "Get filtered task time"
sidebar_label: "Get filtered task time"
sidebar_class_name: api-method get
description: "Returns a list with the detailed information about all the task time spent matching the filter parameters specified in the request."
---

**GET** `/api/2.0/project/time/filter`

Returns a list with the detailed information about all the task time spent matching the filter parameters specified in the request.

## Request body

### projectid

**type:** `integer`

Project ID

**Example**: `0`

### myProjects

**type:** `boolean`

Specifies whether to return task time only for my projects or not

**Example**: `true`

### milestone

**type:** `integer[]`

Milestone ID

### myMilestones

**type:** `boolean`

Specifies whether to return task time only for my milestones or not

**Example**: `true`

### tag

**type:** `integer`

Project tag

**Example**: `0`

### departament

**type:** `string`

Departament GUID

**Example**: `"string"`

### participant

**type:** `string`

Participant GUID

**Example**: `"string"`

### createdStart

**type:** `string`

The earliest date of task creation

**Example**: `"string"`

### createdStop

**type:** `string`

The latest date of task creation

**Example**: `"string"`

### lastId

**type:** `integer`

Last spent time ID

**Example**: `0`

### status

**type:** `integer[]`

Payment status ("NotChargeable", "NotBilled", or "Billed")

## Request example

```json
{
  "projectid": 0,
  "myProjects": true,
  "milestone": [
    0
  ],
  "myMilestones": true,
  "tag": 0,
  "departament": "string",
  "participant": "string",
  "createdStart": "string",
  "createdStop": "string",
  "lastId": 0,
  "status": [
    0
  ]
}
```

## Returns

List of spent time. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 10,
    "Date": "2020-12-22T04:11:56.5438537Z",
    "Hours": 3.5,
    "Note": "Sample note",
    "RelatedProject": 123,
    "Task": {
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
    },
    "RelatedTask": 13456,
    "RelatedTaskTitle": "Sample task",
    "CreatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Person": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "CanEdit": true,
    "PaymentStatus": 2,
    "StatusChanged": "2020-12-22T04:11:56.5438537Z",
    "CanEditPaymentStatus": true,
    "CreateOn": "2020-12-22T04:11:56.5438537Z"
  }
]
```
