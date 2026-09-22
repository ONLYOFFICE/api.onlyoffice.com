---
title: "Remove the trusted image address"
sidebar_label: "Remove the trusted image address"
sidebar_class_name: api-method delete
description: "Removes an image address specified in the request from the list of trusted image addresses."
---

**DELETE** `/api/2.0/mail/display_images/address`

Removes an image address specified in the request from the list of trusted image addresses.

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

Removed image address. A request that is not authenticated returns `401`.
