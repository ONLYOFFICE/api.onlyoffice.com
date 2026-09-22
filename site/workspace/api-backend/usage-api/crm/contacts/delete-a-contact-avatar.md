---
title: "Delete a contact avatar"
sidebar_label: "Delete a contact avatar"
sidebar_class_name: api-method delete
description: "Deletes an avatar of the contact with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/contact/{contactid:[0-9]+}/avatar`

Deletes an avatar of the contact with the ID specified in the request.

## Request body

### contactId

**type:** `integer`

Contact ID

**Example**: `0`

### contactType

**type:** `string`

Contact type

**Example**: `"string"`

### uploadOnly

**type:** `boolean`

Defines whether to upload a new avatar only or also delete an old one

**Example**: `true`

## Request example

```json
{
  "contactId": 0,
  "contactType": "string",
  "uploadOnly": true
}
```

## Returns

Default photo. A request that is not authenticated returns `401`.
