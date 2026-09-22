---
title: "Remove an address from the mail group"
sidebar_label: "Remove an address from the mail group"
sidebar_class_name: api-method delete
description: "Removes an address with the ID specified in the request from the mail group."
---

**DELETE** `/api/2.0/mailserver/groupaddress/addresses/remove`

Removes an address with the ID specified in the request from the mail group.

## Request body

### mailgroup_id

**type:** `integer`

Mail group ID

**Example**: `0`

### address_id

**type:** `integer`

Address ID

**Example**: `0`

## Request example

```json
{
  "mailgroup_id": 0,
  "address_id": 0
}
```

## Returns

Mail group ID. A request that is not authenticated returns `401`.
