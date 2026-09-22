---
title: "Update a task status"
sidebar_label: "Update a task status"
sidebar_class_name: api-method put
description: "Updates a task status with a value specified in the request."
---

**PUT** `/api/2.0/project/status`

Updates a task status with a value specified in the request.

## Request body

### newStatus

**type:** `object`

New task status

## Request example

```json
{}
```

## Returns

Updated task status. A request that is not authenticated returns `401`.
