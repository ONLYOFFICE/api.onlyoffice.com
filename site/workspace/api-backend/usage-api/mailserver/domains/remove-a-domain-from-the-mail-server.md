---
title: "Remove a domain from the mail server"
sidebar_label: "Remove a domain from the mail server"
sidebar_class_name: api-method delete
description: "Deletes a web domain with the ID specified in the request from the mail server."
---

**DELETE** `/api/2.0/mailserver/domains/remove/{id}`

Deletes a web domain with the ID specified in the request from the mail server.

## Path parameters

### id

**type:** `integer`

Web domain ID

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
