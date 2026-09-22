---
title: "Share a folder"
sidebar_label: "Share a folder"
sidebar_class_name: api-method put
description: "Sets the sharing settings to a folder with the ID specified in the request."
---

**PUT** `/api/2.0/files/folder/{folderId}/share`

Sets the sharing settings to a folder with the ID specified in the request.

**Note**: Each of the sharing parameters must contain two values: "ShareTo" - ID of the user with whom we want to share a folder, "Access" - access type which we want to give to the user (Read, ReadWrite, etc).

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Request body

### share

**type:** `FileShareParams[]`

Collection of sharing parameters

### notify

**type:** `boolean`

Notifies users about the shared folder or not

**Example**: `true`

### sharingMessage

**type:** `string`

Message to send when notifying about the shared folder

**Example**: `"string"`

## Request example

```json
{
  "share": [
    {
      "ShareTo": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
      "Access": "0"
    }
  ],
  "notify": true,
  "sharingMessage": "string"
}
```

## Returns

Shared folder information. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
