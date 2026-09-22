---
title: "Update the user activity status"
sidebar_label: "Update the user activity status"
sidebar_class_name: api-method put
description: "Updates the user activity status."
---

**PUT** `/api/2.0/mail/accounts/updateuseractivity`

Updates the user activity status.

## Request body

### userOnline

**type:** `boolean`

Specifies if the user is online or not

**Example**: `true`

## Request example

```json
{
  "userOnline": true
}
```
