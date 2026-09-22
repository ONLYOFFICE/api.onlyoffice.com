---
title: "Delete a tag from entities"
sidebar_label: "Delete a tag from entities"
sidebar_class_name: api-method delete
description: "Deletes the selected tag from the entities with the type specified in the request."
---

**DELETE** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/tag`

Deletes the selected tag from the entities with the type specified in the request.

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
