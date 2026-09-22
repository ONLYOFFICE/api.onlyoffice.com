---
title: "Search events"
sidebar_label: "Search events"
sidebar_class_name: api-method get
description: "Returns a list of events matching the search query specified in the request with the event titles, dates of creation and update, event types, and authors."
---

**GET** `/api/2.0/community/event/@search/{query}`

Returns a list of events matching the search query specified in the request with the event titles, dates of creation and update, event types, and authors.

## Path parameters

### query

**type:** `string`

Search query

**Example**: `"string"`

## Returns

List of events. A request that is not authenticated returns `401`.

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
