---
title: "Get calendars"
sidebar_label: "Get calendars"
sidebar_class_name: api-method get
description: "Returns a list of calendars with the events for the current user in the selected period."
---

**GET** `/api/2.0/calendar/calendars/{startDate}/{endDate}`

Returns a list of calendars with the events for the current user in the selected period.

## Path parameters

### startDate

**type:** `string`

Period start date

**Example**: `"string"`

### endDate

**type:** `string`

Period end date

**Example**: `"string"`

## Returns

List of calendars with events. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "IsSubscription": false,
    "iCalUrl": "",
    "IsiCalStream": false,
    "IsHidden": false,
    "CanAlertModify": true,
    "IsShared": true,
    "Permissions": {
      "Data": {
        "AvailableOptions": [
          {
            "Id": "read",
            "Name": "Read only",
            "Default": true,
            "DefaultStyle": "read"
          }
        ],
        "Items": [
          {
            "ItemId": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
            "ItemName": "Everyone",
            "IsGroup": true,
            "CanEdit": true
          }
        ]
      },
      "UserParams": [
        {
          "Id": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
          "Name": "John Smith"
        }
      ]
    },
    "IsEditable": true,
    "TextColor": "#ffffff",
    "BackgroundColor": "#000000",
    "Description": "Calendar Description",
    "Title": "Calendar Name",
    "Id": "1",
    "IsTodo": "false",
    "Owner": {
      "Id": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
      "Name": "John Smith"
    },
    "Events": [
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
          "UserParams": []
        },
        "Owner": {
          "Id": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
          "Name": "John Smith"
        },
        "Status": 0,
        "HasAttachments": true
      }
    ],
    "Todos": [
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
    ],
    "DefaultAlertType": {
      "Type": -1
    },
    "TimeZoneInfo": {
      "Name": "UTC",
      "Id": "UTC",
      "Offset": 0
    },
    "CanEditTimeZone": false
  }
]
```
