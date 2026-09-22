---
title: "Get preview"
sidebar_label: "Get preview"
sidebar_class_name: api-method post
description: "Returns the preview information about the specified category from the community section."
---

**POST** `/api/2.0/community/preview`

Returns the preview information about the specified category from the community section.

## Request body

### title

**type:** `string`

Category title

**Example**: `"string"`

### content

**type:** `string`

Category content

**Example**: `"string"`

## Request example

```json
{
  "title": "string",
  "content": "string"
}
```

## Returns

Preview information. A request that is not authenticated returns `401`.
