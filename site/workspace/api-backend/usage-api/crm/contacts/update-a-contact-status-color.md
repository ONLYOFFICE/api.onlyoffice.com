---
title: "Update a contact status color"
sidebar_label: "Update a contact status color"
sidebar_class_name: api-method put
description: "Updates a color of the selected contact status with a new color specified in the request."
---

**PUT** `/api/2.0/crm/contact/status/{id:[0-9]+}/color`

Updates a color of the selected contact status with a new color specified in the request.

## Request body

### id

**type:** `integer`

Contact status ID

**Example**: `0`

### color

**type:** `string`

New contact status color

**Example**: `"string"`

## Request example

```json
{
  "id": 0,
  "color": "string"
}
```

## Returns

Contact status with a new color. A request that is not authenticated returns `401`.

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
