---
title: "Update a storage"
sidebar_label: "Update a storage"
sidebar_class_name: api-method put
description: "Updates a storage with the parameters specified in the request."
---

**PUT** `/api/2.0/settings/storage`

Updates a storage with the parameters specified in the request.

## Request body

### module

**type:** `string`

Storage name

**Example**: `"string"`

### props

**type:** `object[]`

New storage properties

## Request example

```json
{
  "module": "string",
  "props": [
    {}
  ]
}
```

## Returns

Updated storage. A request that is not authenticated returns `401`.

### Module

**type:** `string`

**Example**: `"Module"`

### Props

**type:** `object`

**Example**: `"Props"`

## Response example

```json
{
  "Module": "Module",
  "Props": "Props"
}
```
