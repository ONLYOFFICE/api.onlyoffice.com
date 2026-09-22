---
title: "Get a signature"
sidebar_label: "Get a signature"
sidebar_class_name: api-method get
description: "Returns a signature of a mailbox with the ID specified in the request."
---

**GET** `/api/2.0/mail/signature/{mailbox_id:[0-9]+}`

Returns a signature of a mailbox with the ID specified in the request.

## Request body

### mailbox_id

**type:** `integer`

Mailbox ID

**Example**: `0`

## Request example

```json
{
  "mailbox_id": 0
}
```

## Returns

Signature object. A request that is not authenticated returns `401`.

### MailboxId

**type:** `integer`

**Example**: `132`

### Html

**type:** `string`

**Example**: `"html"`

### IsActive

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "MailboxId": 132,
  "Html": "html",
  "IsActive": true
}
```
