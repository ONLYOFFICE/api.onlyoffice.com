---
title: "Get a message preview"
sidebar_label: "Get a message preview"
sidebar_class_name: api-method post
description: "Returns a preview of the discussion message."
---

**POST** `/api/2.0/project/message/discussion/preview`

Returns a preview of the discussion message.

## Request body

### htmltext

**type:** `string`

Message text in the HTML format

**Example**: `"string"`

## Request example

```json
{
  "htmltext": "string"
}
```

## Returns

Message preview. A request that is not authenticated returns `401`.
