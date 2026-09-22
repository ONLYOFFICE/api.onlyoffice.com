---
title: "Create a new event in the default calendar"
sidebar_label: "Create a new event in the default calendar"
sidebar_class_name: api-method post
description: "Creates a new event in the default calendar with the parameters specified in the request."
---

**POST** `/api/2.0/calendar/event`

Creates a new event in the default calendar with the parameters specified in the request.

## Request body

### name

**type:** `string`

Event name

**Example**: `"string"`

### description

**type:** `string`

Event description

**Example**: `"string"`

### startDate

**type:** `string`

Event start date

**Example**: `"string"`

### endDate

**type:** `string`

Event end date

**Example**: `"string"`

### repeatType

**type:** `string`

Event repeat type (RRULE string in the iCal format)

**Example**: `"string"`

### alertType

**type:** `integer`

Event notification type

**Example**: `0`

### isAllDayLong

**type:** `boolean`

Event duration type: all day long or not

**Example**: `true`

### sharingOptions

**type:** `SharingParam[]`

Event sharing access parameters

## Request example

```json
{
  "name": "string",
  "description": "string",
  "startDate": "string",
  "endDate": "string",
  "repeatType": "string",
  "alertType": 0,
  "isAllDayLong": true,
  "sharingOptions": [
    {}
  ]
}
```

## Returns

Event list. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": "1",
    "Uid": "1234wda",
    "CalendarId": "calendarID",
    "Name": "Event Name",
    "Description": "Event Description",
    "AllDayLong": false,
    "Start": "2020-12-01T06:36:10.8645482Z",
    "End": "2020-12-01T06:36:10.8645482Z",
    "RepeatRule": "",
    "Alert": {
      "Type": -1
    },
    "IsShared": true,
    "CanUnsubscribe": true,
    "IsEditable": false,
    "Permissions": {
      "UserParams": [
        {
          "Id": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
          "Name": "John Smith"
        }
      ]
    },
    "Owner": {
      "Id": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
      "Name": "John Smith"
    },
    "Status": 0,
    "HasAttachments": true
  }
]
```
