---
title: "Create a post"
sidebar_label: "Create a post"
sidebar_class_name: api-method post
description: "Creates a blog post with the specified title, content, tags and subscription to comments defined in the request body."
---

**POST** `/api/2.0/community/blog`

Creates a blog post with the specified title, content, tags and subscription to comments defined in the request body.

## Request body

### title

**type:** `string`

Post title

**Example**: `"string"`

### content

**type:** `string`

Post text

**Example**: `"string"`

### tags

**type:** `string`

List of tags separated with comma

**Example**: `"string"`

### subscribeComments

**type:** `boolean`

Subscribes to the post comments or not

**Example**: `true`

## Request example

```json
{
  "title": "string",
  "content": "string",
  "tags": "string",
  "subscribeComments": true
}
```

## Returns

Newly created post. A request that is not authenticated returns `401`.

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
