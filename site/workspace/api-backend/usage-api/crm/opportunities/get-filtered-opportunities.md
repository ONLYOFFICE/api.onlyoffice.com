---
title: "Get filtered opportunities"
sidebar_label: "Get filtered opportunities"
sidebar_class_name: api-method get
description: "Returns a list of all the opportunities matching the parameters specified in the request."
---

**GET** `/api/2.0/crm/opportunity/filter`

Returns a list of all the opportunities matching the parameters specified in the request.

## Request body

### responsibleid

**type:** `string`

Opportunity responsible ID

**Example**: `"string"`

### opportunityStagesid

**type:** `integer`

Opportunity stage ID

**Example**: `0`

### tags

**type:** `string[]`

Opportunity tags

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### stageType

**type:** `integer[]`

Opportunity stage type

### contactAlsoIsParticipant

**type:** `boolean[]`

Participation status: take into account opportunities where the contact is a participant or not

### fromDate

**type:** `string`

Start date

**Example**: `"string"`

### toDate

**type:** `string`

End date

**Example**: `"string"`

## Request example

```json
{
  "responsibleid": "string",
  "opportunityStagesid": 0,
  "tags": [
    "string"
  ],
  "contactid": 0,
  "stageType": [
    0
  ],
  "contactAlsoIsParticipant": [
    true
  ],
  "fromDate": "string",
  "toDate": "string"
}
```

## Returns

List of opportunities. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "CreateBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Created": "2020-12-11T03:36:09.7011881Z",
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
    "Title": "Hotel catalogue",
    "Description": "description",
    "Responsible": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "BidType": 0,
    "BidValue": "1,1",
    "BidCurrency": {
      "Title": "Chinese Yuan",
      "Symbol": "¥",
      "Abbreviation": "CNY",
      "CultureName": "CN",
      "IsConvertable": true,
      "IsBasic": false
    },
    "PerPeriodValue": 1,
    "Stage": {
      "SuccessProbability": 20,
      "StageType": 0,
      "Title": "Title",
      "Description": "Description",
      "Color": "#a7fc00",
      "SortOrder": 1,
      "ID": 1234
    },
    "SuccessProbability": 65,
    "ActualCloseDate": "2020-12-11T03:36:09.7011881Z",
    "ExpectedCloseDate": "2020-12-11T03:36:09.7011881Z",
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
]
```
