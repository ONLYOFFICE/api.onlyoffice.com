---
title: "Create a mail contact"
sidebar_label: "Create a mail contact"
sidebar_class_name: api-method post
description: "Creates a mail contact with the parameters specified in the request."
---

**POST** `/api/2.0/mail/contact/add`

Creates a mail contact with the parameters specified in the request.

## Request body

### name

**type:** `string`

Contact name

**Example**: `"string"`

### description

**type:** `string`

Contact description

**Example**: `"string"`

### emails

**type:** `string[]`

List of contact emails

### phoneNumbers

**type:** `string[]`

List of contact phone numbers

## Request example

```json
{
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

Information about created contact. A request that is not authenticated returns `401`.

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
