---
title: "Get the iCal feed"
sidebar_label: "Get the iCal feed"
sidebar_class_name: api-method get
description: "Returns the iCal feed associated with the calendar by its ID and signagure specified in the request."
---

**GET** `/api/2.0/calendar/{calendarId}/ical/{signature}`

Returns the iCal feed associated with the calendar by its ID and signagure specified in the request.

**Note**: To get the feed, you need to use the method returning the iCal feed link (it will generate the necessary signature).

## Path parameters

### calendarId

**type:** `string`

Calendar ID

**Example**: `"string"`

### signature

**type:** `string`

Signature

**Example**: `"string"`

## Returns

Calendar iCal feed
