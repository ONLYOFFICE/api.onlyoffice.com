---
title: "Check the product administrator"
sidebar_label: "Check the product administrator"
sidebar_class_name: api-method get
description: "Checks if the selected user is an administrator of a product with the ID specified in the request."
---

**GET** `/api/2.0/settings/security/administrator`

Checks if the selected user is an administrator of a product with the ID specified in the request.

## Request body

### productid

**type:** `string`

Product ID

**Example**: `"string"`

### userid

**type:** `string`

User ID

**Example**: `"string"`

## Request example

```json
{
  "productid": "string",
  "userid": "string"
}
```

## Returns

Object with the user security information. A request that is not authenticated returns `401`.
