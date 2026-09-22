---
title: "Create a file"
sidebar_label: "Create a file"
sidebar_class_name: api-method post
description: "Creates a new file in the specified folder with the title specified in the request."
---

**POST** `/api/2.0/files/{folderId}/file`

Creates a new file in the specified folder with the title specified in the request.

**Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Request body

### title

**type:** `string`

File title

**Example**: `"string"`

### templateId

**type:** `string`

Template file ID

**Example**: `"string"`

### enableExternalExt

**type:** `boolean`

Specifies whether to allow the creation of external extension files or not

**Example**: `true`

## Request example

```json
{
  "title": "string",
  "templateId": "string",
  "enableExternalExt": true
}
```

## Returns

New file information. A request that is not authenticated returns `401`.

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
