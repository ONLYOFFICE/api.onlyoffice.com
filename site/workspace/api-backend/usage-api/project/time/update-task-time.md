---
title: "Update task time"
sidebar_label: "Update task time"
sidebar_class_name: api-method put
description: "Updates the time for the selected task with the time parameters specified in the request."
---

**PUT** `/api/2.0/project/time/{timeid:[0-9]+}`

Updates the time for the selected task with the time parameters specified in the request.

## Request body

### timeid

**type:** `integer`

Time ID

**Example**: `0`

### note

**type:** `string`

New time note

**Example**: `"string"`

### date

**type:** `string`

New date

**Example**: `"string"`

### personId

**type:** `string`

New person ID

**Example**: `"string"`

### hours

**type:** `number`

New spent hours

**Example**: `0`

## Request example

```json
{
  "timeid": 0,
  "note": "string",
  "date": "string",
  "personId": "string",
  "hours": 0
}
```

## Returns

Updated time. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `10`

### Date

**type:** `string`

**Example**: `"2020-12-22T04:11:56.5438537Z"`

### Hours

**type:** `number`

**Example**: `3.5`

### Note

**type:** `string`

**Example**: `"Sample note"`

### RelatedProject

**type:** `integer`

**Example**: `123`

### Task

**type:** `TaskWrapper`

### RelatedTask

**type:** `integer`

**Example**: `13456`

### RelatedTaskTitle

**type:** `string`

**Example**: `"Sample task"`

### CreatedBy

**type:** `EmployeeWraper`

### Person

**type:** `EmployeeWraper`

### CanEdit

**type:** `boolean`

**Example**: `true`

### PaymentStatus

**type:** `"NotChargeable" | "NotBilled" | "Billed"`

[0 - NotChargeable, 1 - NotBilled, 2 - Billed]

**Example**: `2`

### StatusChanged

**type:** `string`

**Example**: `"2020-12-22T04:11:56.5438537Z"`

### CanEditPaymentStatus

**type:** `boolean`

**Example**: `true`

### CreateOn

**type:** `string`

**Example**: `"2020-12-22T04:11:56.5438537Z"`

## Response example

```json
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
```
