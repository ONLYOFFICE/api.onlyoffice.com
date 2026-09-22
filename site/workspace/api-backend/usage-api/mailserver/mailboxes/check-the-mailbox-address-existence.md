---
title: "Check the mailbox address existence"
sidebar_label: "Check the mailbox address existence"
sidebar_class_name: api-method get
description: "Checks if the mailbox address is already registered or not."
---

**GET** `/api/2.0/mailserver/mailboxes/alias/exists`

Checks if the mailbox address is already registered or not.

## Request body

### local_part

**type:** `string`

Mailbox local part

**Example**: `"string"`

### domain_id

**type:** `integer`

Mailbox domain ID

**Example**: `0`

## Request example

```json
{
  "local_part": "string",
  "domain_id": 0
}
```

## Returns

Boolean value: true - address exists, false - address does not exist. A request that is not authenticated returns `401`.
