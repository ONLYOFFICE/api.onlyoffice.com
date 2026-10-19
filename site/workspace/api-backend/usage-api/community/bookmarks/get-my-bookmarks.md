---
title: "Get my bookmarks"
sidebar_label: "Get my bookmarks"
sidebar_class_name: api-method get
description: "Returns a list of all the bookmarks for the current user with the bookmark titles, dates of creation and update, bookmark texts, and author."
---

**GET** `/api/2.0/community/bookmark/@self`

Returns a list of all the bookmarks for the current user with the bookmark titles, dates of creation and update, bookmark texts, and author.

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
