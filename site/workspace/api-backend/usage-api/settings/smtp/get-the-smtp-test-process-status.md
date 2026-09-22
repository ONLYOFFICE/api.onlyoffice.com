---
title: "Get the SMTP test process status"
sidebar_label: "Get the SMTP test process status"
sidebar_class_name: api-method get
description: "Returns the SMTP test process status."
---

**GET** `/api/2.0/settings/smtp/test/status`

Returns the SMTP test process status.

## Returns

SMTP operation status. A request that is not authenticated returns `401`.

### Completed

**type:** `boolean`

**Example**: `true`

### Id

**type:** `string`

**Example**: `"{some-random-guid}"`

### Status

**type:** `string`

**Example**: `""`

### Error

**type:** `string`

**Example**: `""`

### Percents

**type:** `integer`

**Example**: `0`

### Source

**type:** `string`

**Example**: `""`

## Response example

```json
{
  "Completed": true,
  "Id": "{some-random-guid}",
  "Status": "",
  "Error": "",
  "Percents": 0,
  "Source": ""
}
```
