---
title: "Set the default account"
sidebar_label: "Set the default account"
sidebar_class_name: api-method put
description: "Sets the default account with the email address specified in the request."
---

**PUT** `/api/2.0/mail/accounts/default`

Sets the default account with the email address specified in the request.

## Request body

### email

**type:** `string`

Account email address

**Example**: `"string"`

### isDefault

**type:** `boolean`

Specifies if this account is default or not

**Example**: `true`

## Request example

```json
{
  "email": "string",
  "isDefault": true
}
```

## Returns

Account email address. A request that is not authenticated returns `401`.
