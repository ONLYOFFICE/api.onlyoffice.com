---
title: "Update the order of custom fields"
sidebar_label: "Update the order of custom fields"
sidebar_class_name: api-method put
description: "Updates the order of the custom fields with a list specified in the request."
---

**PUT** `/api/2.0/crm/{entityType:(contact|person|company|opportunity|case)}/customfield/reorder`

Updates the order of the custom fields with a list specified in the request.

## Request body

### fieldids

**type:** `integer[]`

List of custom field IDs

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

## Request example

```json
{
  "fieldids": [
    0
  ],
  "entityType": "string"
}
```

## Returns

Custom fields in the new order. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
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
