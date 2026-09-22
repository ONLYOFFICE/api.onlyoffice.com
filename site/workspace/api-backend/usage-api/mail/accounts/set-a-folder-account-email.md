---
title: "Set a folder account email"
sidebar_label: "Set a folder account email"
sidebar_class_name: api-method put
description: "Sets an account email in a folder with the ID specified in the request."
---

**PUT** `/api/2.0/mail/accounts/emailinfolder`

Sets an account email in a folder with the ID specified in the request.

## Request body

### mailbox_id

**type:** `integer`

Mailbox ID

**Example**: `0`

### email_in_folder

**type:** `string`

Document folder ID

**Example**: `"string"`

## Request example

```json
{
  "mailbox_id": 0,
  "email_in_folder": "string"
}
```
