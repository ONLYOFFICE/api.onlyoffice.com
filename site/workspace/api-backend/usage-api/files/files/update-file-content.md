---
title: "Update file content"
sidebar_label: "Update file content"
sidebar_class_name: api-method put
description: "Updates the content of a file with the ID specified in the request."
---

**PUT** `/api/2.0/files/{fileId}/update`

Updates the content of a file with the ID specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### file

**type:** `object`

Request input stream

### fileExtension

**type:** `string`

File extension

**Example**: `"string"`

### encrypted

**type:** `boolean`

Specifies whether to encrypt a file or not

**Example**: `true`

### forcesave

**type:** `boolean`

Specifies whether to force save a file or not

**Example**: `true`

## Request example

```json
{
  "file": {},
  "fileExtension": "string",
  "encrypted": true,
  "forcesave": true
}
```

## Returns

Updated file. A request that is not authenticated returns `401`.

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
