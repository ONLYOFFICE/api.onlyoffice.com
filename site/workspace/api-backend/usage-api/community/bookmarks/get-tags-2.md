---
title: "Get tags"
sidebar_label: "Get tags"
sidebar_class_name: api-method get
description: "Returns a list of all the bookmark tags with a number specifying the tag usage."
---

**GET** `/api/2.0/community/bookmark/tag`

Returns a list of all the bookmark tags with a number specifying the tag usage.

## Returns

List of tags. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Name": "Sample tag",
    "Count": 10
  }
]
```
