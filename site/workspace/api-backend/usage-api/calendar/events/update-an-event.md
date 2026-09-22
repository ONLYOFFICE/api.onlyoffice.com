---
title: "Update an event"
sidebar_label: "Update an event"
sidebar_class_name: api-method put
description: "Updates the existing event in the selected calendar with the parameters specified in the request."
---

**PUT** `/api/2.0/calendar/{calendarId}/{eventId}`

Updates the existing event in the selected calendar with the parameters specified in the request.

## Path parameters

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

### eventId

**type:** `integer`

Event ID

**Example**: `0`

## Request body

### name

**type:** `string`

New event name

**Example**: `"string"`

### description

**type:** `string`

New event description

**Example**: `"string"`

### startDate

**type:** `string`

New event start date

**Example**: `"string"`

### endDate

**type:** `string`

New event end date

**Example**: `"string"`

### repeatType

**type:** `string`

New event repeat type (RRULE string in the iCal format)

**Example**: `"string"`

### alertType

**type:** `integer`

New event notification type

**Example**: `0`

### isAllDayLong

**type:** `boolean`

New event duration type: all day long or not

**Example**: `true`

### sharingOptions

**type:** `SharingParam[]`

New event sharing access parameters

### status

**type:** `integer`

New event status

**Example**: `0`

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
  ],
  "status": 0
}
```

## Returns

Updated list of events. A request that is not authenticated returns `401`.

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
