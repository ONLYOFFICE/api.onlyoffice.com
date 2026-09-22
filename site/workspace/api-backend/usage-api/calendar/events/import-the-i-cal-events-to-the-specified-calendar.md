---
title: "Import the iCal events to the specified calendar"
sidebar_label: "Import the iCal events to the specified calendar"
sidebar_class_name: api-method post
description: "Imports the events from the iCal files to the calendar with the ID specified in the request."
---

**POST** `/api/2.0/calendar/{calendarId}/import`

Imports the events from the iCal files to the calendar with the ID specified in the request.

## Path parameters

### calendarId

**type:** `integer`

Calendar ID

**Example**: `0`

## Request body

### files

**type:** `string[]`

The iCal files with the events

## Request example

```json
{
  "files": [
    "string"
  ]
}
```

## Returns

The number of imported events. A request that is not authenticated returns `401`.
