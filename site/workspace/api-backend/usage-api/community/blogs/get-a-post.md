---
title: "Get a post"
sidebar_label: "Get a post"
sidebar_class_name: api-method get
description: "Returns the detailed information on the blog post with the ID specified in the request."
---

**GET** `/api/2.0/community/blog/{postid}`

Returns the detailed information on the blog post with the ID specified in the request.

## Path parameters

### postid

**type:** `string`

Post ID

**Example**: `"string"`

## Returns

Post information. A request that is not authenticated returns `401`.

### Text

**type:** `string`

**Example**: `"Post text"`

### Title

**type:** `string`

**Example**: `"Example post"`

### Created

**type:** `string`

**Example**: `"2020-12-06T07:36:14.7981820Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-06T07:36:14.7981820Z"`

### Id

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### CreatedBy

**type:** `EmployeeWraper`

## Response example

```json
{
  "Text": "Post text",
  "Title": "Example post",
  "Created": "2020-12-06T07:36:14.7981820Z",
  "Updated": "2020-12-06T07:36:14.7981820Z",
  "Id": "00000000-0000-0000-0000-000000000000",
  "CreatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  }
}
```
