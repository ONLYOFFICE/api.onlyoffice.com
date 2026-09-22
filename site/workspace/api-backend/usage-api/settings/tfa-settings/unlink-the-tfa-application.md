---
title: "Unlink the TFA application"
sidebar_label: "Unlink the TFA application"
sidebar_class_name: api-method put
description: "Unlinks the current two-factor authentication application from the user account specified in the request."
---

**PUT** `/api/2.0/settings/tfaappnewapp`

Unlinks the current two-factor authentication application from the user account specified in the request.

## Request body

### id

**type:** `string`

User ID

**Example**: `"string"`

## Request example

```json
{
  "id": "string"
}
```

## Returns

Login URL. A request that is not authenticated returns `401`.
