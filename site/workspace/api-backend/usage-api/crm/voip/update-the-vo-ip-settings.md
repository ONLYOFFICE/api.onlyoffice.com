---
title: "Update the VoIP settings"
sidebar_label: "Update the VoIP settings"
sidebar_class_name: api-method put
description: "Updates the VoIP settings with the parameters specified in the request."
---

**PUT** `/api/2.0/crm/voip/numbers/settings`

Updates the VoIP settings with the parameters specified in the request.

## Request body

### queue

**type:** `object`

Connection waiting queue

### pause

**type:** `boolean`

Defines if the operator have some time before accepting calls again. This can be used to take some notes on the previous call, etc.

**Example**: `true`

## Request example

```json
{
  "pause": true
}
```

## Returns

Updated VoIP settings. A request that is not authenticated returns `401`.
