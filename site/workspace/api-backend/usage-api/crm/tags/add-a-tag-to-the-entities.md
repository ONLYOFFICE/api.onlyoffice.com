---
title: "Add a tag to the entities"
sidebar_label: "Add a tag to the entities"
sidebar_class_name: api-method post
description: "Adds a tag to the entities with the IDs specified in the request."
---

**POST** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/taglist`

Adds a tag to the entities with the IDs specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### entityid

**type:** `integer[]`

List of entity IDs

### tagName

**type:** `string`

Tag name

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string",
  "entityid": [
    0
  ],
  "tagName": "string"
}
```

## Returns

Tag. A request that is not authenticated returns `401`.
