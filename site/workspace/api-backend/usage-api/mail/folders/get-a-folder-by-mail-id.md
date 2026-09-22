---
title: "Get a folder by mail ID"
sidebar_label: "Get a folder by mail ID"
sidebar_class_name: api-method get
description: "Returns a user folder by the mail ID specified in the request."
---

**GET** `/api/2.0/mail/userfolders/bymail`

Returns a user folder by the mail ID specified in the request.

## Request body

### mailId

**type:** `integer`

Mail ID

**Example**: `0`

## Request example

```json
{
  "mailId": 0
}
```

## Returns

User folder. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `1234`

### ParentId

**type:** `integer`

**Example**: `1234`

### Name

**type:** `string`

**Example**: `"name"`

### UnreadCount

**type:** `integer`

**Example**: `123`

### TotalCount

**type:** `integer`

**Example**: `123`

### UnreadChainCount

**type:** `integer`

**Example**: `123`

### TotalChainCount

**type:** `integer`

**Example**: `123`

### FolderCount

**type:** `integer`

**Example**: `123`

## Response example

```json
{
  "Id": 1234,
  "ParentId": 1234,
  "Name": "name",
  "UnreadCount": 123,
  "TotalCount": 123,
  "UnreadChainCount": 123,
  "TotalChainCount": 123,
  "FolderCount": 123
}
```
