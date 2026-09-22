---
title: "Copy a task"
sidebar_label: "Copy a task"
sidebar_class_name: api-method post
description: "Copies a task with the parameters specified in the request."
---

**POST** `/api/2.0/project/task/{copyFrom:[0-9]+}/copy`

Copies a task with the parameters specified in the request.

## Request body

### projectid

**type:** `integer`

Project ID

**Example**: `0`

### description

**type:** `string`

Task description

**Example**: `"string"`

### deadline

**type:** `string`

Task deadline

**Example**: `"string"`

### priority

**type:** `integer`

Task priority: Low|Normal|High

**Example**: `0`

### title

**type:** `string`

Task title

**Example**: `"string"`

### milestoneid

**type:** `integer`

Task milestone ID

**Example**: `0`

### responsibles

**type:** `string[]`

List of task responsibles

### notify

**type:** `boolean`

Specifies whether to notify responsibles about the task actions or not

**Example**: `true`

### startDate

**type:** `string`

Task start date

**Example**: `"string"`

### copyFrom

**type:** `integer`

Task ID from which the information is copied

**Example**: `0`

### copySubtasks

**type:** `boolean`

Specifies if the subtasks will be copied or not

**Example**: `true`

### copyFiles

**type:** `boolean`

Specifies if the attached files will be copied or not

**Example**: `true`

### removeOld

**type:** `boolean`

Specifies if the original task will be removed or not

**Example**: `true`

## Request example

```json
{
  "projectid": 0,
  "description": "string",
  "deadline": "string",
  "priority": 0,
  "title": "string",
  "milestoneid": 0,
  "responsibles": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "notify": true,
  "startDate": "string",
  "copyFrom": 0,
  "copySubtasks": true,
  "copyFiles": true,
  "removeOld": true
}
```

## Returns

Copied task. A request that is not authenticated returns `401`.

### CreateBy

**type:** `EmployeeWraper`

### Created

**type:** `string`

**Example**: `"2020-12-16T03:11:54.3573531Z"`

### Contact

**type:** `ContactBaseWithEmailWrapper`

### Title

**type:** `string`

**Example**: `"Send a commercial offer"`

### Description

**type:** `string`

**Example**: `"Description"`

### DeadLine

**type:** `string`

**Example**: `"2020-12-16T03:11:54.3573531Z"`

### AlertValue

**type:** `integer`

**Example**: `1`

### Responsible

**type:** `EmployeeWraper`

### IsClosed

**type:** `boolean`

**Example**: `true`

### Category

**type:** `TaskCategoryBaseWrapper`

### Entity

**type:** `EntityWrapper`

### CanEdit

**type:** `boolean`

**Example**: `true`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
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
```
