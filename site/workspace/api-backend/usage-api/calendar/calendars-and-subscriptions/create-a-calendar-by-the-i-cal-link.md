---
title: "Create a calendar by the iCal link"
sidebar_label: "Create a calendar by the iCal link"
sidebar_class_name: api-method post
description: "Creates a calendar by the link to the external iCal feed."
---

**POST** `/api/2.0/calendar/calendarUrl`

Creates a calendar by the link to the external iCal feed.

**Note**: Please note that the list of events in the response will be empty.

## Request body

### iCalUrl

**type:** `string`

Link to the external iCal feed

**Example**: `"string"`

### name

**type:** `string`

Calendar name

**Example**: `"string"`

### textColor

**type:** `string`

Event text color

**Example**: `"string"`

### backgroundColor

**type:** `string`

Event background name

**Example**: `"string"`

## Request example

```json
{
  "iCalUrl": "string",
  "name": "string",
  "textColor": "string",
  "backgroundColor": "string"
}
```

## Returns

Created calendar. A request that is not authenticated returns `401`.

### IsSubscription

**type:** `boolean`

**Example**: `false`

### iCalUrl

**type:** `string`

**Example**: `""`

### IsiCalStream

**type:** `boolean`

**Example**: `false`

### IsHidden

**type:** `boolean`

**Example**: `false`

### CanAlertModify

**type:** `boolean`

**Example**: `true`

### IsShared

**type:** `boolean`

**Example**: `true`

### Permissions

**type:** `CalendarPermissions`

### IsEditable

**type:** `boolean`

**Example**: `true`

### TextColor

**type:** `string`

**Example**: `"#ffffff"`

### BackgroundColor

**type:** `string`

**Example**: `"#000000"`

### Description

**type:** `string`

**Example**: `"Calendar Description"`

### Title

**type:** `string`

**Example**: `"Calendar Name"`

### Id

**type:** `string`

**Example**: `"1"`

### IsTodo

**type:** `integer`

**Example**: `"false"`

### Owner

**type:** `UserParams`

### Events

**type:** `EventWrapper[]`

### Todos

**type:** `TodoWrapper[]`

### DefaultAlertType

**type:** `EventAlertWrapper`

### TimeZoneInfo

**type:** `TimeZoneWrapper`

### CanEditTimeZone

**type:** `boolean`

**Example**: `false`

## Response example

```json
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
          "CanEdit": true,
          "SharingOption": {
            "Id": "read",
            "Name": "Read only",
            "Default": true,
            "DefaultStyle": "read"
          }
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
```
