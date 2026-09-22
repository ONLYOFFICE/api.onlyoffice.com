---
title: "Delete a custom field"
sidebar_label: "Delete a custom field"
sidebar_class_name: api-method delete
description: "Deletes a custom field with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/{entityType:(contact|person|company|opportunity|case)}/customfield/{fieldid:[0-9]+}`

Deletes a custom field with the ID specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### fieldid

**type:** `integer`

Field ID

**Example**: `0`

## Request example

```json
{
  "entityType": "string",
  "fieldid": 0
}
```

## Returns

Custom field. A request that is not authenticated returns `401`.

### RelativeItemsCount

**type:** `integer`

**Example**: `0`

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
  "RelativeItemsCount": 0,
  "EntityId": 14523423,
  "Label": "Birthdate",
  "FieldValue": "2020-12-08T17:37:04.5916406Z",
  "FieldType": 5,
  "Position": 10,
  "Mask": "",
  "ID": 1234
}
```
