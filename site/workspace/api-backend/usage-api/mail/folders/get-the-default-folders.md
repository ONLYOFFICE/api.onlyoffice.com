---
title: "Get the default folders"
sidebar_label: "Get the default folders"
sidebar_class_name: api-method get
description: "Returns a list of default folders."
---

**GET** `/api/2.0/mail/folders`

Returns a list of default folders.

## Returns

List of default folders. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 1,
    "UnreadCount": 1,
    "UnreadMessagesCount": 1,
    "TotalCount": 1,
    "TotalMessgesCount": 1,
    "TimeModified": "2020-10-01T17:04:32.0000000"
  }
]
```
