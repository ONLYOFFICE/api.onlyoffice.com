---
title: "Set the product administrator"
sidebar_label: "Set the product administrator"
sidebar_class_name: api-method put
description: "Sets the selected user as an administrator of a product with the ID specified in the request."
---

**PUT** `/api/2.0/settings/security/administrator`

Sets the selected user as an administrator of a product with the ID specified in the request.

## Request body

### productid

**type:** `string`

Product ID

**Example**: `"string"`

### userid

**type:** `string`

User ID

**Example**: `"string"`

### administrator

**type:** `boolean`

Specifies if a user will be a product administrator or not

**Example**: `true`

## Request example

```json
{
  "productid": "string",
  "userid": "string",
  "administrator": true
}
```

## Returns

Object with the user security information. A request that is not authenticated returns `401`.
