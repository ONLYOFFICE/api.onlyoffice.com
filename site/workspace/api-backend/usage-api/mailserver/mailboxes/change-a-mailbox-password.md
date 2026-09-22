---
title: "Change a mailbox password"
sidebar_label: "Change a mailbox password"
sidebar_class_name: api-method put
description: "Changes a password of a mailbox with the ID specified in the request."
---

**PUT** `/api/2.0/mailserver/mailboxes/changepwd`

Changes a password of a mailbox with the ID specified in the request.

## Request body

### mailbox_id

**type:** `integer`

Mailbox ID

**Example**: `0`

### password

**type:** `string`

New password

**Example**: `"string"`

## Request example

```json
{
  "mailbox_id": 0,
  "password": "string"
}
```
