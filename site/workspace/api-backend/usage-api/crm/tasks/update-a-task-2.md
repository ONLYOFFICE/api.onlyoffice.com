---
title: "Update a task"
sidebar_label: "Update a task"
sidebar_class_name: api-method put
description: "Updates the selected task with the parameters (title, description, due date, etc.) specified in the request."
---

**PUT** `/api/2.0/crm/task/{taskid:[0-9]+}`

Updates the selected task with the parameters (title, description, due date, etc.) specified in the request.

## Request body

### taskid

**type:** `integer`

Task ID

**Example**: `0`

### title

**type:** `string`

New task title

**Example**: `"string"`

### description

**type:** `string`

New task description

**Example**: `"string"`

### deadline

**type:** `string`

New task due date

**Example**: `"string"`

### responsibleid

**type:** `string`

New task responsible ID

**Example**: `"string"`

### categoryid

**type:** `integer`

New task category ID

**Example**: `0`

### contactid

**type:** `integer`

New contact ID

**Example**: `0`

### entityType

**type:** `string`

New related entity type

**Example**: `"string"`

### entityid

**type:** `integer`

New related entity ID

**Example**: `0`

### isNotify

**type:** `boolean`

Notifies the responsible about the task or not

**Example**: `true`

### alertValue

**type:** `integer`

New time period in minutes to remind the responsible of the task

**Example**: `0`

## Request example

```json
{
  "taskid": 0,
  "title": "string",
  "description": "string",
  "deadline": "string",
  "responsibleid": "string",
  "categoryid": 0,
  "contactid": 0,
  "entityType": "string",
  "entityid": 0,
  "isNotify": true,
  "alertValue": 0
}
```

## Returns

Task. A request that is not authenticated returns `401`.

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
