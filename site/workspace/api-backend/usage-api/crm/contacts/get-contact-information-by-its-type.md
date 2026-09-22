---
title: "Get contact information by its type"
sidebar_label: "Get contact information by its type"
sidebar_class_name: api-method get
description: "Returns the detailed contact information by the information type specified in the request."
---

**GET** `/api/2.0/crm/contact/{contactid:[0-9]+}/data/{infoType}`

Returns the detailed contact information by the information type specified in the request.

## Path parameters

### infoType

**type:** `"Phone" | "Email" | "Website" | "Skype" | "Twitter" | "LinkedIn" | "Facebook" | "Address" | "LiveJournal" | "MySpace" | "GMail" | "Blogger" | "Yahoo" | "MSN" | "ICQ" | "Jabber" | "AIM" | "VK"`

Contact information type

**Example**: `"Phone"`

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

Contact information. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
