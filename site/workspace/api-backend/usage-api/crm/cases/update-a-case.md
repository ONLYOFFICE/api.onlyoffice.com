---
title: "Update a case"
sidebar_label: "Update a case"
sidebar_class_name: api-method put
description: "Updates the selected case with the parameters specified in the request."
---

**PUT** `/api/2.0/crm/case/{caseid:[0-9]+}`

Updates the selected case with the parameters specified in the request.

## Request body

### caseid

**type:** `integer`

Case ID

**Example**: `0`

### title

**type:** `string`

New case title

**Example**: `"string"`

### members

**type:** `integer[]`

List of contact IDs of the case participants

### customFieldList

**type:** `object[]`

New list of case custom fields

### isPrivate

**type:** `boolean`

Case privacy: private or not

**Example**: `true`

### accessList

**type:** `string[]`

New list of users with access to the case

### isNotify

**type:** `boolean`

Notifies users from the access list about the case

**Example**: `true`

## Request example

```json
{
  "caseid": 0,
  "title": "string",
  "members": [
    0
  ],
  "customFieldList": [
    {}
  ],
  "isPrivate": true,
  "accessList": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "isNotify": true
}
```

## Returns

Case. A request that is not authenticated returns `401`.

### Members

**type:** `ContactBaseWrapper[]`

### CreateBy

**type:** `EmployeeWraper`

### Created

**type:** `string`

**Example**: `"2020-12-08T17:37:04.5736385Z"`

### Title

**type:** `string`

**Example**: `"Exhibition organization"`

### IsClosed

**type:** `boolean`

**Example**: `false`

### IsPrivate

**type:** `boolean`

**Example**: `false`

### AccessList

**type:** `EmployeeWraper[]`

### CanEdit

**type:** `boolean`

**Example**: `true`

### CustomFields

**type:** `CustomFieldBaseWrapper[]`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "Members": [
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
  "CreateBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "Created": "2020-12-08T17:37:04.5736385Z",
  "Title": "Exhibition organization",
  "IsClosed": false,
  "IsPrivate": false,
  "AccessList": [
    {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    }
  ],
  "CanEdit": true,
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
  "ID": 1234
}
```
