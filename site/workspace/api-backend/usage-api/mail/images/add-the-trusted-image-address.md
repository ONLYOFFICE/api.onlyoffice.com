---
title: "Add the trusted image address"
sidebar_label: "Add the trusted image address"
sidebar_class_name: api-method post
description: "Adds an image address specified in the request to the list of trusted image addresses."
---

**POST** `/api/2.0/mail/display_images/address`

Adds an image address specified in the request to the list of trusted image addresses.

## Request body

### address

**type:** `string`

Image address

**Example**: `"string"`

## Request example

```json
{
  "address": "string"
}
```

## Returns

Added image address. A request that is not authenticated returns `401`.
