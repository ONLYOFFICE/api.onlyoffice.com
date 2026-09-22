---
title: "Get the linked CRM entities"
sidebar_label: "Get the linked CRM entities"
sidebar_class_name: api-method get
description: "Returns a list of the CRM entities (contact, case, or opportunity) linked with a conversation."
---

**GET** `/api/2.0/mail/crm/linked/entities`

Returns a list of the CRM entities (contact, case, or opportunity) linked with a conversation.

## Request body

### message_id

**type:** `integer`

Message ID. It may be ID of any message included in the conversation

**Example**: `0`

## Request example

```json
{
  "message_id": 0
}
```

## Returns

List of entity information: `{entity_id, entity_type, avatar_link, title}`. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
