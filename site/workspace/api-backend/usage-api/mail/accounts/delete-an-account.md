---
title: "Delete an account"
sidebar_label: "Delete an account"
sidebar_class_name: api-method delete
description: "Deletes an account by email address specified in the request."
---

**DELETE** `/api/2.0/mail/accounts`

Deletes an account by email address specified in the request.

## Request body

### email

**type:** `string`

Account email address

**Example**: `"string"`

## Request example

```json
{
  "email": "string"
}
```

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
