---
title: "Get total project time"
sidebar_label: "Get total project time"
sidebar_class_name: api-method get
description: "Returns the total time spent on the project with the ID specified in the request."
---

**GET** `/api/2.0/project/{id:[0-9]+}/time/total`

Returns the total time spent on the project with the ID specified in the request.

## Request body

### id

**type:** `integer`

Project ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

Project time. A request that is not authenticated returns `401`.
