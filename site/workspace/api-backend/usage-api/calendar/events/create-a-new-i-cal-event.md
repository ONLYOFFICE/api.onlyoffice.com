---
title: "Create a new iCal event"
sidebar_label: "Create a new iCal event"
sidebar_class_name: api-method post
description: "Creates a new iCal event in the selected calendar with the parameters specified in the request."
---

**POST** `/api/2.0/calendar/icsevent`

Creates a new iCal event in the selected calendar with the parameters specified in the request.

## Request body

### calendarId

**type:** `integer`

Calendar ID

**Example**: `0`

### ics

**type:** `string`

Event in the iCal format

**Example**: `"string"`

### alertType

**type:** `integer`

Event notification type

**Example**: `0`

### sharingOptions

**type:** `SharingParam[]`

Event sharing access parameters

### eventUid

**type:** `string`

Event UID

**Example**: `"string"`

## Request example

```json
{
  "calendarId": 0,
  "ics": "string",
  "alertType": 0,
  "sharingOptions": [
    {}
  ],
  "eventUid": "string"
}
```

## Returns

Event. A request that is not authenticated returns `401`.

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
