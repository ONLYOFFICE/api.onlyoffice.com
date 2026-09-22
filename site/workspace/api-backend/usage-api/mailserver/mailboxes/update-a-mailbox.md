---
title: "Update a mailbox"
sidebar_label: "Update a mailbox"
sidebar_class_name: api-method put
description: "Updates a mailbox with the ID specified in the request."
---

**PUT** `/api/2.0/mailserver/mailboxes/update`

Updates a mailbox with the ID specified in the request.

## Request body

### mailbox_id

**type:** `integer`

Mailbox ID

**Example**: `0`

### name

**type:** `string`

New sender name

**Example**: `"string"`

## Request example

```json
{
  "mailbox_id": 0,
  "name": "string"
}
```

## Returns

Updated mailbox data. A request that is not authenticated returns `401`.

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
