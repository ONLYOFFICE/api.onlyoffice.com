---
title: "Update a custom field"
sidebar_label: "Update a custom field"
sidebar_class_name: api-method put
description: "Updates the selected custom field with the parameters (entity type, field title, type, etc.) specified in the request."
---

**PUT** `/api/2.0/crm/{entityType:(contact|person|company|opportunity|case)}/customfield/{id:[0-9]+}`

Updates the selected custom field with the parameters (entity type, field title, type, etc.) specified in the request.

**Note**: You can update field if there are no related elements. If such elements exist, only label and mask will be updated. Other parameters will be ignored.

## Request body

### id

**type:** `integer`

Custom field ID

**Example**: `0`

### entityType

**type:** `string`

New entity type

**Example**: `"string"`

### label

**type:** `string`

New field title

**Example**: `"string"`

### fieldType

**type:** `integer`

New custom field type

**Example**: `0`

### position

**type:** `integer`

New field position

**Example**: `0`

### mask

**type:** `string`

New mask

**Example**: `"string"`

## Request example

```json
{
  "id": 0,
  "entityType": "string",
  "label": "string",
  "fieldType": 0,
  "position": 0,
  "mask": "string"
}
```

## Returns

Updated custom field. A request that is not authenticated returns `401`.

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
