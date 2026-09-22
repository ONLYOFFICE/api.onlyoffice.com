---
title: "Delete an alert"
sidebar_label: "Delete an alert"
sidebar_class_name: api-method delete
description: "Deletes an alert with the ID specified in the request."
---

**DELETE** `/api/2.0/mail/alert/{id}`

Deletes an alert with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Alert ID

**Example**: `0`

## Returns

Deleted alert ID. Same as the request parameter. A request that is not authenticated returns `401`.
