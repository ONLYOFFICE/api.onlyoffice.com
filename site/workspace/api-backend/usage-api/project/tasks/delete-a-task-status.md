---
title: "Delete a task status"
sidebar_label: "Delete a task status"
sidebar_class_name: api-method delete
description: "Deletes a task status with the ID specified in the request."
---

**DELETE** `/api/2.0/project/status/{id}`

Deletes a task status with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Task status ID

**Example**: `0`

## Returns

Task status. A request that is not authenticated returns `401`.
