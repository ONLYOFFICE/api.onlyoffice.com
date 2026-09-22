---
title: "Change a contact photo by URL"
sidebar_label: "Change a contact photo by URL"
sidebar_class_name: api-method put
description: "Changes a photo using its URL for the contact with the ID specified in the request."
---

**PUT** `/api/2.0/crm/contact/{contactid:[0-9]+}/changephotobyurl`

Changes a photo using its URL for the contact with the ID specified in the request.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### photourl

**type:** `string`

Contact photo URL

**Example**: `"string"`

## Request example

```json
{
  "contactid": 0,
  "photourl": "string"
}
```

## Returns

Path to the contact photo. A request that is not authenticated returns `401`.
