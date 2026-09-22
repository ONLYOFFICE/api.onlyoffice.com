---
title: "Get the shared link template"
sidebar_label: "Get the shared link template"
sidebar_class_name: api-method get
description: "Returns a new unsaved link object to the file with the ID specified in the request."
---

**GET** `/api/2.0/files/{fileId}/sharedlink/template`

Returns a new unsaved link object to the file with the ID specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### isFolder

**type:** `boolean`

Specifies if a link is to the shared folder or not

**Example**: `true`

## Request example

```json
{
  "isFolder": true
}
```

## Returns

Shared link template. A request that is not authenticated returns `401`.

### SubjectId

**type:** `string`

**Example**: `"string"`

### SubjectName

**type:** `string`

**Example**: `"string"`

### Link

**type:** `string`

**Example**: `"string"`

### SubjectGroup

**type:** `boolean`

**Example**: `true`

### Owner

**type:** `boolean`

**Example**: `true`

### Share

**type:** `"None" | "ReadWrite" | "Read" | "Restrict" | "Varies" | "Review" | "Comment" | "FillForms" | "CustomFilter"`

[0 - None, 1 - ReadWrite, 2 - Read, 3 - Restrict, 4 - Varies, 5 - Review, 6 - Comment, 7 - FillForms, 8 - CustomFilter]

**Example**: `"None"`

### LockedRights

**type:** `boolean`

**Example**: `true`

### DisableRemove

**type:** `boolean`

**Example**: `true`

### LinkSettings

**type:** `LinkSettingsWrapper`

### EntryType

**type:** `"Folder" | "File"`

[1 - Folder, 2 - File]

**Example**: `"Folder"`

### Inherited

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "SubjectId": "string",
  "SubjectName": "string",
  "Link": "string",
  "SubjectGroup": true,
  "Owner": true,
  "Share": "None",
  "LockedRights": true,
  "DisableRemove": true,
  "LinkSettings": {
    "AutoDelete": true,
    "ExpirationDate": "string",
    "Expired": true,
    "Password": "string"
  },
  "EntryType": "Folder",
  "Inherited": true
}
```
