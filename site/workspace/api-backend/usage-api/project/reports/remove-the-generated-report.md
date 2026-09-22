---
title: "Remove the generated report"
sidebar_label: "Remove the generated report"
sidebar_class_name: api-method delete
description: "Removes the generated report file with the ID specified in the request."
---

**DELETE** `/api/2.0/project/report/files/{fileid:[0-9]+}`

Removes the generated report file with the ID specified in the request.

## Request body

### fileid

**type:** `integer`

Report file ID

**Example**: `0`

## Request example

```json
{
  "fileid": 0
}
```

## Returns

Generated report file. A request that is not authenticated returns `401`.
