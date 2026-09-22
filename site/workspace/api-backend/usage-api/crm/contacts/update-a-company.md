---
title: "Update a company"
sidebar_label: "Update a company"
sidebar_class_name: api-method put
description: "Updates the selected company with the parameters specified in the request."
---

**PUT** `/api/2.0/crm/contact/company/{companyid:[0-9]+}`

Updates the selected company with the parameters specified in the request.

## Request body

### companyid

**type:** `integer`

Company ID

**Example**: `0`

### companyName

**type:** `string`

New company name

**Example**: `"string"`

### about

**type:** `string`

New company description text

**Example**: `"string"`

### shareType

**type:** `integer`

New company privacy: 0 - not shared, 1 - shared for reading/writnig, 2 - shared for reading only

**Example**: `0`

### managerList

**type:** `string[]`

New list of company managers

### customFieldList

**type:** `object[]`

New custom field list

## Request example

```json
{
  "companyid": 0,
  "companyName": "string",
  "about": "string",
  "shareType": 0,
  "managerList": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "customFieldList": [
    {}
  ]
}
```

## Returns

Company. A request that is not authenticated returns `401`.

### CompanyName

**type:** `string`

**Example**: `"Food and Culture Project"`

### Persons

**type:** `ContactBaseWrapper[]`

### PersonsCount

**type:** `integer`

**Example**: `33`

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
  "CompanyName": "Food and Culture Project",
  "Persons": [
    {
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
  ],
  "PersonsCount": 33,
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
