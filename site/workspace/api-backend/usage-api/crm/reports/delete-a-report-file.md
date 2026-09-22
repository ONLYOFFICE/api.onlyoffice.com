---
title: "Delete a report file"
sidebar_label: "Delete a report file"
sidebar_class_name: api-method delete
description: "Deletes a report file with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/report/file/{fileid:[0-9]+}`

Deletes a report file with the ID specified in the request.

## Request body

### fileid

**type:** `integer`

File ID

**Example**: `0`

## Request example

```json
{
  "fileid": 0
}
```
