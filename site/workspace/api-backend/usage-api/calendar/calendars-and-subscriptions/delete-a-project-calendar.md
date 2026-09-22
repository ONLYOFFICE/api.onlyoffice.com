---
title: "Delete a project calendar"
sidebar_label: "Delete a project calendar"
sidebar_class_name: api-method delete
description: "Deletes a project calendar with the ID specified in the request."
---

**DELETE** `/api/2.0/calendar/caldavprojcal`

Deletes a project calendar with the ID specified in the request.

## Request body

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

### team

**type:** `string[]`

Project team

## Request example

```json
{
  "calendarId": "string",
  "team": [
    "string"
  ]
}
```

## Returns

Task awaiter. A request that is not authenticated returns `401`.
