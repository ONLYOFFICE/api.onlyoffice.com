---
title: "Get subscriptions"
sidebar_label: "Get subscriptions"
sidebar_class_name: api-method get
description: "Returns a list of all the subscriptions available to the current user."
---

**GET** `/api/2.0/calendar/subscriptions`

Returns a list of all the subscriptions available to the current user.

**Note**: Please note that the list of events in the response will be empty.

## Returns

List of subscriptions. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "IsAccepted": false,
    "IsNew": true,
    "Group": "Personal Calendars",
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
    "IsSubscription": false,
    "iCalUrl": "",
    "IsiCalStream": false,
    "IsHidden": false,
    "CanAlertModify": true,
    "IsShared": true,
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
