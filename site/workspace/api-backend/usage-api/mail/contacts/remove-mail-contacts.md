---
title: "Remove mail contacts"
sidebar_label: "Remove mail contacts"
sidebar_class_name: api-method put
description: "Removes the mail contacts with the IDs specified in the request."
---

**PUT** `/api/2.0/mail/contacts/remove`

Removes the mail contacts with the IDs specified in the request.

## Request body

### ids

**type:** `integer[]`

List of mail contact IDs

## Request example

```json
{
  "ids": [
    0
  ]
}
```

## Returns

List of removed mail contact IDs. A request that is not authenticated returns `401`.

## Response example

```json
[
  0
]
```
