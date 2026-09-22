---
title: "Get a file"
sidebar_label: "Get a file"
sidebar_class_name: api-method get
description: "Returns the detailed information about a file with the name specified in the request from the wiki page 'Files' section."
---

**GET** `/api/2.0/community/wiki/file/{name}`

Returns the detailed information about a file with the name specified in the request from the wiki page 'Files' section.

## Path parameters

### name

**type:** `string`

File name

**Example**: `"string"`

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
