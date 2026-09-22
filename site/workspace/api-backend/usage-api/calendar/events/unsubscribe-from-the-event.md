---
title: "Unsubscribe from the event"
sidebar_label: "Unsubscribe from the event"
sidebar_class_name: api-method delete
description: "Unsubscribes the current user from the event with the ID specified in the request."
---

**DELETE** `/api/2.0/calendar/events/{eventId}/unsubscribe`

Unsubscribes the current user from the event with the ID specified in the request.

## Path parameters

### eventId

**type:** `integer`

Event ID

**Example**: `0`

## Returns

Task awaiter. A request that is not authenticated returns `401`.
