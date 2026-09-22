---
title: "Get filtered phone numbers"
sidebar_label: "Get filtered phone numbers"
sidebar_class_name: api-method get
description: "Returns all the available phone numbers matching the parameters specified in the request."
---

**GET** `/api/2.0/crm/voip/numbers/available`

Returns all the available phone numbers matching the parameters specified in the request.

## Request body

### numberType

**type:** `integer`

Number type

**Example**: `0`

### isoCountryCode

**type:** `string`

ISO country code

**Example**: `"string"`

## Request example

```json
{
  "numberType": 0,
  "isoCountryCode": "string"
}
```

## Returns

Phone numbers. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
