---
title: "Create a folder structure"
sidebar_label: "Create a folder structure"
sidebar_class_name: api-method post
description: "Creates a new folder structure specified in the request in a folder with a specific ID."
---

**POST** `/api/2.0/files/folders/{folderId}`

Creates a new folder structure specified in the request in a folder with a specific ID.

## Path parameters

### folderId

**type:** `string`

Parent folder ID

**Example**: `"string"`

## Request body

### relativePaths

**type:** `string[]`

Relative paths to create a folder structure

## Request example

```json
{
  "relativePaths": [
    "string"
  ]
}
```

## Returns

Main folder contents. A request that is not authenticated returns `401`.

### TotalFiles

**type:** `integer`

**Example**: `5`

### TotalSubFolders

**type:** `integer`

**Example**: `5`

### Shareable

**type:** `boolean`

**Example**: `true`

### NewForMe

**type:** `integer`

**Example**: `3`

### FolderUrl

**type:** `string`

**Example**: `"folder url"`

### IsFavorite

**type:** `boolean`

**Example**: `true`

### ID

**type:** `object`

**Example**: `"123wda-wdaw"`

### Title

**type:** `string`

**Example**: `"title"`

### CreateBy

**type:** `string`

**Example**: `"d40b68d0-5b86-4823-b22a-f57f429f5aff"`

### CreateByString

**type:** `string`

**Example**: `"admin"`

### CreateOnString

**type:** `string`

**Example**: `"create_on"`

### ModifiedOnString

**type:** `string`

**Example**: `"modified_on"`

### ModifiedBy

**type:** `string`

**Example**: `"d40b68d0-5b86-4823-b22a-f57f429f5aff"`

### ModifiedByString

**type:** `string`

**Example**: `"admin"`

### Error

**type:** `string`

**Example**: `""`

### Access

**type:** `"None" | "ReadWrite" | "Read" | "Restrict" | "Varies" | "Review" | "Comment" | "FillForms" | "CustomFilter"`

[0 - None, 1 - ReadWrite, 2 - Read, 3 - Restrict, 4 - Varies, 5 - Review, 6 - Comment, 7 - FillForms, 8 - CustomFilter]

**Example**: `3`

### Shared

**type:** `boolean`

**Example**: `true`

### ProviderId

**type:** `integer`

**Example**: `3`

### ProviderKey

**type:** `string`

**Example**: `"provider_key"`

### FolderIdDisplay

**type:** `object`

**Example**: `"123wda5"`

### DeletedPermanentlyOnString

**type:** `string`

**Example**: `"string"`

### DenyDownload

**type:** `boolean`

**Example**: `true`

### DenySharing

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "TotalFiles": 5,
  "TotalSubFolders": 5,
  "Shareable": true,
  "NewForMe": 3,
  "FolderUrl": "folder url",
  "IsFavorite": true,
  "ID": "123wda-wdaw",
  "Title": "title",
  "CreateBy": "d40b68d0-5b86-4823-b22a-f57f429f5aff",
  "CreateByString": "admin",
  "CreateOnString": "create_on",
  "ModifiedOnString": "modified_on",
  "ModifiedBy": "d40b68d0-5b86-4823-b22a-f57f429f5aff",
  "ModifiedByString": "admin",
  "Error": "",
  "Access": 3,
  "Shared": true,
  "ProviderId": 3,
  "ProviderKey": "provider_key",
  "FolderIdDisplay": "123wda5",
  "DeletedPermanentlyOnString": "string",
  "DenyDownload": true,
  "DenySharing": true
}
```
