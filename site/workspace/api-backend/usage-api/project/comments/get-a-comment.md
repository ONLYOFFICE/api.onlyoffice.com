---
title: "Get a comment"
sidebar_label: "Get a comment"
sidebar_class_name: api-method get
description: "Returns the information about a comment with the ID specified in the request."
---

**GET** `/api/2.0/project/comment/{commentid}`

Returns the information about a comment with the ID specified in the request.

## Path parameters

### commentid

**type:** `string`

Comment ID

**Example**: `"string"`

## Returns

Comment. A request that is not authenticated returns `401`.

### Id

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### ParentId

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### Page

**type:** `string`

**Example**: `"Some page"`

### Content

**type:** `string`

**Example**: `"Comment content"`

### Author

**type:** `EmployeeWraper`

### LastModified

**type:** `string`

**Example**: `"2020-12-08T17:37:03.3304954Z"`

### Inactive

**type:** `boolean`

**Example**: `false`

## Response example

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "ParentId": "00000000-0000-0000-0000-000000000000",
  "Page": "Some page",
  "Content": "Comment content",
  "Author": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "LastModified": "2020-12-08T17:37:03.3304954Z",
  "Inactive": false
}
```
