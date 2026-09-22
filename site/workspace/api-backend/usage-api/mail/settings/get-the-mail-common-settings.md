---
title: "Get the mail common settings"
sidebar_label: "Get the mail common settings"
sidebar_class_name: api-method get
description: "Returns the mail common settings."
---

**GET** `/api/2.0/mail/settings`

Returns the mail common settings.

## Returns

Mail common settings. A request that is not authenticated returns `401`.

### EnableConversationsSetting

**type:** `boolean`

**Example**: `true`

### AlwaysDisplayImagesSetting

**type:** `boolean`

**Example**: `true`

### CacheUnreadMessagesSetting

**type:** `boolean`

**Example**: `true`

### EnableGoNextAfterMoveSetting

**type:** `boolean`

**Example**: `true`

### ReplaceMessageBodySetting

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "EnableConversationsSetting": true,
  "AlwaysDisplayImagesSetting": true,
  "CacheUnreadMessagesSetting": true,
  "EnableGoNextAfterMoveSetting": true,
  "ReplaceMessageBodySetting": true
}
```
