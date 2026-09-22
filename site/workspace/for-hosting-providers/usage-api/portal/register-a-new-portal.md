---
title: Register a new portal
sidebar_position: 2
sidebar_label: Register a new portal
sidebar_class_name: api-method post
description: Registers a new portal with the parameters specified in the request.
---

**POST** `/api/portal/register`

Registers a new portal with the parameters specified in the request.

## Request body

### portalName

**type:** `string` | **required**

Portal name.

**Example**: `"example"`

### firstName

**type:** `string` | **required**

Portal owner first name.

**Example**: `"John"`

### lastName

**type:** `string` | **required**

Portal owner last name.

**Example**: `"Smith"`

### email

**type:** `string` | **required**

Portal owner email address.

**Example**: `"test@example.com"`

### password

**type:** `string`

Portal owner password.

**Example**: `"123456"`

### phone

**type:** `string`

Portal owner phone number.

**Example**: `"123456789"`

### language

**type:** `string`

Portal language.

**Example**: `"en"`

### timeZoneName

**type:** `string`

Portal time zone.

**Example**: `"UTC"`

## Request example

```json
{
  "firstName": "John",
  "email": "test@example.com",
  "language": "en",
  "lastName": "Smith",
  "password": "123456",
  "phone": "123456789",
  "portalName": "example",
  "timeZoneName": "UTC"
}
```

## Returns

The link for portal activation and the portal description. A failed request returns
[an error](../errors.md) instead.

### reference

**type:** `string`

The portal activation link.

**Example**: `"https://example.com/confirm.aspx"`

### tenant

**type:** [`Tenant`](../objects/tenant.md)

The portal description.

## Response example

```json
{
  "reference": "https://example.com/confirm.aspx",
  "tenant": {
    "tenantId": 1,
    "portalName": "example",
    "domain": "example.com",
    "created": "2010-07-07T15:46:00",
    "status": "Active",
    "ownerId": "78e1e841-8314-4846-8fc0-e7d6451b6475",
    "language": "en-US",
    "timeZoneName": "UTC"
  }
}
```
