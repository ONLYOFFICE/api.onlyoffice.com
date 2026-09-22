---
title: "Remove a mail group"
sidebar_label: "Remove a mail group"
sidebar_class_name: api-method delete
description: "Deletes a mail group with the ID specified in the request."
---

**DELETE** `/api/2.0/mailserver/groupaddress/remove/{id}`

Deletes a mail group with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Mail group ID

**Example**: `0`

## Returns

Mail group ID. A request that is not authenticated returns `401`.
