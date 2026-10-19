---
title: "Get recent bookmarks"
sidebar_label: "Get recent bookmarks"
sidebar_class_name: api-method get
description: "Returns a list of recently added bookmarks with the bookmark titles, dates of creation and update, bookmark texts, and authors."
---

**GET** `/api/2.0/community/bookmark/top/recent`

Returns a list of recently added bookmarks with the bookmark titles, dates of creation and update, bookmark texts, and authors.

## Returns

List of bookmarks. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 11,
    "Title": "Google inc.",
    "Url": "http://www.google.com",
    "Thumbnail": "Url to thumbnail",
    "Created": "2020-12-06T07:36:14.8181893Z",
    "Updated": "2020-12-06T07:36:14.8181893Z",
    "Description": "Google",
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
