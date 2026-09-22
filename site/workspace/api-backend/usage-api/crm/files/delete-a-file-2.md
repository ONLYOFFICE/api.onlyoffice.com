---
title: "Delete a file"
sidebar_label: "Delete a file"
sidebar_class_name: api-method delete
description: "Deletes a file with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/files/{fileid:[0-9]+}`

Deletes a file with the ID specified in the request.

## Request body

### fileid

**type:** `integer`

File ID

**Example**: `0`

## Request example

```json
{
  "fileid": 0
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
