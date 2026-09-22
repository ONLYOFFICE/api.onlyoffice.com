---
title: "Update a post"
sidebar_label: "Update a post"
sidebar_class_name: api-method put
description: "Updates the selected post changing the post title, content or/and tags specified in the request."
---

**PUT** `/api/2.0/community/blog/{postid}`

Updates the selected post changing the post title, content or/and tags specified in the request.

## Path parameters

### postid

**type:** `string`

Post ID

**Example**: `"string"`

## Request body

### title

**type:** `string`

New title

**Example**: `"string"`

### content

**type:** `string`

New post text

**Example**: `"string"`

### tags

**type:** `string`

New list of tags separated with comma

**Example**: `"string"`

## Request example

```json
{
  "title": "string",
  "content": "string",
  "tags": "string"
}
```

## Returns

Updated post. A request that is not authenticated returns `401`.

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
