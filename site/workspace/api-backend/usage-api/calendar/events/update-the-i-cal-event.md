---
title: "Update the iCal event"
sidebar_label: "Update the iCal event"
sidebar_class_name: api-method put
description: "Updates the existing iCal event in the selected calendar with the ID specified in the request."
---

**PUT** `/api/2.0/calendar/icsevent`

Updates the existing iCal event in the selected calendar with the ID specified in the request.

## Request body

### eventId

**type:** `integer`

Event ID

**Example**: `0`

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

### ics

**type:** `string`

Event in the iCal format

**Example**: `"string"`

### alertType

**type:** `integer`

New event notification type

**Example**: `0`

### sharingOptions

**type:** `SharingParam[]`

New event sharing access parameters

### fromCalDavServer

**type:** `boolean`

Defines if the request is from the CalDav server or not

**Example**: `true`

### ownerId

**type:** `string`

New event owner ID

**Example**: `"string"`

## Request example

```json
{
  "eventId": 0,
  "calendarId": "string",
  "ics": "string",
  "alertType": 0,
  "sharingOptions": [
    {}
  ],
  "fromCalDavServer": true,
  "ownerId": "string"
}
```

## Returns

Updated event. A request that is not authenticated returns `401`.

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
