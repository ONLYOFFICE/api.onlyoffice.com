---
title: "Create an event"
sidebar_label: "Create an event"
sidebar_class_name: api-method post
description: "Creates an event with the parameters specified in the request."
---

**POST** `/api/2.0/crm/history`

Creates an event with the parameters specified in the request.

**Note**: You must set a value for 'contactId' if 'entityId' is not set, or a values for the 'entityId' and 'entityType' parameters if 'contactId' is not set.

## Request body

### entityType

**type:** `string`

Related entity type

**Example**: `"string"`

### entityId

**type:** `integer`

Related entity ID

**Example**: `0`

### contactId

**type:** `integer`

Contact ID

**Example**: `0`

### content

**type:** `string`

Event contents

**Example**: `"string"`

### categoryId

**type:** `integer`

Event category ID

**Example**: `0`

### created

**type:** `string`

Event creation date

**Example**: `"string"`

### fileId

**type:** `integer[]`

List of file IDs for the current event

### notifyUserList

**type:** `string[]`

List of users who will be notified about the event

## Request example

```json
{
  "entityType": "string",
  "entityId": 0,
  "contactId": 0,
  "content": "string",
  "categoryId": 0,
  "created": "string",
  "fileId": [
    0
  ],
  "notifyUserList": [
    "string"
  ]
}
```

## Returns

Created event. A request that is not authenticated returns `401`.

### CreateBy

**type:** `EmployeeWraper`

### Created

**type:** `string`

**Example**: `"2020-12-13T17:13:31.5902727Z"`

### Content

**type:** `string`

**Example**: `"Agreed to meet at lunch and discuss the client commercial offer"`

### Category

**type:** `HistoryCategoryBaseWrapper`

### Contact

**type:** `ContactBaseWrapper`

### Entity

**type:** `EntityWrapper`

### CanEdit

**type:** `boolean`

**Example**: `true`

### Files

**type:** `FileWrapper[]`

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
  "Created": "2020-12-13T17:13:31.5902727Z",
  "Content": "Agreed to meet at lunch and discuss the client commercial offer",
  "Category": {
    "ImagePath": "path to image",
    "Title": "Title",
    "Description": "Description",
    "Color": "#a7fc00",
    "SortOrder": 1,
    "ID": 1234
  },
  "Contact": {
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
  "Entity": {
    "EntityType": "opportunity",
    "EntityId": 123445,
    "EntityTitle": "Household appliances internet shop"
  },
  "CanEdit": true,
  "Files": [
    {
      "Name": "File name",
      "UpdatedBy": {
        "Id": "00000000-0000-0000-0000-000000000000",
        "DisplayName": "Mike Zanyatski",
        "Title": "Manager",
        "AvatarSmall": "url to small avatar",
        "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
      },
      "Updated": "2020-12-08T17:37:03.3424957Z",
      "Location": "4\\\\46\\\\File name"
    }
  ],
  "ID": 1234
}
```
