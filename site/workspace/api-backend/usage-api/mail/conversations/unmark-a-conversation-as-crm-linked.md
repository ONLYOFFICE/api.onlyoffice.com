---
title: "Unmark a conversation as CRM linked"
sidebar_label: "Unmark a conversation as CRM linked"
sidebar_class_name: api-method put
description: "Unmarks a conversation as CRM linked."
---

**PUT** `/api/2.0/mail/conversations/crm/unmark`

Unmarks a conversation as CRM linked.

## Request body

### id_message

**type:** `integer`

ID of any messages from the conversation

**Example**: `0`

### crm_contact_ids

**type:** `CrmContactData[]`

List of CRM entities in the following format: `{entity_id: 0, entity_type: 0}`.
            Entity types: 1 - Contact, 2 - Case, 3 - Opportunity

## Request example

```json
{
  "id_message": 0,
  "crm_contact_ids": [
    {}
  ]
}
```
