---
title: "Save a call price"
sidebar_label: "Save a call price"
sidebar_class_name: api-method post
description: "Saves a price for the call with the ID specified in the request."
---

**POST** `/api/2.0/crm/voip/price/{callId:\w+}`

Saves a price for the call with the ID specified in the request.

## Request body

### callId

**type:** `string`

Phone call ID

**Example**: `"string"`

## Request example

```json
{
  "callId": "string"
}
```
