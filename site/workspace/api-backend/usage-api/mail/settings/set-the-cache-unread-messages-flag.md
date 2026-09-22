---
title: "Set the \"Cache unread messages\" flag"
sidebar_label: "Set the \"Cache unread messages\" flag"
sidebar_class_name: api-method put
description: "Sets a flag that specifies whether to cache unread messages or not."
---

**PUT** `/api/2.0/mail/settings/cacheMessagesEnabled`

Sets a flag that specifies whether to cache unread messages or not.

## Request body

### enabled

**type:** `boolean`

Specifies whether to cache unread messages or not

**Example**: `true`

## Request example

```json
{
  "enabled": true
}
```
