---
title: "Get file download link"
sidebar_label: "Get file download link"
sidebar_class_name: api-method get
description: "Returns a link to download a file with the ID specified in the request."
---

**GET** `/api/2.0/files/file/{fileId}/presigneduri`

Returns a link to download a file with the ID specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Returns

File download link. A request that is not authenticated returns `401`.
