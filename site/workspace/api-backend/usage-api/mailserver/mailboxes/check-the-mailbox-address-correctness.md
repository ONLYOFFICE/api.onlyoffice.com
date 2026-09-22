---
title: "Check the mailbox address correctness"
sidebar_label: "Check the mailbox address correctness"
sidebar_class_name: api-method get
description: "Checks if the mailbox address is valid or not."
---

**GET** `/api/2.0/mailserver/mailboxes/alias/valid`

Checks if the mailbox address is valid or not.

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

Boolean value: true - address is valid, false - address is not valid. A request that is not authenticated returns `401`.
