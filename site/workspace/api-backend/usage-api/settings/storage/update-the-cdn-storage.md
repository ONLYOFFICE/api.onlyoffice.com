---
title: "Update the CDN storage"
sidebar_label: "Update the CDN storage"
sidebar_class_name: api-method put
description: "Updates the CDN storage with the parameters specified in the request."
---

**PUT** `/api/2.0/settings/storage/cdn`

Updates the CDN storage with the parameters specified in the request.

## Request body

### module

**type:** `string`

CDN storage name

**Example**: `"string"`

### props

**type:** `object[]`

New CDN storage properties

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

Updated CDN storage. A request that is not authenticated returns `401`.

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
