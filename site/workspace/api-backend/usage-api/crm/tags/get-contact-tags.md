---
title: "Get contact tags"
sidebar_label: "Get contact tags"
sidebar_class_name: api-method get
description: "Returns a list of all the tags for the contact with the ID specified in the request."
---

**GET** `/api/2.0/crm/contact/{contactid:[0-9]+}/tag`

Returns a list of all the tags for the contact with the ID specified in the request.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

## Request example

```json
{
  "contactid": 0
}
```

## Returns

List of contact tags. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
