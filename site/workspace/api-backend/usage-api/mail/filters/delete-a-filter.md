---
title: "Delete a filter"
sidebar_label: "Delete a filter"
sidebar_class_name: api-method delete
description: "Deletes a filter with the ID specified in the request."
---

**DELETE** `/api/2.0/mail/filters/{id}`

Deletes a filter with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Filter ID

**Example**: `0`

## Returns

Filter ID. A request that is not authenticated returns `401`.
