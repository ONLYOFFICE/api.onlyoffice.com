---
title: "Refresh CalDav calendar"
sidebar_label: "Refresh CalDav calendar"
sidebar_class_name: api-method put
description: "Refreshes the caldav calendar with the id specified in the request."
---

**PUT** `/api/2.0/calendar/refreshcaldavcalendar`

Refreshes the caldav calendar with the id specified in the request.

## Request body

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

### team

**type:** `string[]`

User list

## Request example

```json
{
  "calendarId": "string",
  "team": [
    "string"
  ]
}
```
