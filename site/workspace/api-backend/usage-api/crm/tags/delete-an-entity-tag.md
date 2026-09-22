---
title: "Delete an entity tag"
sidebar_label: "Delete an entity tag"
sidebar_class_name: api-method delete
description: "Deletes the selected tag from the entity with the type and ID specified in the request."
---

**DELETE** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/{entityid:[0-9]+}/tag`

Deletes the selected tag from the entity with the type and ID specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Entity ID

**Example**: `0`

### tagName

**type:** `string`

Tag name

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0,
  "tagName": "string"
}
```

## Returns

Tag. A request that is not authenticated returns `401`.
