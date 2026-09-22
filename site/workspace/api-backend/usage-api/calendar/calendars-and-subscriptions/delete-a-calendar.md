---
title: "Delete a calendar"
sidebar_label: "Delete a calendar"
sidebar_class_name: api-method delete
description: "Deletes a calendar with the ID specified in the request."
---

**DELETE** `/api/2.0/calendar/{calendarId}`

Deletes a calendar with the ID specified in the request.

## Path parameters

### calendarId

**type:** `integer`

Calendar ID

**Example**: `0`

## Returns

Task awaiter. A request that is not authenticated returns `401`.
