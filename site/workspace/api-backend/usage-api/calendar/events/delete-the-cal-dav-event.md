---
title: "Delete the CalDav event"
sidebar_label: "Delete the CalDav event"
sidebar_class_name: api-method delete
description: "Deletes the CalDav event from the calendar with the ID specified in the request."
---

**DELETE** `/api/2.0/calendar/caldavevent`

Deletes the CalDav event from the calendar with the ID specified in the request.

## Request body

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

### uid

**type:** `string`

Event UID

**Example**: `"string"`

### responsibles

**type:** `string[]`

Task responsibles

## Request example

```json
{
  "calendarId": "string",
  "uid": "string",
  "responsibles": [
    "string"
  ]
}
```

## Returns

Task awaiter. A request that is not authenticated returns `401`.
