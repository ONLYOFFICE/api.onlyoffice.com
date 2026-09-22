---
title: "Search projects"
sidebar_label: "Search projects"
sidebar_class_name: api-method get
description: "Returns a list of all the projects matching the query specified in the request."
---

**GET** `/api/2.0/project/@search/{query}`

Returns a list of all the projects matching the query specified in the request.

## Path parameters

### query

**type:** `string`

Search query

**Example**: `"string"`

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
