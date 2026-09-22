---
title: "Get CalDav link"
sidebar_label: "Get CalDav link"
sidebar_class_name: api-method get
description: "Returns a link to the CalDav related to the calendar with the ID specified in the request."
---

**GET** `/api/2.0/calendar/{calendarId}/caldavurl`

Returns a link to the CalDav related to the calendar with the ID specified in the request.

## Path parameters

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

## Request body

### uri

**type:** `string`

Current URI

**Example**: `"string"`

## Request example

```json
{
  "uri": "string"
}
```

## Returns

CalDav link. A request that is not authenticated returns `401`.

### Completed

**type:** `boolean`

**Example**: `true`

### StatusCode

**type:** `integer`

**Example**: `0`

### Data

**type:** `string`

**Example**: `"string"`

### Error

**type:** `string`

**Example**: `"string"`

## Response example

```json
{
  "Completed": true,
  "StatusCode": 0,
  "Data": "string",
  "Error": "string"
}
```
