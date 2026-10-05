---
title: "Get migrations"
sidebar_label: "Get migrations"
sidebar_class_name: api-method get
description: "Returns all the available migrations."
---

**GET** `/api/2.0/migration/list`

Returns all the available migrations.

## Returns

List of migrations. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
