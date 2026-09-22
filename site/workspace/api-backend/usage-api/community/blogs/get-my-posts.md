---
title: "Get my posts"
sidebar_label: "Get my posts"
sidebar_class_name: api-method get
description: "Returns a list of all the blog posts for the current user with the post titles, dates of creation and update, post texts, and author."
---

**GET** `/api/2.0/community/blog/@self`

Returns a list of all the blog posts for the current user with the post titles, dates of creation and update, post texts, and author.

## Returns

List of my posts. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Preview": "Preview post",
    "Title": "Example post",
    "Created": "2020-12-03T21:36:12.0774137Z",
    "Updated": "2020-12-03T21:36:12.0774137Z",
    "Id": "00000000-0000-0000-0000-000000000000",
    "Tags": [
      "Tag1,Tag1"
    ],
    "CreatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "BlogTitle": "Blog Title"
  }
]
```
