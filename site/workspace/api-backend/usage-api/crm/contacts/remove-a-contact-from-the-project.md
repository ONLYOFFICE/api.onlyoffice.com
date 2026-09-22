---
title: "Remove a contact from the project"
sidebar_label: "Remove a contact from the project"
sidebar_class_name: api-method delete
description: "Removes a link to the selected project from the contact with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/contact/{contactid:[0-9]+}/project/{projectid:[0-9]+}`

Removes a link to the selected project from the contact with the ID specified in the request.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### projectid

**type:** `integer`

Project ID

**Example**: `0`

## Request example

```json
{
  "contactid": 0,
  "projectid": 0
}
```

## Returns

Contact information. A request that is not authenticated returns `401`.

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
