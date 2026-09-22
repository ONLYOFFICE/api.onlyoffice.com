---
title: "Mark a conversation as CRM linked"
sidebar_label: "Mark a conversation as CRM linked"
sidebar_class_name: api-method put
description: "Marks a conversation as CRM linked."
---

**PUT** `/api/2.0/mail/conversations/crm/mark`

Marks a conversation as CRM linked. All the new mails will be added to the CRM history.

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
