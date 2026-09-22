---
title: "Delete a tag"
sidebar_label: "Delete a tag"
sidebar_class_name: api-method delete
description: "Deletes a tag with the ID specified in the request."
---

**DELETE** `/api/2.0/mail/tags/{id}`

Deletes a tag with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Tag ID

**Example**: `0`

## Returns

Deleted mail tag. A request that is not authenticated returns `401`.
