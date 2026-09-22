---
title: "Add a mailbox alias"
sidebar_label: "Add a mailbox alias"
sidebar_class_name: api-method put
description: "Adds an alias to the mailbox with the ID specified in the request."
---

**PUT** `/api/2.0/mailserver/mailboxes/alias/add`

Adds an alias to the mailbox with the ID specified in the request.

## Request body

### mailbox_id

**type:** `integer`

Mailbox ID

**Example**: `0`

### alias_name

**type:** `string`

Mailbox alias

**Example**: `"string"`

## Request example

```json
{
  "mailbox_id": 0,
  "alias_name": "string"
}
```

## Returns

Mailbox data associated with the tenant. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `1234`

### DomainId

**type:** `integer`

**Example**: `1234`

### Email

**type:** `string`

**Example**: `"Email@only.com"`

## Response example

```json
{
  "Id": 1234,
  "DomainId": 1234,
  "Email": "Email@only.com"
}
```
