---
title: "Get contact categories by information type"
sidebar_label: "Get contact categories by information type"
sidebar_class_name: api-method get
description: "Returns a list of all the available contact categories of the specified information type."
---

**GET** `/api/2.0/crm/contact/data/{infoType}/category`

Returns a list of all the available contact categories of the specified information type.

## Path parameters

### infoType

**type:** `"Phone" | "Email" | "Website" | "Skype" | "Twitter" | "LinkedIn" | "Facebook" | "Address" | "LiveJournal" | "MySpace" | "GMail" | "Blogger" | "Yahoo" | "MSN" | "ICQ" | "Jabber" | "AIM" | "VK"`

Contact information type

**Example**: `"Phone"`

## Returns

List of contact categories. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
