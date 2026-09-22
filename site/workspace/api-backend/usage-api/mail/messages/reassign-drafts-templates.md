---
title: "Reassign drafts/templates"
sidebar_label: "Reassign drafts/templates"
sidebar_class_name: api-method put
description: "Reassigns drafts/templates to the selected email."
---

**PUT** `/api/2.0/mail/messages/reassign`

Reassigns drafts/templates to the selected email.

## Request body

### folder

**type:** `integer`

Folder ID

**Example**: `0`

### email

**type:** `string`

Email to which messages will be reassigned

**Example**: `"string"`

## Request example

```json
{
  "folder": 0,
  "email": "string"
}
```
