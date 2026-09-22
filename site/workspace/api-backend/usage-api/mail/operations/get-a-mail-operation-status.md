---
title: "Get a mail operation status"
sidebar_label: "Get a mail operation status"
sidebar_class_name: api-method get
description: "Returns a status of the mail operation with the ID specified in the request."
---

**GET** `/api/2.0/mail/operations/{operationId}`

Returns a status of the mail operation with the ID specified in the request.

## Path parameters

### operationId

**type:** `string`

Operation ID

**Example**: `"string"`

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
