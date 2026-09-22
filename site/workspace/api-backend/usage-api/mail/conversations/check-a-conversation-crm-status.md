---
title: "Check a conversation CRM status"
sidebar_label: "Check a conversation CRM status"
sidebar_class_name: api-method get
description: "Checks if a conversation is CRM linked or not by message ID."
---

**GET** `/api/2.0/mail/conversations/link/crm/status`

Checks if a conversation is CRM linked or not by message ID.

## Request body

### message_id

**type:** `integer`

ID of any messages from the conversation

**Example**: `0`

## Request example

```json
{
  "message_id": 0
}
```

## Returns

Conversation CRM status. A request that is not authenticated returns `401`.

### MessageId

**type:** `integer`

**Example**: `12354`

### IsLinked

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "MessageId": 12354,
  "IsLinked": true
}
```
