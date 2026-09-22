---
title: "Get contacts by contact information"
sidebar_label: "Get contacts by contact information"
sidebar_class_name: api-method get
description: "Returns a list of mail contacts with the contact information specified in the request."
---

**GET** `/api/2.0/mail/contacts/bycontactinfo`

Returns a list of mail contacts with the contact information specified in the request.

## Request body

### infoType

**type:** `integer`

Information type

**Example**: `0`

### data

**type:** `string`

Contact data

**Example**: `"string"`

### isPrimary

**type:** `boolean[]`

Contact importance: primary or not

## Request example

```json
{
  "infoType": 0,
  "data": "string",
  "isPrimary": [
    true
  ]
}
```

## Returns

List of filtered contacts. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "ContactId": 1234,
    "Name": "name",
    "Description": "description",
    "Emails": [
      {
        "Id": 1234,
        "Value": "value",
        "IsPrimary": true
      }
    ],
    "PhoneNumbers": [
      {
        "Id": 1234,
        "Value": "value",
        "IsPrimary": true
      }
    ],
    "Type": 1234,
    "SmallFotoUrl": "smallFotoUrl",
    "MediumFotoUrl": "mediumFotoUrl"
  }
]
```
