---
title: "Get trusted image addresses"
sidebar_label: "Get trusted image addresses"
sidebar_class_name: api-method get
description: "Returns a list of all the trusted addresses for image displaying."
---

**GET** `/api/2.0/mail/display_images/addresses`

Returns a list of all the trusted addresses for image displaying.

## Returns

List of addresses. Email adresses are represented as strings in the name@domain format. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
