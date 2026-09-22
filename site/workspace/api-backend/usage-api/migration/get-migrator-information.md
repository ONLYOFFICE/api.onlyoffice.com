---
title: "Get migrator information"
sidebar_label: "Get migrator information"
sidebar_class_name: api-method post
description: "Returns the information about the migrators with the names specified in the request."
---

**POST** `/api/2.0/migration/migratorsInfo`

Returns the information about the migrators with the names specified in the request.

## Request body

### migratorsName

**type:** `string[]`

List of migrator names

## Request example

```json
{
  "migratorsName": [
    "string"
  ]
}
```

## Returns

List of migrator information. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
