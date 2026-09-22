---
title: "Delete the event series"
sidebar_label: "Delete the event series"
sidebar_class_name: api-method delete
description: "Deletes the event series from the calendar."
---

**DELETE** `/api/2.0/calendar/events/{eventId}`

Deletes the event series from the calendar.

## Path parameters

### eventId

**type:** `integer`

Event ID

**Example**: `0`

## Returns

Task awaiter. A request that is not authenticated returns `401`.
