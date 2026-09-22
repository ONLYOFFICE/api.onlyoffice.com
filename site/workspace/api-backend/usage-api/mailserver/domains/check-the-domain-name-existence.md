---
title: "Check the domain name existence"
sidebar_label: "Check the domain name existence"
sidebar_class_name: api-method get
description: "Checks if a web domain name specified in the request already exists or not."
---

**GET** `/api/2.0/mailserver/domains/exists`

Checks if a web domain name specified in the request already exists or not.

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

Boolean value: true - domain name exists, false - domain name does not exist. A request that is not authenticated returns `401`.
