---
title: "Create a tag"
sidebar_label: "Create a tag"
sidebar_class_name: api-method post
description: "Creates a tag for the selected entity with a tag name specified in the request."
---

**POST** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/tag`

Creates a tag for the selected entity with a tag name specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### tagName

**type:** `string`

Tag name

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string",
  "tagName": "string"
}
```

## Returns

Tag. A request that is not authenticated returns `401`.
