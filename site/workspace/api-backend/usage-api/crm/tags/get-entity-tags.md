---
title: "Get entity tags"
sidebar_label: "Get entity tags"
sidebar_class_name: api-method get
description: "Returns a list of all the tags related to the entity with the ID and type specified in the request."
---

**GET** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/tag/{entityid:[0-9]+}`

Returns a list of all the tags related to the entity with the ID and type specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Entity ID

**Example**: `0`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0
}
```

## Returns

Tag. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
