---
title: "Get contacts by search query"
sidebar_label: "Get contacts by search query"
sidebar_class_name: api-method get
description: "Returns a list of filtered mail contacts by the search query specified in the request."
---

**GET** `/api/2.0/mail/contacts`

Returns a list of filtered mail contacts by the search query specified in the request.

## Request body

### search

**type:** `string`

Text to search in contact names or emails

**Example**: `"string"`

### contactType

**type:** `integer[]`

Contact type

### pageSize

**type:** `integer[]`

Number of contacts on the page

### fromIndex

**type:** `integer`

Page number

**Example**: `0`

### sortorder

**type:** `string`

Sort order by name. String parameter: "ascending" or "descending"

**Example**: `"string"`

## Request example

```json
{
  "search": "string",
  "contactType": [
    0
  ],
  "pageSize": [
    0
  ],
  "fromIndex": 0,
  "sortorder": "string"
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
