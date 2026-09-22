---
title: "Rename a folder"
sidebar_label: "Rename a folder"
sidebar_class_name: api-method put
description: "Renames the selected folder with a new title specified in the request."
---

**PUT** `/api/2.0/files/folder/{folderId}`

Renames the selected folder with a new title specified in the request.

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Request body

### title

**type:** `string`

New folder title

**Example**: `"string"`

## Request example

```json
{
  "title": "string"
}
```

## Returns

Folder contents. A request that is not authenticated returns `401`.

### ParentId

**type:** `object`

**Example**: `"1840746475"`

### FilesCount

**type:** `integer`

**Example**: `1840746475`

### FoldersCount

**type:** `integer`

**Example**: `1840746475`

### IsShareable

**type:** `boolean`

**Example**: `true`

### IsFavorite

**type:** `boolean`

**Example**: `true`

### Id

**type:** `object`

**Example**: `"857864274"`

### Title

**type:** `string`

**Example**: `"Some titile.txt"`

### Access

**type:** `"None" | "ReadWrite" | "Read" | "Restrict" | "Varies" | "Review" | "Comment" | "FillForms" | "CustomFilter"`

[0 - None, 1 - ReadWrite, 2 - Read, 3 - Restrict, 4 - Varies, 5 - Review, 6 - Comment, 7 - FillForms, 8 - CustomFilter]

**Example**: `1`

### Shared

**type:** `boolean`

**Example**: `false`

### Created

**type:** `string`

**Example**: `"2020-12-13T17:13:31.5902727Z"`

### CreatedBy

**type:** `EmployeeWraper`

### Updated

**type:** `string`

**Example**: `"2020-12-13T17:13:31.5902727Z"`

### RootFolderType

**type:** `"DEFAULT" | "COMMON" | "BUNCH" | "TRASH" | "USER" | "SHARE" | "Projects" | "Favorites" | "Recent" | "Templates" | "Privacy"`

[0 - DEFAULT, 1 - COMMON, 2 - BUNCH, 3 - TRASH, 5 - USER, 6 - SHARE, 8 - Projects, 10 - Favorites, 11 - Recent, 12 - Templates, 13 - Privacy]

**Example**: `2`

### UpdatedBy

**type:** `EmployeeWraper`

### ProviderItem

**type:** `boolean`

**Example**: `true`

### ProviderKey

**type:** `string`

**Example**: `"1234d"`

### ProviderId

**type:** `integer`

**Example**: `1234`

### DenyDownload

**type:** `boolean`

**Example**: `true`

### DenySharing

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "ParentId": "1840746475",
  "FilesCount": 1840746475,
  "FoldersCount": 1840746475,
  "IsShareable": true,
  "IsFavorite": true,
  "Id": "857864274",
  "Title": "Some titile.txt",
  "Access": 1,
  "Shared": false,
  "Created": "2020-12-13T17:13:31.5902727Z",
  "CreatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "Updated": "2020-12-13T17:13:31.5902727Z",
  "RootFolderType": 2,
  "UpdatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "ProviderItem": true,
  "ProviderKey": "1234d",
  "ProviderId": 1234,
  "DenyDownload": true,
  "DenySharing": true
}
```
