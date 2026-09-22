---
title: "Update a mail contact"
sidebar_label: "Update a mail contact"
sidebar_class_name: api-method put
description: "Updates a mail contact with the ID specified in the request."
---

**PUT** `/api/2.0/mail/contact/update`

Updates a mail contact with the ID specified in the request.

## Request body

### id

**type:** `integer`

Mail contact ID

**Example**: `0`

### name

**type:** `string`

New contact name

**Example**: `"string"`

### description

**type:** `string`

New contact description

**Example**: `"string"`

### emails

**type:** `string[]`

New list of contact emails

### phoneNumbers

**type:** `string[]`

New list of contact phone numbers

## Request example

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "emails": [
    "string"
  ],
  "phoneNumbers": [
    "string"
  ]
}
```

## Returns

Information about updated contact. A request that is not authenticated returns `401`.

### ContactId

**type:** `integer`

**Example**: `1234`

### Name

**type:** `string`

**Example**: `"name"`

### Description

**type:** `string`

**Example**: `"description"`

### Emails

**type:** `ContactInfo[]`

### PhoneNumbers

**type:** `ContactInfo[]`

### Type

**type:** `integer`

**Example**: `1234`

### SmallFotoUrl

**type:** `string`

**Example**: `"smallFotoUrl"`

### MediumFotoUrl

**type:** `string`

**Example**: `"mediumFotoUrl"`

## Response example

```json
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
```
