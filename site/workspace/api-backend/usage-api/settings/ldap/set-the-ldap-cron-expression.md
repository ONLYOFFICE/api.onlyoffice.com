---
title: "Set the LDAP cron expression"
sidebar_label: "Set the LDAP cron expression"
sidebar_class_name: api-method post
description: "Sets the LDAP autosynchronous cron expression to the current portal."
---

**POST** `/api/2.0/settings/ldap/cron`

Sets the LDAP autosynchronous cron expression to the current portal.

## Request body

### cron

**type:** `string`

Cron expression

**Example**: `"string"`

## Request example

```json
{
  "cron": "string"
}
```
