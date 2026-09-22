---
title: "Update a folder"
sidebar_label: "Update a folder"
sidebar_class_name: api-method put
description: "Updates a user folder with the parameters specified in the request."
---

**PUT** `/api/2.0/mail/userfolders/{id}`

Updates a user folder with the parameters specified in the request.

## Path parameters

### id

**type:** `integer`

Folder ID

**Example**: `0`

## Request body

### name

**type:** `string`

New folder name

**Example**: `"string"`

### parentId

**type:** `integer[]`

New parent folder ID (root level is equal to 0)

## Request example

```json
{
  "name": "string",
  "parentId": [
    0
  ]
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
