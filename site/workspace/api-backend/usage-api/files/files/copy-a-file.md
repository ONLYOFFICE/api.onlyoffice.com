---
title: "Copy a file"
sidebar_label: "Copy a file"
sidebar_class_name: api-method post
description: "Copies (and converts if possible) an existing file to the specified folder."
---

**POST** `/api/2.0/files/file/{fileId}/copyas`

Copies (and converts if possible) an existing file to the specified folder.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### destFolderId

**type:** `string`

Destination folder ID

**Example**: `"string"`

### destTitle

**type:** `string`

Destination file title

**Example**: `"string"`

### toForm

**type:** `boolean`

Convert to form

**Example**: `true`

## Request example

```json
{
  "destFolderId": "string",
  "destTitle": "string",
  "toForm": true
}
```

## Returns

Copied file

### Name

**type:** `string`

**Example**: `"File name"`

### UpdatedBy

**type:** `EmployeeWraper`

### Updated

**type:** `string`

**Example**: `"2020-12-08T17:37:03.3424957Z"`

### Location

**type:** `string`

**Example**: `"4\\\\46\\\\File name"`

## Response example

```json
{
  "Name": "File name",
  "UpdatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "Updated": "2020-12-08T17:37:03.3424957Z",
  "Location": "4\\\\46\\\\File name"
}
```
