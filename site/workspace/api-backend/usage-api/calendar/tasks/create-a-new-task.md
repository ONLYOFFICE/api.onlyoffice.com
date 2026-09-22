---
title: "Create a new task"
sidebar_label: "Create a new task"
sidebar_class_name: api-method post
description: "Creates a new task in the selected calendar with the parameters specified in the request."
---

**POST** `/api/2.0/calendar/icstodo`

Creates a new task in the selected calendar with the parameters specified in the request.

## Request body

### ics

**type:** `string`

Task in the iCal format

**Example**: `"string"`

### todoUid

**type:** `string`

Task UID

**Example**: `"string"`

## Request example

```json
{
  "ics": "string",
  "todoUid": "string"
}
```

## Returns

Task. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": "1",
    "Uid": "123wda",
    "CalendarId": "calendarID",
    "Name": "Todo Name",
    "Description": "Todo Description",
    "Start": "2020-12-01T06:36:10.8645482Z",
    "Completed": "2020-12-01T06:36:10.8645482Z",
    "Owner": {
      "Id": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
      "Name": "John Smith"
    }
  }
]
```
