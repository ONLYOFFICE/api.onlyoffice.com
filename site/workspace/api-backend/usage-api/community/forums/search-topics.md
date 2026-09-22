---
title: "Search topics"
sidebar_label: "Search topics"
sidebar_class_name: api-method get
description: "Returns a list of topics matching the search query specified in the request with the topic titles, dates of creation and update, post texts, and authors."
---

**GET** `/api/2.0/community/forum/@search/{query}`

Returns a list of topics matching the search query specified in the request with the topic titles, dates of creation and update, post texts, and authors.

## Path parameters

### query

**type:** `string`

Search query

**Example**: `"string"`

## Returns

List of topics. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 10,
    "Title": "Sample topic",
    "Created": "2020-12-07T13:56:02.3259212Z",
    "Updated": "2020-12-07T13:56:02.3259212Z",
    "Text": "This is sample post",
    "UpdatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Status": 0,
    "Type": 0,
    "Tags": [
      "Tag1,Tag2"
    ]
  }
]
```
