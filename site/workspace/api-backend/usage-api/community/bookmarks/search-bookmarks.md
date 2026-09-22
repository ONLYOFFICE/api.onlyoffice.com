---
title: "Search bookmarks"
sidebar_label: "Search bookmarks"
sidebar_class_name: api-method get
description: "Returns a list of bookmarks matching the search query specified in the request with the bookmark titles, dates of creation and update, bookmark descriptions, and authors."
---

**GET** `/api/2.0/community/bookmark/@search/{query}`

Returns a list of bookmarks matching the search query specified in the request with the bookmark titles, dates of creation and update, bookmark descriptions, and authors.

## Path parameters

### query

**type:** `string`

Search query

**Example**: `"string"`

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
