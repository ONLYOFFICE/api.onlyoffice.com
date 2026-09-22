---
title: "Create a contact type"
sidebar_label: "Create a contact type"
sidebar_class_name: api-method post
description: "Creates a new contact type with the parameters specified in the request."
---

**POST** `/api/2.0/crm/contact/type`

Creates a new contact type with the parameters specified in the request.

## Request body

### title

**type:** `string`

Contact type title

**Example**: `"string"`

### sortOrder

**type:** `integer`

Contact type sort order

**Example**: `0`

## Request example

```json
{
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
