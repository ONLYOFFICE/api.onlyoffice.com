---
title: "Get the shared folder information"
sidebar_label: "Get the shared folder information"
sidebar_class_name: api-method get
description: "Returns the detailed information about the shared folder with the ID specified in the request."
---

**GET** `/api/2.0/files/folder/{folderId}/share`

Returns the detailed information about the shared folder with the ID specified in the request.

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Returns

Shared folder information. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
