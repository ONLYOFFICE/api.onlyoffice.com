---
title: "Apply a filter"
sidebar_label: "Apply a filter"
sidebar_class_name: api-method get
description: "Applies a filter to the existing messages."
---

**GET** `/api/2.0/mail/filters/{id}/apply`

Applies a filter to the existing messages.

## Path parameters

### id

**type:** `integer`

Filter ID

**Example**: `0`

## Returns

Mail operation status. A request that is not authenticated returns `401`.

### Completed

**type:** `boolean`

**Example**: `true`

### Id

**type:** `string`

**Example**: `"Id"`

### Status

**type:** `string`

**Example**: `"Status"`

### Error

**type:** `string`

**Example**: `"Error"`

### Percents

**type:** `integer`

**Example**: `100`

### Source

**type:** `string`

**Example**: `"Source"`

### OperationType

**type:** `integer`

**Example**: `1`

### Operation

**type:** `string`

**Example**: `"Operation"`

## Response example

```json
{
  "Completed": true,
  "Id": "Id",
  "Status": "Status",
  "Error": "Error",
  "Percents": 100,
  "Source": "Source",
  "OperationType": 1,
  "Operation": "Operation"
}
```
