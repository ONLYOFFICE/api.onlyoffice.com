---
title: "Update a task category"
sidebar_label: "Update a task category"
sidebar_class_name: api-method put
description: "Updates the selected task category with the parameters (title, description, etc.) specified in the request."
---

**PUT** `/api/2.0/crm/task/category/{id:[0-9]+}`

Updates the selected task category with the parameters (title, description, etc.) specified in the request.

## Request body

### id

**type:** `integer`

Task category ID

**Example**: `0`

### title

**type:** `string`

New task category title

**Example**: `"string"`

### description

**type:** `string`

New task category description

**Example**: `"string"`

### imageName

**type:** `string`

New image name of task category

**Example**: `"string"`

### sortOrder

**type:** `integer`

New task category order

**Example**: `0`

## Request example

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "imageName": "string",
  "sortOrder": 0
}
```

## Returns

Updated task category. A request that is not authenticated returns `401`.

### RelativeItemsCount

**type:** `integer`

**Example**: `1`

### ImagePath

**type:** `string`

**Example**: `"path to image"`

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
  "ImagePath": "path to image",
  "Title": "Title",
  "Description": "Description",
  "Color": "#a7fc00",
  "SortOrder": 1,
  "ID": 1234
}
```
