---
title: "Reindex a page"
sidebar_label: "Reindex a page"
sidebar_class_name: api-method post
description: "Reindexes a page during the search process."
---

**POST** `/api/2.0/portal/search/reindex`

Reindexes a page during the search process.

## Request body

### name

**type:** `string`

Index name

**Example**: `"string"`

## Request example

```json
{
  "name": "string"
}
```

## Returns

Search information. A request that is not authenticated returns `401`.
