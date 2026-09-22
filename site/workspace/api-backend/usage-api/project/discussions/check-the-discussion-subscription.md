---
title: "Check the discussion subscription"
sidebar_label: "Check the discussion subscription"
sidebar_class_name: api-method get
description: "Checks subscription to the notifications about the actions performed in the discussion with the selected message."
---

**GET** `/api/2.0/project/message/{messageid:[0-9]+}/subscribe`

Checks subscription to the notifications about the actions performed in the discussion with the selected message.

## Request body

### messageid

**type:** `integer`

Message ID

**Example**: `0`

## Request example

```json
{
  "messageid": 0
}
```

## Returns

Boolean value: true - subscibed, false - unsubscribed. A request that is not authenticated returns `401`.
