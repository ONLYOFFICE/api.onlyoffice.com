---
title: "Check the document service URL"
sidebar_label: "Check the document service URL"
sidebar_class_name: api-method put
description: "Checks the document service location."
---

**PUT** `/api/2.0/files/docservice`

Checks the document service location.

## Request body

### docServiceUrl

**type:** `string`

The address of Document Server

**Example**: `"string"`

### docServiceUrlInternal

**type:** `string`

The address of Document Server in the local private network

**Example**: `"string"`

### docServiceUrlPortal

**type:** `string`

The address of Community Server

**Example**: `"string"`

## Request example

```json
{
  "docServiceUrl": "string",
  "docServiceUrlInternal": "string",
  "docServiceUrlPortal": "string"
}
```

## Returns

Document service information. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
