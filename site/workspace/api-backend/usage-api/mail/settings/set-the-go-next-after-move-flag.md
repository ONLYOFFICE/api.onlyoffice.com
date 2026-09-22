---
title: "Set the \"Go next after move\" flag"
sidebar_label: "Set the \"Go next after move\" flag"
sidebar_class_name: api-method put
description: "Sets a flag that specifies whether to go to the next message after moving/deleting the currently viewed or return to the current folder."
---

**PUT** `/api/2.0/mail/settings/goNextAfterMoveEnabled`

Sets a flag that specifies whether to go to the next message after moving/deleting the currently viewed or return to the current folder.

## Request body

### enabled

**type:** `boolean`

Specifies whether to go to the next message after moving/deleting the currently viewed or return to the current folder

**Example**: `true`

## Request example

```json
{
  "enabled": true
}
```
