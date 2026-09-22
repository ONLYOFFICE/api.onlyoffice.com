---
title: "Check the task subscription"
sidebar_label: "Check the task subscription"
sidebar_class_name: api-method get
description: "Checks the subscription to the notifications about the actions performed with the selected task."
---

**GET** `/api/2.0/project/task/{taskid:[0-9]+}/subscribe`

Checks the subscription to the notifications about the actions performed with the selected task.

## Request body

### taskid

**type:** `integer`

Task ID

**Example**: `0`

## Request example

```json
{
  "taskid": 0
}
```

## Returns

Boolean value: true - subscribed, false - unsubscribed. A request that is not authenticated returns `401`.
