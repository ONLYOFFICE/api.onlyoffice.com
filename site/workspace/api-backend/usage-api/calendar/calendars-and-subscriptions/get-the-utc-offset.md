---
title: "Get the UTC offset"
sidebar_label: "Get the UTC offset"
sidebar_class_name: api-method post
description: "Returns the time offset in the specified time zone compared to Coordinated Universal Time (UTC) for the particular dates."
---

**POST** `/api/2.0/calendar/utcoffset`

Returns the time offset in the specified time zone compared to Coordinated Universal Time (UTC) for the particular dates.

## Request body

### timeZone

**type:** `string`

Time zone ID

**Example**: `"string"`

### startDate

**type:** `string`

Start date to determine the offset

**Example**: `"string"`

### endDate

**type:** `string`

End date to determine the offset

**Example**: `"string"`

## Request example

```json
{
  "timeZone": "string",
  "startDate": "string",
  "endDate": "string"
}
```

## Returns

The UTC offset in minutes. A request that is not authenticated returns `401`.
