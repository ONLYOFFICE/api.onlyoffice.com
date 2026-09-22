---
title: "Create a mailbox with your own domain"
sidebar_label: "Create a mailbox with your own domain"
sidebar_class_name: api-method post
description: "Creates a mailbox with your own domain name."
---

**POST** `/api/2.0/mailserver/mailboxes/addmy`

Creates a mailbox with your own domain name.

## Request body

### name

**type:** `string`

Mailbox name

**Example**: `"string"`

## Request example

```json
{
  "name": "string"
}
```

## Returns

Mailbox data associated with the tenant. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `1234`

### UserId

**type:** `string`

**Example**: `"UserId"`

### UserDisplayName

**type:** `string`

**Example**: `"UserDisplayName"`

### Address

**type:** `ServerDomainAddressData`

### Name

**type:** `string`

**Example**: `"Name"`

### Aliases

**type:** `ServerDomainAddressData[]`

## Response example

```json
{
  "Id": 1234,
  "UserId": "UserId",
  "UserDisplayName": "UserDisplayName",
  "Address": {
    "Id": 1234,
    "DomainId": 1234,
    "Email": "Email@only.com"
  },
  "Name": "Name",
  "Aliases": [
    {
      "Id": 1234,
      "DomainId": 1234,
      "Email": "Email@only.com"
    }
  ]
}
```
