---
title: "Update the setting for writing mails to the history"
sidebar_label: "Update the setting for writing mails to the history"
sidebar_class_name: api-method put
description: "Updates the setting for writing mails to the history with the parameter specified in the request."
---

**PUT** `/api/2.0/crm/contact/mailtohistory/settings`

Updates the setting for writing mails to the history with the parameter specified in the request.

## Request body

### writeMailToHistoryAuto

**type:** `boolean`

Defines if the mails are written to the history automatically or not

**Example**: `true`

## Request example

```json
{
  "writeMailToHistoryAuto": true
}
```

## Returns

Updated setting for writing mails to the history (true or false). A request that is not authenticated returns `401`.
