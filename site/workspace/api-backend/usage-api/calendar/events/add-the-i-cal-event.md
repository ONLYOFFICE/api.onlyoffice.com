---
title: "Add the iCal event"
sidebar_label: "Add the iCal event"
sidebar_class_name: api-method post
description: "Adds the iCal event to the calendar specified in the request."
---

**POST** `/api/2.0/calendar/outsideevent`

Adds the iCal event to the calendar specified in the request.

## Request body

### calendarGuid

**type:** `string`

Calendar GUID

**Example**: `"string"`

### eventGuid

**type:** `string`

Event GUID

**Example**: `"string"`

### ics

**type:** `string`

Event in the iCal format

**Example**: `"string"`

## Request example

```json
{
  "calendarGuid": "string",
  "eventGuid": "string",
  "ics": "string"
}
```

## Returns

Task awaiter. A request that is not authenticated returns `401`.
