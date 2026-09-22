---
title: "Add a tag to cases"
sidebar_label: "Add a tag to cases"
sidebar_class_name: api-method post
description: "Adds the selected tag to the group of cases with the parameters specified in the request."
---

**POST** `/api/2.0/crm/case/filter/taglist`

Adds the selected tag to the group of cases with the parameters specified in the request.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### isClosed

**type:** `boolean[]`

Case status: closed or not

### tags

**type:** `string[]`

Case tags

### tagName

**type:** `string`

Tag name

**Example**: `"string"`

## Request example

```json
{
  "contactid": 0,
  "isClosed": [
    true
  ],
  "tags": [
    "string"
  ],
  "tagName": "string"
}
```

## Returns

Tag. A request that is not authenticated returns `401`.
