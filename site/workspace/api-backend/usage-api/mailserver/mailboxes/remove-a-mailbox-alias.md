---
title: "Remove a mailbox alias"
sidebar_label: "Remove a mailbox alias"
sidebar_class_name: api-method put
description: "Removes an alias from the mailbox with the ID specified in the request."
---

**PUT** `/api/2.0/mailserver/mailboxes/alias/remove`

Removes an alias from the mailbox with the ID specified in the request.

## Request body

### mailbox_id

**type:** `integer`

Mailbox ID

**Example**: `0`

### address_id

**type:** `integer`

Mailbox address ID

**Example**: `0`

## Request example

```json
{
  "mailbox_id": 0,
  "address_id": 0
}
```

## Returns

Mailbox ID. A request that is not authenticated returns `401`.
