---
title: "Complete migration"
sidebar_label: "Complete migration"
sidebar_class_name: api-method post
description: "Completes the migration process."
---

**POST** `/api/2.0/migration/finish`

Completes the migration process.

## Request body

### isSendWelcomeEmail

**type:** `boolean`

Specifies whether to send a welcome letter to the imported users or not

**Example**: `true`

## Request example

```json
{
  "isSendWelcomeEmail": true
}
```
