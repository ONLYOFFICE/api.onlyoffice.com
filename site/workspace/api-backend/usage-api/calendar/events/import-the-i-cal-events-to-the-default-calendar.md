---
title: "Import the iCal events to the default calendar"
sidebar_label: "Import the iCal events to the default calendar"
sidebar_class_name: api-method post
description: "Imports the events from the iCal files to the default calendar."
---

**POST** `/api/2.0/calendar/import`

Imports the events from the iCal files to the default calendar.

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
