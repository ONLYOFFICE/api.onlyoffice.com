---
title: "Create an opportunity"
sidebar_label: "Create an opportunity"
sidebar_class_name: api-method post
description: "Creates an opportunity with the parameters specified in the request."
---

**POST** `/api/2.0/crm/opportunity`

Creates an opportunity with the parameters specified in the request.

## Request body

### contactid

**type:** `integer`

Opportunity primary contact ID

**Example**: `0`

### members

**type:** `integer[]`

Opportunity participants

### title

**type:** `string`

Opportunity title

**Example**: `"string"`

### description

**type:** `string`

Opportunity description

**Example**: `"string"`

### responsibleid

**type:** `string`

Opportunity responsible ID

**Example**: `"string"`

### bidType

**type:** `integer`

Bid type

**Example**: `0`

### bidValue

**type:** `number`

Amount of transactions

**Example**: `0`

### bidCurrencyAbbr

**type:** `string`

Currency (abbreviation)

**Example**: `"string"`

### perPeriodValue

**type:** `integer`

Amount per period

**Example**: `0`

### stageid

**type:** `integer`

Stage ID

**Example**: `0`

### successProbability

**type:** `integer`

Opportunity success probability

**Example**: `0`

### actualCloseDate

**type:** `string`

Actual opportunity closure date

**Example**: `"string"`

### expectedCloseDate

**type:** `string`

Expected opportunity closure date

**Example**: `"string"`

### customFieldList

**type:** `object[]`

Custom field list

### isPrivate

**type:** `boolean`

Opportunity privacy: private or not

**Example**: `true`

### accessList

**type:** `string[]`

List of users with access rights to the opportunity

### isNotify

**type:** `boolean`

Notifies users from the access list about the opportunity or not

**Example**: `true`

## Request example

```json
{
  "contactid": 0,
  "members": [
    0
  ],
  "title": "string",
  "description": "string",
  "responsibleid": "string",
  "bidType": 0,
  "bidValue": 0,
  "bidCurrencyAbbr": "string",
  "perPeriodValue": 0,
  "stageid": 0,
  "successProbability": 0,
  "actualCloseDate": "string",
  "expectedCloseDate": "string",
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

Opportunity. A request that is not authenticated returns `401`.

### CreateBy

**type:** `EmployeeWraper`

### Created

**type:** `string`

**Example**: `"2020-12-11T03:36:09.7011881Z"`

### Members

**type:** `ContactBaseWrapper[]`

### Contact

**type:** `ContactBaseWrapper`

### Title

**type:** `string`

**Example**: `"Hotel catalogue"`

### Description

**type:** `string`

**Example**: `"description"`

### Responsible

**type:** `EmployeeWraper`

### BidType

**type:** `"FixedBid" | "PerHour" | "PerDay" | "PerWeek" | "PerMonth" | "PerYear"`

[0 - FixedBid, 1 - PerHour, 2 - PerDay, 3 - PerWeek, 4 - PerMonth, 5 - PerYear]

**Example**: `0`

### BidValue

**type:** `number`

**Example**: `"1,1"`

### BidCurrency

**type:** `CurrencyInfoWrapper`

### PerPeriodValue

**type:** `integer`

**Example**: `1`

### Stage

**type:** `DealMilestoneBaseWrapper`

### SuccessProbability

**type:** `integer`

**Example**: `65`

### ActualCloseDate

**type:** `string`

**Example**: `"2020-12-11T03:36:09.7011881Z"`

### ExpectedCloseDate

**type:** `string`

**Example**: `"2020-12-11T03:36:09.7011881Z"`

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
```
