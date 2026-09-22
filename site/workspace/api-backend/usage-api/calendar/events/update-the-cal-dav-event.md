---
title: "Update the CalDav event"
sidebar_label: "Update the CalDav event"
sidebar_class_name: api-method put
description: "Updates the existing CalDav event in the calendar with the ID specified in the request."
---

**PUT** `/api/2.0/calendar/caldavevent`

Updates the existing CalDav event in the calendar with the ID specified in the request.

## Request body

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

### uid

**type:** `string`

Event UID

**Example**: `"string"`

### alert

**type:** `integer`

Defines how many minutes before the event a reminder will be displayed

**Example**: `0`

### responsibles

**type:** `string[]`

Task responsibles

## Request example

```json
{
  "calendarId": "string",
  "uid": "string",
  "alert": 0,
  "responsibles": [
    "string"
  ]
}
```

## Returns

Task awaiter. A request that is not authenticated returns `401`.
