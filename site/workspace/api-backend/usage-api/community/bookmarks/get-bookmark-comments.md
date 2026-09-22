---
title: "Get bookmark comments"
sidebar_label: "Get bookmark comments"
sidebar_class_name: api-method get
description: "Returns a list of all the comments on the bookmark with the ID specified in the request."
---

**GET** `/api/2.0/community/bookmark/{id}/comment`

Returns a list of all the comments on the bookmark with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Bookmark ID

**Example**: `0`

## Returns

List of bookmark comments. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Text": "comment text",
    "Created": "2020-12-06T07:36:14.8151911Z",
    "Updated": "2020-12-06T07:36:14.8151911Z",
    "Id": "00000000-0000-0000-0000-000000000000",
    "ParentId": "00000000-0000-0000-0000-000000000000",
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
