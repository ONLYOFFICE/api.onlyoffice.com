---
title: "Delete a task"
sidebar_label: "Delete a task"
sidebar_class_name: api-method delete
description: "Deletes a task with the ID specified in the request."
---

**DELETE** `/api/2.0/calendar/todos/{todoId}`

Deletes a task with the ID specified in the request.

## Path parameters

### todoId

**type:** `integer`

Task ID

**Example**: `0`

## Request body

### fromCaldavServer

**type:** `boolean`

Defines if the request is from the CalDav server or not

**Example**: `true`

## Request example

```json
{
  "fromCaldavServer": true
}
```

## Returns

Task awaiter. A request that is not authenticated returns `401`.
