---
title: "Delete a contact status"
sidebar_label: "Delete a contact status"
sidebar_class_name: api-method delete
description: "Deletes a contact status with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/contact/status/{contactStatusid:[0-9]+}`

Deletes a contact status with the ID specified in the request.

## Request body

### contactStatusid

**type:** `integer`

Contact status ID

**Example**: `0`

## Request example

```json
{
  "contactStatusid": 0
}
```

## Returns

Contact status. A request that is not authenticated returns `401`.

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
