---
title: "Delete unused tags"
sidebar_label: "Delete unused tags"
sidebar_class_name: api-method delete
description: "Deletes all the unused tags from the entities with the type specified in the request."
---

**DELETE** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/tag/unused`

Deletes all the unused tags from the entities with the type specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string"
}
```

## Returns

Tags. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
