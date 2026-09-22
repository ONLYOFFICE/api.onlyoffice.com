---
title: "Download attachments"
sidebar_label: "Download attachments"
sidebar_class_name: api-method put
description: "Downloads all the attachments from the message with the ID specified in the request."
---

**PUT** `/api/2.0/mail/messages/attachment/downloadall/{messageId}`

Downloads all the attachments from the message with the ID specified in the request.

## Path parameters

### messageId

**type:** `integer`

Message ID

**Example**: `0`

## Returns

Attachment archive. A request that is not authenticated returns `401`.

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
