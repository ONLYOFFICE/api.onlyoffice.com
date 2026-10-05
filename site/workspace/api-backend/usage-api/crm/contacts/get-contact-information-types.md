---
title: "Get contact information types"
sidebar_label: "Get contact information types"
sidebar_class_name: api-method get
description: "Returns a list of all the available contact information types."
---

**GET** `/api/2.0/crm/contact/data/infoType`

Returns a list of all the available contact information types.

## Returns

List of all the contact information types. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
