---
title: "Delete the specified event(s) from event series"
sidebar_label: "Delete the specified event(s) from event series"
sidebar_class_name: api-method delete
description: "Deletes the specified event(s) from the series of repeating events."
---

**DELETE** `/api/2.0/calendar/events/{eventId}/custom`

Deletes the specified event(s) from the series of repeating events.

## Path parameters

### eventId

**type:** `integer`

Event ID

**Example**: `0`

## Request body

### date

**type:** `string`

Date to be deleted from the repeating event

**Example**: `"string"`

### type

**type:** `integer`

The event deletion type: 0 - the single event, 1 - all the following events, 2 - all the event series.

**Example**: `0`

### fromCaldavServer

**type:** `boolean`

Defines if the request is from the CalDav server or not

**Example**: `true`

### uri

**type:** `string`

Current URI

**Example**: `"string"`

## Request example

```json
{
  "date": "string",
  "type": 0,
  "fromCaldavServer": true,
  "uri": "string"
}
```

## Returns

Updated event series collection. A request that is not authenticated returns `401`.

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
