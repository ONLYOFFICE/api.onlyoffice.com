---
title: "Get a portal quota"
sidebar_label: "Get a portal quota"
sidebar_class_name: api-method get
description: "Returns the current portal quota."
---

**GET** `/api/2.0/portal/quota`

Returns the current portal quota.

## Returns

Quota. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `234`

### Name

**type:** `string`

**Example**: `"Name"`

### MaxFileSize

**type:** `integer`

**Example**: `12345`

### MaxTotalSize

**type:** `integer`

**Example**: `12345`

### ActiveUsers

**type:** `integer`

**Example**: `2`

### Features

**type:** `string`

**Example**: `"Features"`

### Price

**type:** `number`

**Example**: `22.5`

### AvangateId

**type:** `string`

**Example**: `"AvangateId"`

### Visible

**type:** `boolean`

**Example**: `true`

### Year

**type:** `boolean`

**Example**: `true`

### Year3

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "Id": 234,
  "Name": "Name",
  "MaxFileSize": 12345,
  "MaxTotalSize": 12345,
  "ActiveUsers": 2,
  "Features": "Features",
  "Price": 22.5,
  "AvangateId": "AvangateId",
  "Visible": true,
  "Year": true,
  "Year3": true
}
```
