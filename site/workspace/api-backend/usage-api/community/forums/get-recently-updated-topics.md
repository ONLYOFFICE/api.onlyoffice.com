---
title: "Get recently updated topics"
sidebar_label: "Get recently updated topics"
sidebar_class_name: api-method get
description: "Returns a list of all the recently updated topics in the portal forums with the topic titles, dates of creation and update, post texts, and authors."
---

**GET** `/api/2.0/community/forum/topic/recent`

Returns a list of all the recently updated topics in the portal forums with the topic titles, dates of creation and update, post texts, and authors.

## Returns

List of recently updated topics. A request that is not authenticated returns `401`.

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
