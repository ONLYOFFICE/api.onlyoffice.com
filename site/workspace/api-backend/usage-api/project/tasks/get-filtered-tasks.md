---
title: "Get filtered tasks"
sidebar_label: "Get filtered tasks"
sidebar_class_name: api-method get
description: "Returns a list with the detailed information about all the tasks matching the parameters specified in the request."
---

**GET** `/api/2.0/project/task/filter`

Returns a list with the detailed information about all the tasks matching the parameters specified in the request.

## Request body

### projectid

**type:** `integer`

Project ID

**Example**: `0`

### myProjects

**type:** `boolean`

Specifies whether to return tasks only from my projects or not

**Example**: `true`

### milestone

**type:** `integer[]`

Milestone ID

### myMilestones

**type:** `boolean`

Specifies whether to return tasks only from my milestones or not

**Example**: `true`

### nomilestone

**type:** `boolean`

Specifies whether to return tasks only without milestones or not

**Example**: `true`

### tag

**type:** `integer`

Project tag

**Example**: `0`

### status

**type:** `integer[]`

Task status

### substatus

**type:** `integer[]`

Custom task status

### follow

**type:** `boolean`

Specifies whether to return only followed tasks or not

**Example**: `true`

### departament

**type:** `string`

Departament GUID

**Example**: `"string"`

### participant

**type:** `string[]`

Participant GUID

### creator

**type:** `string`

Creator GUID

**Example**: `"string"`

### deadlineStart

**type:** `string`

Minimum value of task deadline

**Example**: `"string"`

### deadlineStop

**type:** `string`

Maximum value of task deadline

**Example**: `"string"`

### lastId

**type:** `integer`

Last task ID

**Example**: `0`

## Request example

```json
{
  "projectid": 0,
  "myProjects": true,
  "milestone": [
    0
  ],
  "myMilestones": true,
  "nomilestone": true,
  "tag": 0,
  "status": [
    0
  ],
  "substatus": [
    0
  ],
  "follow": true,
  "departament": "string",
  "participant": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "creator": "string",
  "deadlineStart": "string",
  "deadlineStop": "string",
  "lastId": 0
}
```

## Returns

List of tasks. A request that is not authenticated returns `401`.

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
