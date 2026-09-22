---
title: "Create a contact status"
sidebar_label: "Create a contact status"
sidebar_class_name: api-method post
description: "Creates a new contact status with the parameters (title, description, etc.) specified in the request."
---

**POST** `/api/2.0/crm/contact/status`

Creates a new contact status with the parameters (title, description, etc.) specified in the request.

## Request body

### title

**type:** `string`

Contact status title

**Example**: `"string"`

### description

**type:** `string`

Contact status description

**Example**: `"string"`

### color

**type:** `string`

Contact status color

**Example**: `"string"`

### sortOrder

**type:** `integer`

Contact status sort order

**Example**: `0`

## Request example

```json
{
  "title": "string",
  "description": "string",
  "color": "string",
  "sortOrder": 0
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
