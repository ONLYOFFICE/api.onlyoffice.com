---
title: "Add a tag to the entity"
sidebar_label: "Add a tag to the entity"
sidebar_class_name: api-method post
description: "Adds the selected tag to the entity with the type and ID specified in the request."
---

**POST** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/{entityid:[0-9]+}/tag`

Adds the selected tag to the entity with the type and ID specified in the request.

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
