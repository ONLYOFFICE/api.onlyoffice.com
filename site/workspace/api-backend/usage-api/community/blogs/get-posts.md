---
title: "Get posts"
sidebar_label: "Get posts"
sidebar_class_name: api-method get
description: "Returns a list of all the posts from the portal blogs with the post titles, dates of creation and update, post texts, and authors."
---

**GET** `/api/2.0/community/blog`

Returns a list of all the posts from the portal blogs with the post titles, dates of creation and update, post texts, and authors.

## Returns

List of all posts. A request that is not authenticated returns `401`.

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
