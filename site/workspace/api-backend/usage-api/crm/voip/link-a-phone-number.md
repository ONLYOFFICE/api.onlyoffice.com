---
title: "Link a phone number"
sidebar_label: "Link a phone number"
sidebar_class_name: api-method post
description: "Links a new phone number with the ID specified in the request to the VoIP provider."
---

**POST** `/api/2.0/crm/voip/numbers/link`

Links a new phone number with the ID specified in the request to the VoIP provider.

## Request body

### id

**type:** `string`

Phone number ID

**Example**: `"string"`

## Request example

```json
{
  "id": "string"
}
```

## Returns

Phone number. A request that is not authenticated returns `401`.
