---
title: "Update a contact type"
sidebar_label: "Update a contact type"
sidebar_class_name: api-method put
description: "Updates the selected contact type with the parameters specified in the request."
---

**PUT** `/api/2.0/crm/contact/type/{id:[0-9]+}`

Updates the selected contact type with the parameters specified in the request.

## Request body

### id

**type:** `integer`

Contact type ID

**Example**: `0`

### title

**type:** `string`

New contact type title

**Example**: `"string"`

### sortOrder

**type:** `integer`

New contact type order

**Example**: `0`

## Request example

```json
{
  "id": 0,
  "title": "string",
  "sortOrder": 0
}
```

## Returns

Contact type. A request that is not authenticated returns `401`.

### RelativeItemsCount

**type:** `integer`

**Example**: `1`

### Title

**type:** `string`

**Example**: `"Title"`

### Description

**type:** `string`

**Example**: `"Description"`

### Color

**type:** `string`

**Example**: `"#a7fc00"`

### SortOrder

**type:** `integer`

**Example**: `1`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "RelativeItemsCount": 1,
  "Title": "Title",
  "Description": "Description",
  "Color": "#a7fc00",
  "SortOrder": 1,
  "ID": 1234
}
```
