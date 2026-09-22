---
title: "Get the iCal event by ID"
sidebar_label: "Get the iCal event by ID"
sidebar_class_name: api-method get
description: "Returns the iCal event by its ID from the history."
---

**GET** `/api/2.0/calendar/events/{eventId}/historybyid`

Returns the iCal event by its ID from the history.

## Path parameters

### eventId

**type:** `integer`

Event ID

**Example**: `0`

## Returns

Event history. A request that is not authenticated returns `401`.

### CalendarId

**type:** `integer`

**Example**: `1`

### EventUid

**type:** `string`

**Example**: `"uid1@onlyoffice.com"`

### EventId

**type:** `integer`

**Example**: `1`

### MergedIcs

**type:** `string`

**Example**: `"BEGIN:VCALENDAR\n            VERSION:2.0\n            PRODID:onlyoffice.com\n            BEGIN:VEVENT\n            UID:uid1@onlyoffice.com\n            DTSTAMP:19970714T170000Z\n            ORGANIZER;CN=John Doe:MAILTO:john.doe@example.com\n            DTSTART:19970714T170000Z\n            DTEND:19970715T035959Z\n            SUMMARY:Bastille Day Party\n            END:VEVENT\n            END:VCALENDAR"`

### CanEdit

**type:** `boolean`

**Example**: `true`

### CanNotify

**type:** `boolean`

**Example**: `true`

### Ics

**type:** `string`

**Example**: `"some text"`

### TimeZoneInfo

**type:** `TimeZoneWrapper`

### CalendarName

**type:** `string`

**Example**: `"Calendar name"`

## Response example

```json
{
  "CalendarId": 1,
  "EventUid": "uid1@onlyoffice.com",
  "EventId": 1,
  "MergedIcs": "BEGIN:VCALENDAR\n            VERSION:2.0\n            PRODID:onlyoffice.com\n            BEGIN:VEVENT\n            UID:uid1@onlyoffice.com\n            DTSTAMP:19970714T170000Z\n            ORGANIZER;CN=John Doe:MAILTO:john.doe@example.com\n            DTSTART:19970714T170000Z\n            DTEND:19970715T035959Z\n            SUMMARY:Bastille Day Party\n            END:VEVENT\n            END:VCALENDAR",
  "CanEdit": true,
  "CanNotify": true,
  "Ics": "some text",
  "TimeZoneInfo": {
    "Name": "UTC",
    "Id": "UTC",
    "Offset": 0
  },
  "CalendarName": "Calendar name"
}
```
