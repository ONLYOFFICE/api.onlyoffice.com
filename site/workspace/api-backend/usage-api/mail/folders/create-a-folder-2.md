---
title: "Create a folder"
sidebar_label: "Create a folder"
sidebar_class_name: api-method post
description: "Creates a user folder with the name specified in the request."
---

**POST** `/api/2.0/mail/userfolders`

Creates a user folder with the name specified in the request.

## Request body

### name

**type:** `string`

Folder name

**Example**: `"string"`

### parentId

**type:** `integer`

Parent folder ID (root level is equal to 0)

**Example**: `0`

## Request example

```json
{
  "name": "string",
  "parentId": 0
}
```

## Returns

Folder information. A request that is not authenticated returns `401`.

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
