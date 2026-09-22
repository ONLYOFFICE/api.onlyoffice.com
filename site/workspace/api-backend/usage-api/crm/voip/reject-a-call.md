---
title: "Reject a call"
sidebar_label: "Reject a call"
sidebar_class_name: api-method post
description: "Rejects a phone call with the ID specified in the request."
---

**POST** `/api/2.0/crm/voip/call/{callId:\w+}/reject`

Rejects a phone call with the ID specified in the request.

## Request body

### callId

**type:** `string`

Phone call ID

**Example**: `"string"`

## Request example

```json
{
  "callId": "string"
}
```

## Returns

Phone call information. A request that is not authenticated returns `401`.

### Id

**type:** `string`

**Example**: `"Id"`

### From

**type:** `string`

**Example**: `"From"`

### To

**type:** `string`

**Example**: `"To"`

### Status

**type:** `integer[]`

### AnsweredBy

**type:** `EmployeeWraper`

### DialDate

**type:** `string`

**Example**: `"2020-12-23T04:11:57.1649297Z"`

### DialDuration

**type:** `integer`

**Example**: `1`

### Cost

**type:** `number`

**Example**: `5.3`

### Contact

**type:** `ContactWrapper`

### Calls

**type:** `object`

### RecordUrl

**type:** `string`

**Example**: `"RecordUrl"`

### RecordDuration

**type:** `integer`

**Example**: `2`

## Response example

```json
{
  "Id": "Id",
  "From": "From",
  "To": "To",
  "Status": [
    1
  ],
  "AnsweredBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "DialDate": "2020-12-23T04:11:57.1649297Z",
  "DialDuration": 1,
  "Cost": 5.3,
  "Contact": {
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
  },
  "RecordUrl": "RecordUrl",
  "RecordDuration": 2
}
```
