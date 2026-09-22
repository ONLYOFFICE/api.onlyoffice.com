---
title: "Insert a file"
sidebar_label: "Insert a file"
sidebar_class_name: api-method post
description: "Inserts a file specified in the request to the selected folder by single file uploading."
---

**POST** `/api/2.0/files/{folderId}/insert`

Inserts a file specified in the request to the selected folder by single file uploading.

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Request body

### file

**type:** `object`

Request input stream

### title

**type:** `string`

File name

**Example**: `"string"`

### createNewIfExist

**type:** `boolean[]`

Specifies whether to create a new file if it already exists or not

### keepConvertStatus

**type:** `boolean`

Specifies whether to keep the file converting status or not

**Example**: `true`

## Request example

```json
{
  "file": {},
  "title": "string",
  "createNewIfExist": [
    true
  ],
  "keepConvertStatus": true
}
```

## Returns

Inserted file. A request that is not authenticated returns `401`.

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
