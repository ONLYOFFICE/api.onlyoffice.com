---
title: "Open a file"
sidebar_label: "Open a file"
sidebar_class_name: api-method get
description: "Returns the initialization configuration of a file to open it in the editor."
---

**GET** `/api/2.0/files/file/{fileId}/openedit`

Returns the initialization configuration of a file to open it in the editor.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### version

**type:** `integer`

File version

**Example**: `0`

### doc

**type:** `string`

Shared token

**Example**: `"string"`

## Request example

```json
{
  "version": 0,
  "doc": "string"
}
```

## Returns

Configuration

### DocumentType

**type:** `string`

**Example**: `"documentType"`

### TypeString

**type:** `string`

**Example**: `"type"`

## Response example

```json
{
  "DocumentType": "documentType",
  "TypeString": "type"
}
```
