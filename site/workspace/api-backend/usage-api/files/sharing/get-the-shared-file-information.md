---
title: "Get the shared file information"
sidebar_label: "Get the shared file information"
sidebar_class_name: api-method get
description: "Returns the detailed information about the shared file with the ID specified in the request."
---

**GET** `/api/2.0/files/file/{fileId}/share`

Returns the detailed information about the shared file with the ID specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Returns

Shared file information. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
