---
title: "Get task comments"
sidebar_label: "Get task comments"
sidebar_class_name: api-method get
description: "Returns a list of the comments for the task with the ID specified in the request."
---

**GET** `/api/2.0/project/task/{taskid:[0-9]+}/comment`

Returns a list of the comments for the task with the ID specified in the request.

## Request body

### taskid

**type:** `integer`

Task ID

**Example**: `0`

## Request example

```json
{
  "taskid": 0
}
```

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
