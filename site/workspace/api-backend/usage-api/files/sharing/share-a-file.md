---
title: "Share a file"
sidebar_label: "Share a file"
sidebar_class_name: api-method put
description: "Sets the sharing settings to a file with the ID specified in the request."
---

**PUT** `/api/2.0/files/file/{fileId}/share`

Sets the sharing settings to a file with the ID specified in the request.

**Note**: Each of the sharing parameters must contain two values: "ShareTo" - ID of the user with whom we want to share a file, "Access" - access type which we want to give to the user (Read, ReadWrite, etc).

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### share

**type:** `FileShareParams[]`

Collection of sharing parameters

### notify

**type:** `boolean`

Notifies users about the shared file or not

**Example**: `true`

### sharingMessage

**type:** `string`

Message to send when notifying about the shared file

**Example**: `"string"`

### advancedSettings

**type:** `object`

Advanced settings which prohibit printing, downloading, copying the file, and changing sharing settings

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

Shared file information. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
