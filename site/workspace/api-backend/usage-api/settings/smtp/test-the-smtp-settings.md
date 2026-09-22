---
title: "Test the SMTP settings"
sidebar_label: "Test the SMTP settings"
sidebar_class_name: api-method get
description: "Tests the SMTP settings for the current portal (send test message to the user email)."
---

**GET** `/api/2.0/settings/smtp/test`

Tests the SMTP settings for the current portal (send test message to the user email).

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
