---
title: "Set an entity custom field"
sidebar_label: "Set an entity custom field"
sidebar_class_name: api-method post
description: "Sets the selected custom field to the entity with type and ID specified in the request."
---

**POST** `/api/2.0/crm/{entityType:(contact|person|company|opportunity|case)}/{entityid:[0-9]+}/customfield/{fieldid:[0-9]+}`

Sets the selected custom field to the entity with type and ID specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Entity ID

**Example**: `0`

### fieldid

**type:** `integer`

Field ID

**Example**: `0`

### fieldValue

**type:** `string`

Field value

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0,
  "fieldid": 0,
  "fieldValue": "string"
}
```

## Returns

Custom field. A request that is not authenticated returns `401`.

### EntityId

**type:** `integer`

**Example**: `14523423`

### Label

**type:** `string`

**Example**: `"Birthdate"`

### FieldValue

**type:** `string`

**Example**: `"2020-12-08T17:37:04.5916406Z"`

### FieldType

**type:** `"TextField" | "TextArea" | "SelectBox" | "CheckBox" | "Heading" | "Date"`

[0 - TextField, 1 - TextArea, 2 - SelectBox, 3 - CheckBox, 4 - Heading, 5 - Date]

**Example**: `5`

### Position

**type:** `integer`

**Example**: `10`

### Mask

**type:** `string`

**Example**: `""`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "EntityId": 14523423,
  "Label": "Birthdate",
  "FieldValue": "2020-12-08T17:37:04.5916406Z",
  "FieldType": 5,
  "Position": 10,
  "Mask": "",
  "ID": 1234
}
```
