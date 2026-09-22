---
title: "Get missed calls"
sidebar_label: "Get missed calls"
sidebar_class_name: api-method get
description: "Returns a list of all the missed calls."
---

**GET** `/api/2.0/crm/voip/call/missed`

Returns a list of all the missed calls.

## Returns

List of missed calls. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
