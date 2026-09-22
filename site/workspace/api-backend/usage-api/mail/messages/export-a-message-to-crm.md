---
title: "Export a message to CRM"
sidebar_label: "Export a message to CRM"
sidebar_class_name: api-method put
description: "Exports a mail to the CRM relation history for some entities."
---

**PUT** `/api/2.0/mail/messages/crm/export`

Exports a mail to the CRM relation history for some entities.

## Request body

### id_message

**type:** `integer`

ID of any message from the chain

**Example**: `0`

### crm_contact_ids

**type:** `CrmContactData[]`

List of CRM contact entity IDs in the following format: `{entity_id: 0, entity_type: 0}`.
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
