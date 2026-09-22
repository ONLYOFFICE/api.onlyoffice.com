---
title: "Create a history category"
sidebar_label: "Create a history category"
sidebar_class_name: api-method post
description: "Creates a new history category with the parameters (title, description, etc.) specified in the request."
---

**POST** `/api/2.0/crm/history/category`

Creates a new history category with the parameters (title, description, etc.) specified in the request.

## Request body

### title

**type:** `string`

History category title

**Example**: `"string"`

### description

**type:** `string`

History category description

**Example**: `"string"`

### imageName

**type:** `string`

Image name of the history category

**Example**: `"string"`

### sortOrder

**type:** `integer`

History category order

**Example**: `0`

## Request example

```json
{
  "title": "string",
  "description": "string",
  "imageName": "string",
  "sortOrder": 0
}
```

## Returns

History category. A request that is not authenticated returns `401`.

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
