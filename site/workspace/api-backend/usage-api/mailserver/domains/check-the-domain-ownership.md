---
title: "Check the domain ownership"
sidebar_label: "Check the domain ownership"
sidebar_class_name: api-method get
description: "Checks if a web domain specified in the request belongs to the current user or not."
---

**GET** `/api/2.0/mailserver/domains/ownership/check`

Checks if a web domain specified in the request belongs to the current user or not.

## Request body

### name

**type:** `string`

Web domain name

**Example**: `"string"`

## Request example

```json
{
  "name": "string"
}
```

## Returns

Boolean value: true - current user is the domain owner, false - current user is not the domain owner. A request that is not authenticated returns `401`.
