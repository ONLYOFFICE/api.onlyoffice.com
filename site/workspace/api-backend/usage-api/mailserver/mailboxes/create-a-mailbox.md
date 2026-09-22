---
title: "Create a mailbox"
sidebar_label: "Create a mailbox"
sidebar_class_name: api-method post
description: "Creates a mailbox with the parameters specified in the request."
---

**POST** `/api/2.0/mailserver/mailboxes/add`

Creates a mailbox with the parameters specified in the request.

## Request body

### name

**type:** `string`

Mailbox name

**Example**: `"string"`

### local_part

**type:** `string`

Mailbox local part

**Example**: `"string"`

### domain_id

**type:** `integer`

Mailbox domain ID

**Example**: `0`

### user_id

**type:** `string`

User ID

**Example**: `"string"`

### notifyCurrent

**type:** `boolean`

Specifies whether to notify the current user's email when a mailbox is created or not

**Example**: `true`

### notifyProfile

**type:** `boolean`

Specifies whether to notify the current user's profile when a mailbox is created or not

**Example**: `true`

## Request example

```json
{
  "name": "string",
  "local_part": "string",
  "domain_id": 0,
  "user_id": "string",
  "notifyCurrent": true,
  "notifyProfile": true
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
