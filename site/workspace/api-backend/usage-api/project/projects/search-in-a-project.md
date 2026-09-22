---
title: "Search in a project"
sidebar_label: "Search in a project"
sidebar_class_name: api-method get
description: "Returns the search results for a project containing the words/phrases matching the query specified in the request."
---

**GET** `/api/2.0/project/{id:[0-9]+}/@search/{query}`

Returns the search results for a project containing the words/phrases matching the query specified in the request.

## Path parameters

### query

**type:** `string`

Search query

**Example**: `"string"`

## Request body

### id

**type:** `integer`

Project ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

List of results. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Item": {
      "Id": "345",
      "EntityType": 0,
      "Title": "Sample title",
      "Description": "Sample desription",
      "Created": "2020-12-22T04:11:56.5308514Z"
    },
    "Owner": {
      "Id": "345",
      "EntityType": 0,
      "Title": "Sample title",
      "Description": "Sample desription",
      "Created": "2020-12-22T04:11:56.5308514Z"
    }
  }
]
```
