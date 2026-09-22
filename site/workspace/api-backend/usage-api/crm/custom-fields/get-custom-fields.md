---
title: "Get custom fields"
sidebar_label: "Get custom fields"
sidebar_class_name: api-method get
description: "Returns a list of descriptions for all the existing custom fields."
---

**GET** `/api/2.0/crm/{entityType:(contact|person|company|opportunity|case)}/customfield/definitions`

Returns a list of descriptions for all the existing custom fields.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string"
}
```

## Returns

List of custom fields. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "RelativeItemsCount": 0,
    "EntityId": 14523423,
    "Label": "Birthdate",
    "FieldValue": "2020-12-08T17:37:04.5916406Z",
    "FieldType": 5,
    "Position": 10,
    "Mask": "",
    "ID": 1234
  }
]
```
