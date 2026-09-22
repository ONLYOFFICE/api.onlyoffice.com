---
title: "Track file editing"
sidebar_label: "Track file editing"
sidebar_class_name: api-method get
description: "Tracks file changes when editing."
---

**GET** `/api/2.0/files/file/{fileId}/trackeditfile`

Tracks file changes when editing.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### tabId

**type:** `string`

Tab ID

**Example**: `"string"`

### docKeyForTrack

**type:** `string`

Document key for tracking

**Example**: `"string"`

### doc

**type:** `string`

Shared token

**Example**: `"string"`

### isFinish

**type:** `boolean`

Specifies whether to finish file tracking or not

**Example**: `true`

## Request example

```json
{
  "tabId": "string",
  "docKeyForTrack": "string",
  "doc": "string",
  "isFinish": true
}
```

## Returns

File changes. A request that is not authenticated returns `401`.
