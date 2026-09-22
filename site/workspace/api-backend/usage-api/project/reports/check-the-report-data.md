---
title: "Check the report data"
sidebar_label: "Check the report data"
sidebar_class_name: api-method post
description: "Checks the report data by the URI specified in the request."
---

**POST** `/api/2.0/project/report/create`

Checks the report data by the URI specified in the request.

## Request body

### uri

**type:** `string`

Report URI

**Example**: `"string"`

## Request example

```json
{
  "uri": "string"
}
```

## Returns

Report status. A request that is not authenticated returns `401`.
