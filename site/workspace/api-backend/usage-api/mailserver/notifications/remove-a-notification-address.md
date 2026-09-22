---
title: "Remove a notification address"
sidebar_label: "Remove a notification address"
sidebar_class_name: api-method delete
description: "Deletes an address for the tenant notifications specified in the request."
---

**DELETE** `/api/2.0/mailserver/notification/address/remove`

Deletes an address for the tenant notifications specified in the request.

## Request body

### address

**type:** `string`

Address name

**Example**: `"string"`

## Request example

```json
{
  "address": "string"
}
```
