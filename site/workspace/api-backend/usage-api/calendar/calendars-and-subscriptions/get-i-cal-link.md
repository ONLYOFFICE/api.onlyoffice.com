---
title: "Get iCal link"
sidebar_label: "Get iCal link"
sidebar_class_name: api-method get
description: "Returns a link to the iCal related to the calendar with the ID specified in the request."
---

**GET** `/api/2.0/calendar/{calendarId}/icalurl`

Returns a link to the iCal related to the calendar with the ID specified in the request.

## Path parameters

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

## Returns

iCal link. A request that is not authenticated returns `401`.
