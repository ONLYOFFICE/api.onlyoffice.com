---
title: "Get entity custom fields"
sidebar_label: "Get entity custom fields"
sidebar_class_name: api-method get
description: "Returns a list of all the custom fields for the entity type and ID specified in the request."
---

**GET** `/api/2.0/crm/{entityType:(contact|person|company|opportunity|case)}/{entityid:[0-9]+}/customfield`

Returns a list of all the custom fields for the entity type and ID specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Entity ID

**Example**: `0`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0
}
```

## Returns

List of entity custom fields. A request that is not authenticated returns `401`.

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
