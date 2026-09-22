---
title: "Delete a folder"
sidebar_label: "Delete a folder"
sidebar_class_name: api-method delete
description: "Deletes a user folder with the ID specified in the request."
---

**DELETE** `/api/2.0/mail/userfolders/{id}`

Deletes a user folder with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Folder ID

**Example**: `0`

## Returns

Operation status. A request that is not authenticated returns `401`.

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
