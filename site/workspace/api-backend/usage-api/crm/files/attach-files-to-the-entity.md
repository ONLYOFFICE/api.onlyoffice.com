---
title: "Attach files to the entity"
sidebar_label: "Attach files to the entity"
sidebar_class_name: api-method post
description: "Attaches the selected file(s) to the entity specified in the request."
---

**POST** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/{entityid:[0-9]+}/files`

Attaches the selected file(s) to the entity specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Entity ID

**Example**: `0`

### fileids

**type:** `integer[]`

List of file IDs

## Request example

```json
{
  "entityType": "string",
  "entityid": 0,
  "fileids": [
    0
  ]
}
```

## Returns

Entity with the file(s) attached. A request that is not authenticated returns `401`.

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
