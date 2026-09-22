---
title: "Delete a task category"
sidebar_label: "Delete a task category"
sidebar_class_name: api-method delete
description: "Deletes a task category with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/task/category/{categoryid:[0-9]+}`

Deletes a task category with the ID specified in the request.

## Request body

### categoryid

**type:** `integer`

Task category ID

**Example**: `0`

### newcategoryid

**type:** `integer`

Task category ID to replace the deleted category in the tasks with the current task category

**Example**: `0`

## Request example

```json
{
  "categoryid": 0,
  "newcategoryid": 0
}
```

## Returns

Task category. A request that is not authenticated returns `401`.

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
