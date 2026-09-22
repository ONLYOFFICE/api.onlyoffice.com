---
title: "Create a file in the \"My documents\" section"
sidebar_label: "Create a file in the \"My documents\" section"
sidebar_class_name: api-method post
description: "Creates a new file in the \"My documents\" section with the title specified in the request."
---

**POST** `/api/2.0/files/@my/file`

Creates a new file in the "My documents" section with the title specified in the request.

**Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.

## Request body

### title

**type:** `string`

File title

**Example**: `"string"`

## Request example

```json
{
  "title": "string"
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
