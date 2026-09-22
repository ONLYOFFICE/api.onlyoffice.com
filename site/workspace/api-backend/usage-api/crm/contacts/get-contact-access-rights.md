---
title: "Get contact access rights"
sidebar_label: "Get contact access rights"
sidebar_class_name: api-method get
description: "Returns access rights of the contact with the ID specified in the request."
---

**GET** `/api/2.0/crm/contact/{contactid:[0-9]+}/access`

Returns access rights of the contact with the ID specified in the request.

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

List of contacts. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  }
]
```
