---
title: "Get running mail operations"
sidebar_label: "Get running mail operations"
sidebar_class_name: api-method get
description: "Returns all the running mail operations."
---

**GET** `/api/2.0/mail/operations`

Returns all the running mail operations.

## Returns

List of running mail operations. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Completed": true,
    "Id": "Id",
    "Status": "Status",
    "Error": "Error",
    "Percents": 100,
    "Source": "Source",
    "OperationType": 1,
    "Operation": "Operation"
  }
]
```
