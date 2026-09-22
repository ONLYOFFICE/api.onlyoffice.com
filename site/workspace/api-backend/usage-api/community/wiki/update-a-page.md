---
title: "Update a page"
sidebar_label: "Update a page"
sidebar_class_name: api-method put
description: "Updates a wiki page with the name and content specified in the request."
---

**PUT** `/api/2.0/community/wiki/{name}`

Updates a wiki page with the name and content specified in the request.

## Path parameters

### name

**type:** `string`

New page name

**Example**: `"string"`

## Request body

### body

**type:** `string`

New page content

**Example**: `"string"`

## Request example

```json
{
  "body": "string"
}
```

## Returns

Page information. A request that is not authenticated returns `401`.

### Name

**type:** `string`

**Example**: `"Page name"`

### Content

**type:** `string`

**Example**: `"Page content"`

### UpdatedBy

**type:** `EmployeeWraper`

### Updated

**type:** `string`

**Example**: `"2020-12-08T17:37:03.3164965Z"`

## Response example

```json
{
  "Name": "Page name",
  "Content": "Page content",
  "UpdatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "Updated": "2020-12-08T17:37:03.3164965Z"
}
```
