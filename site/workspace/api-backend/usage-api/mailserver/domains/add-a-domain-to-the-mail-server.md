---
title: "Add a domain to the mail server"
sidebar_label: "Add a domain to the mail server"
sidebar_class_name: api-method post
description: "Adds a web domain to the current tenant."
---

**POST** `/api/2.0/mailserver/domains/add`

Adds a web domain to the current tenant.

## Request body

### name

**type:** `string`

Web domain name

**Example**: `"string"`

### id_dns

**type:** `integer`

DNS ID

**Example**: `0`

## Request example

```json
{
  "name": "string",
  "id_dns": 0
}
```

## Returns

Web domain data associated with the tenant. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `"id"`

### IsSharedDomain

**type:** `boolean`

**Example**: `true`

### Name

**type:** `string`

**Example**: `"Name"`

### Dns

**type:** `ServerDomainDnsData`

## Response example

```json
{
  "Id": "id",
  "IsSharedDomain": true,
  "Name": "Name",
  "Dns": {
    "Id": 1234,
    "MxRecord": {
      "Host": "Host",
      "Priority": 1234,
      "IsVerified": true
    },
    "SpfRecord": {
      "Name": "name",
      "Value": "value",
      "IsVerified": true
    },
    "DkimRecord": {
      "Selector": "Selector",
      "PublicKey": "PublicKey",
      "IsVerified": true
    },
    "DomainCheckRecord": {
      "Name": "name",
      "Value": "value",
      "IsVerified": true
    },
    "IsVerified": true
  }
}
```
