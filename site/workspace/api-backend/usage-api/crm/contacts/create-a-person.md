---
title: "Create a person"
sidebar_label: "Create a person"
sidebar_class_name: api-method post
description: "Creates a person with the parameters (first name, last name, description, etc.) specified in the request."
---

**POST** `/api/2.0/crm/contact/person`

Creates a person with the parameters (first name, last name, description, etc.) specified in the request.

## Request body

### firstName

**type:** `string`

First name

**Example**: `"string"`

### lastName

**type:** `string`

Last name

**Example**: `"string"`

### jobTitle

**type:** `string`

Job title

**Example**: `"string"`

### companyId

**type:** `integer`

Company ID

**Example**: `0`

### about

**type:** `string`

Person description text

**Example**: `"string"`

### shareType

**type:** `integer`

Person privacy: 0 - not shared, 1 - shared for reading/writing, 2 - shared for reading only

**Example**: `0`

### managerList

**type:** `string[]`

List of person managers

### customFieldList

**type:** `object[]`

Custom field list

### photo

**type:** `string[]`

Contact photo (upload using multipart/form-data)

## Request example

```json
{
  "firstName": "string",
  "lastName": "string",
  "jobTitle": "string",
  "companyId": 0,
  "about": "string",
  "shareType": 0,
  "managerList": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "customFieldList": [
    {}
  ],
  "photo": [
    "string"
  ]
}
```

## Returns

Person. A request that is not authenticated returns `401`.

### FirstName

**type:** `string`

**Example**: `"Tadjeddine"`

### LastName

**type:** `string`

**Example**: `"Bachir"`

### Company

**type:** `ContactBaseWrapper`

### Title

**type:** `string`

**Example**: `"Programmer"`

### Addresses

**type:** `Address[]`

### CreateBy

**type:** `EmployeeWraper`

### Created

**type:** `string`

**Example**: `"2020-12-08T17:37:04.5916406Z"`

### About

**type:** `string`

**Example**: `"About"`

### Industry

**type:** `string`

**Example**: `"Industry"`

### ContactStatus

**type:** `ContactStatusBaseWrapper`

### ContactType

**type:** `ContactTypeBaseWrapper`

### CommonData

**type:** `ContactInfoWrapper[]`

### CustomFields

**type:** `CustomFieldBaseWrapper[]`

### Tags

**type:** `string[]`

### TaskCount

**type:** `integer`

**Example**: `1`

### HaveLateTasks

**type:** `boolean`

**Example**: `true`

### SmallFotoUrl

**type:** `string`

**Example**: `"url to foto"`

### MediumFotoUrl

**type:** `string`

**Example**: `"url to foto"`

### DisplayName

**type:** `string`

**Example**: `"Tadjeddine Bachir"`

### IsCompany

**type:** `boolean`

**Example**: `false`

### AccessList

**type:** `EmployeeWraper[]`

### IsPrivate

**type:** `boolean`

**Example**: `true`

### IsShared

**type:** `boolean`

**Example**: `false`

### ShareType

**type:** `"None" | "ReadWrite" | "Read"`

[0 - None, 1 - ReadWrite, 2 - Read]

**Example**: `0`

### Currency

**type:** `CurrencyInfoWrapper`

### CanEdit

**type:** `boolean`

**Example**: `true`

### CanDelete

**type:** `boolean`

**Example**: `true`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "FirstName": "Tadjeddine",
  "LastName": "Bachir",
  "Company": {
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
  "Title": "Programmer",
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
```
