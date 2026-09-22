---
title: "Get the shared link"
sidebar_label: "Get the shared link"
sidebar_class_name: api-method put
description: "Returns an external link to the shared file with the ID specified in the request."
---

**PUT** `/api/2.0/files/{fileId}/sharedlink`

Returns an external link to the shared file with the ID specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### share

**type:** `integer`

Sharing rights

**Example**: `0`

## Request example

```json
{
  "share": 0
}
```

## Returns

Shared file link. A request that is not authenticated returns `401`.
