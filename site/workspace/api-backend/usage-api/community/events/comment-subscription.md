---
title: "Comment subscription"
sidebar_label: "Comment subscription"
sidebar_class_name: api-method post
description: "Subscribes to or unsubscribes from the comments of the event with the ID specified in the request."
---

**POST** `/api/2.0/community/event/{feedid}/subscribe`

Subscribes to or unsubscribes from the comments of the event with the ID specified in the request.

## Path parameters

### feedid

**type:** `string`

Feed ID

**Example**: `"string"`

## Request body

### isSubscribe

**type:** `boolean`

Subscribes to the event comments or unsubscribes from them

**Example**: `true`

## Request example

```json
{
  "isSubscribe": true
}
```

## Returns

Boolean value: true means that the user is subscribed to the event comments. A request that is not authenticated returns `401`.
