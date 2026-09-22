---
title: "Update a task"
sidebar_label: "Update a task"
sidebar_class_name: api-method put
description: "Updates the existing task with the parameters specified in the request."
---

**PUT** `/api/2.0/calendar/icstodo`

Updates the existing task with the parameters specified in the request.

## Request body

### todoId

**type:** `string`

Task ID

**Example**: `"string"`

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

### ics

**type:** `string`

Task in the iCal format

**Example**: `"string"`

### fromCalDavServer

**type:** `boolean`

Defines if the request is from the CalDav server or not

**Example**: `true`

## Request example

```json
{
  "todoId": "string",
  "calendarId": "string",
  "ics": "string",
  "fromCalDavServer": true
}
```

## Returns

Updated task. A request that is not authenticated returns `401`.

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
