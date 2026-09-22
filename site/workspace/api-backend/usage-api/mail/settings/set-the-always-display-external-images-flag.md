---
title: "Set the \"Always display external images\" flag"
sidebar_label: "Set the \"Always display external images\" flag"
sidebar_class_name: api-method put
description: "Sets a flag that specifies whether to display external images in the messages or not."
---

**PUT** `/api/2.0/mail/settings/alwaysDisplayImages`

Sets a flag that specifies whether to display external images in the messages or not.

## Request body

### enabled

**type:** `boolean`

Specifies whether to display external images in the messages or not

**Example**: `true`

## Request example

```json
{
  "enabled": true
}
```
