---
title: "Set the \"Replace message body\" flag"
sidebar_label: "Set the \"Replace message body\" flag"
sidebar_class_name: api-method put
description: "Sets a flag that specifies whether to completely replace text of the email when inserting a template or not."
---

**PUT** `/api/2.0/mail/settings/replaceMessageBody`

Sets a flag that specifies whether to completely replace text of the email when inserting a template or not.

## Request body

### enabled

**type:** `boolean`

Specifies whether to completely replace text of the email when inserting a template or not

**Example**: `true`

## Request example

```json
{
  "enabled": true
}
```
