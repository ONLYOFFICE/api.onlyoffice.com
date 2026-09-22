---
title: "Birthday subscription"
sidebar_label: "Birthday subscription"
sidebar_class_name: api-method post
description: "Subscribes to or unsubscribes from the birthday of the user with the ID specified in the request."
---

**POST** `/api/2.0/people/birthdays/reminder`

Subscribes to or unsubscribes from the birthday of the user with the ID specified in the request.

## Request body

### userid

**type:** `string`

User ID

**Example**: `"string"`

### onRemind

**type:** `boolean`

Defines if the user will be notified about another user's birthday or not

**Example**: `true`

## Request example

```json
{
  "userid": "string",
  "onRemind": true
}
```

## Returns

Bool value: true means that the user will get a notification. A request that is not authenticated returns `401`.
