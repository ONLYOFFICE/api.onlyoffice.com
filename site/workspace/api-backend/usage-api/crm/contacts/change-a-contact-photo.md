---
title: "Change a contact photo"
sidebar_label: "Change a contact photo"
sidebar_class_name: api-method put
description: "Changes a photo for the contact with the ID specified in the request."
---

**PUT** `/api/2.0/crm/contact/{contactid:[0-9]+}/changephoto`

Changes a photo for the contact with the ID specified in the request.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### photo

**type:** `string[]`

Contact photo (upload using multipart/form-data)

## Request example

```json
{
  "contactid": 0,
  "photo": [
    "string"
  ]
}
```

## Returns

Path to the contact photo. A request that is not authenticated returns `401`.
