---
title: "Update a signature"
sidebar_label: "Update a signature"
sidebar_class_name: api-method post
description: "Updates a signature of a mailbox with the ID specified in the request."
---

**POST** `/api/2.0/mail/signature/update/{mailbox_id:[0-9]+}`

Updates a signature of a mailbox with the ID specified in the request.

## Request body

### mailbox_id

**type:** `integer`

Mailbox ID

**Example**: `0`

### html

**type:** `string`

New signature value in the HTML format

**Example**: `"string"`

### is_active

**type:** `boolean`

New signature status (active or not)

**Example**: `true`

## Request example

```json
{
  "mailbox_id": 0,
  "html": "string",
  "is_active": true
}
```

## Returns

Updated signature object. A request that is not authenticated returns `401`.

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
