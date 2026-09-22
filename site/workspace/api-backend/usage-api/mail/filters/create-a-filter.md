---
title: "Create a filter"
sidebar_label: "Create a filter"
sidebar_class_name: api-method post
description: "Creates a new filter with the parameters specified in the request."
---

**POST** `/api/2.0/mail/filters`

Creates a new filter with the parameters specified in the request.

## Request body

### filter

**type:** `object`

Filter parameters: ID, name, position, enabled, conditions, actions, options

## Request example

```json
{}
```

## Returns

Filter. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `1`

### Name

**type:** `string`

**Example**: `"name"`

### Position

**type:** `integer`

**Example**: `2`

### Enabled

**type:** `boolean`

**Example**: `true`

### Conditions

**type:** `MailSieveFilterConditionData[]`

### Actions

**type:** `MailSieveFilterActionData[]`

### Options

**type:** `MailSieveFilterOptionsData`

## Response example

```json
{
  "Id": 1,
  "Name": "name",
  "Position": 2,
  "Enabled": true,
  "Conditions": [
    {
      "Key": 1,
      "Operation": 1,
      "Value": "value"
    }
  ],
  "Actions": [
    {
      "Action": 1,
      "Data": "data"
    }
  ],
  "Options": {
    "MatchMultiConditions": 1,
    "ApplyTo": {
      "Folders": [
        1
      ],
      "Mailboxes": [
        1
      ],
      "WithAttachments": 1
    },
    "IgnoreOther": true
  }
}
```
