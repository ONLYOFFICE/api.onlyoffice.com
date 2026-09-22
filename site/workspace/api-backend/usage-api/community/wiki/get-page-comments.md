---
title: "Get page comments"
sidebar_label: "Get page comments"
sidebar_class_name: api-method get
description: "Returns a list of all the comments on the wiki page with the name specified in the request."
---

**GET** `/api/2.0/community/wiki/{page}/comment`

Returns a list of all the comments on the wiki page with the name specified in the request.

## Path parameters

### page

**type:** `string`

Page name

**Example**: `"string"`

## Returns

List of comments. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
