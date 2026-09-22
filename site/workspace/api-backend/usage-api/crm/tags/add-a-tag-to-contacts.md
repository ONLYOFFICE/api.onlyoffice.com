---
title: "Add a tag to contacts"
sidebar_label: "Add a tag to contacts"
sidebar_class_name: api-method post
description: "Adds the selected tag to the group of contacts with the parameters specified in the request."
---

**POST** `/api/2.0/crm/contact/filter/taglist`

Adds the selected tag to the group of contacts with the parameters specified in the request.

## Request body

### tags

**type:** `string[]`

Contact tags

### contactStage

**type:** `integer`

Contact stage ID (warmth)

**Example**: `0`

### contactType

**type:** `integer`

Contact type ID

**Example**: `0`

### contactListView

**type:** `integer`

Contact list view

**Example**: `0`

### fromDate

**type:** `string`

Start date

**Example**: `"string"`

### toDate

**type:** `string`

End date

**Example**: `"string"`

### tagName

**type:** `string`

Tag name

**Example**: `"string"`

## Request example

```json
{
  "tags": [
    "string"
  ],
  "contactStage": 0,
  "contactType": 0,
  "contactListView": 0,
  "fromDate": "string",
  "toDate": "string",
  "tagName": "string"
}
```

## Returns

Tag. A request that is not authenticated returns `401`.
