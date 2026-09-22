---
title: "Update a company address"
sidebar_label: "Update a company address"
sidebar_class_name: api-method put
description: "Updates a company address with the one specified in the request."
---

**PUT** `/api/2.0/crm/settings/organisation/address`

Updates a company address with the one specified in the request.

## Request body

### street

**type:** `string`

New company street/building/apartment

**Example**: `"string"`

### city

**type:** `string`

New company city

**Example**: `"string"`

### state

**type:** `string`

New company state

**Example**: `"string"`

### zip

**type:** `string`

New company zip

**Example**: `"string"`

### country

**type:** `string`

New company country

**Example**: `"string"`

## Request example

```json
{
  "street": "string",
  "city": "string",
  "state": "string",
  "zip": "string",
  "country": "string"
}
```

## Returns

Updated company address. A request that is not authenticated returns `401`.
