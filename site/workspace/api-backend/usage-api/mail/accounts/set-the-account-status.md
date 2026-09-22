---
title: "Set the account status"
sidebar_label: "Set the account status"
sidebar_class_name: api-method put
description: "Sets the status of an account with the email address specified in the request."
---

**PUT** `/api/2.0/mail/accounts/state`

Sets the status of an account with the email address specified in the request.

## Request body

### email

**type:** `string`

Account email address

**Example**: `"string"`

### state

**type:** `boolean`

Account activity status: true - enabled, false - disabled

**Example**: `true`

## Request example

```json
{
  "email": "string",
  "state": true
}
```

## Returns

Account mailbox ID. A request that is not authenticated returns `401`.
