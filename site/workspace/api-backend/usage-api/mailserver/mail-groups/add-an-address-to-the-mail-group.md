---
title: "Add an address to the mail group"
sidebar_label: "Add an address to the mail group"
sidebar_class_name: api-method put
description: "Adds an address with the ID specified in the request to the mail group."
---

**PUT** `/api/2.0/mailserver/groupaddress/address/add`

Adds an address with the ID specified in the request to the mail group.

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

Mail group data associated with the tenant. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `1234`

### Address

**type:** `ServerDomainAddressData`

### Addresses

**type:** `ServerDomainAddressData[]`

## Response example

```json
{
  "Id": 1234,
  "Address": {
    "Id": 1234,
    "DomainId": 1234,
    "Email": "Email@only.com"
  },
  "Addresses": [
    {
      "Id": 1234,
      "DomainId": 1234,
      "Email": "Email@only.com"
    }
  ]
}
```
