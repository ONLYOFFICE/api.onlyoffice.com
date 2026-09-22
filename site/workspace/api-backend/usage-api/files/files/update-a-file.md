---
title: "Update a file"
sidebar_label: "Update a file"
sidebar_class_name: api-method put
description: "Updates the information of the selected file with the parameters specified in the request."
---

**PUT** `/api/2.0/files/file/{fileId}`

Updates the information of the selected file with the parameters specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### title

**type:** `string`

New file title

**Example**: `"string"`

### lastVersion

**type:** `integer`

Number of the latest file version

**Example**: `0`

## Request example

```json
{
  "title": "string",
  "lastVersion": 0
}
```

## Returns

File information. A request that is not authenticated returns `401`.

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
