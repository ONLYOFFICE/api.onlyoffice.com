---
title: "Get post comments"
sidebar_label: "Get post comments"
sidebar_class_name: api-method get
description: "Returns a list of all the comments on the blog post with the ID specified in the request."
---

**GET** `/api/2.0/community/blog/{postid}/comment`

Returns a list of all the comments on the blog post with the ID specified in the request.

## Path parameters

### postid

**type:** `string`

Post ID (GUID)

**Example**: `"string"`

## Returns

List of post comments. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Text": "comment text",
    "Created": "2020-12-03T21:36:13.0325127Z",
    "Updated": "c2020-12-03T21:36:13.0325127Z",
    "Id": "c2020-12-03T21:36:13.0325127Z",
    "CreatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    }
  }
]
```
