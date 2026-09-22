---
title: "Get forums"
sidebar_label: "Get forums"
sidebar_class_name: api-method get
description: "Returns a list of all the portal forums with the topic/thread titles, dates of creation and update, post texts, and authors."
---

**GET** `/api/2.0/community/forum`

Returns a list of all the portal forums with the topic/thread titles, dates of creation and update, post texts, and authors.

## Returns

List of forums. A request that is not authenticated returns `401`.

### Categories

**type:** `ForumCategoryWrapper[]`

## Response example

```json
{
  "Categories": [
    {
      "Id": 0,
      "Title": "Sample title",
      "Created": "2020-12-07T13:56:02.3459179Z",
      "Updated": "2020-12-07T13:56:02.3459179Z",
      "Description": "Sample category",
      "Threads": [
        {
          "Id": 10,
          "Title": "The Thread",
          "Description": "Sample thread",
          "Created": "2020-12-07T13:56:02.3249197Z",
          "Updated": "2020-12-07T13:56:02.3249197Z",
          "RecentTopicId": 1234,
          "RecentTopicTitle": "Sample topic",
          "UpdatedBy": {
            "Id": "00000000-0000-0000-0000-000000000000",
            "DisplayName": "Mike Zanyatski",
            "Title": "Manager",
            "AvatarSmall": "url to small avatar",
            "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
          }
        }
      ]
    }
  ]
}
```
