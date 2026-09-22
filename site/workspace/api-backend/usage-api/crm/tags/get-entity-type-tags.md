---
title: "Get entity type tags"
sidebar_label: "Get entity type tags"
sidebar_class_name: api-method get
description: "Returns a list of all the tags associated with the entity type specified in the request."
---

**GET** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/tag`

Returns a list of all the tags associated with the entity type specified in the request.

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

Tag. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Name": "Sample tag",
    "Count": 10
  }
]
```
