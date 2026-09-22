---
title: "Create a mail group"
sidebar_label: "Create a mail group"
sidebar_class_name: api-method post
description: "Creates a mail group with the parameters specified in the request."
---

**POST** `/api/2.0/mailserver/groupaddress/add`

Creates a mail group with the parameters specified in the request.

## Request body

### name

**type:** `string`

Sender name

**Example**: `"string"`

### domain_id

**type:** `integer`

Domain ID

**Example**: `0`

### address_ids

**type:** `integer[]`

List of address IDs

## Request example

```json
{
  "name": "string",
  "domain_id": 0,
  "address_ids": [
    0
  ]
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
