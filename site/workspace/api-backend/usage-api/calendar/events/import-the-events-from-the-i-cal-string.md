---
title: "Import the events from the iCal string"
sidebar_label: "Import the events from the iCal string"
sidebar_class_name: api-method post
description: "Imports the events from the iCal string to the calendar with the ID specified in the request."
---

**POST** `/api/2.0/calendar/importIcs`

Imports the events from the iCal string to the calendar with the ID specified in the request.

## Request body

### calendarId

**type:** `integer`

Calendar ID

**Example**: `0`

### iCalString

**type:** `string`

The iCal string with the events to be imported

**Example**: `"string"`

## Request example

```json
{
  "calendarId": 0,
  "iCalString": "string"
}
```

## Returns

The number of imported events. A request that is not authenticated returns `401`.
