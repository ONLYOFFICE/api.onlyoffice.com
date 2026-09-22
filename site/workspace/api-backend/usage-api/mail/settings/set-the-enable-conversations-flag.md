---
title: "Set the \"Enable Conversations\" flag"
sidebar_label: "Set the \"Enable Conversations\" flag"
sidebar_class_name: api-method put
description: "Sets a flag that specifies whether to group messages into conversations or not."
---

**PUT** `/api/2.0/mail/settings/conversationsEnabled`

Sets a flag that specifies whether to group messages into conversations or not.

## Request body

### enabled

**type:** `boolean`

Specifies whether to group messages into conversations or not

**Example**: `true`

## Request example

```json
{
  "enabled": true
}
```
