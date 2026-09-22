---
title: "Get the user folders"
sidebar_label: "Get the user folders"
sidebar_class_name: api-method get
description: "Returns a list of user folders with the IDs specified in the request."
---

**GET** `/api/2.0/mail/userfolders`

Returns a list of user folders with the IDs specified in the request.

## Request body

### ids

**type:** `integer[]`

List of folder IDs

### parentId

**type:** `integer[]`

Parent folder ID (root level is equal to 0)

## Request example

```json
{
  "ids": [
    0
  ],
  "parentId": [
    0
  ]
}
```

## Returns

List of folders. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
