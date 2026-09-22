---
title: "Get message comments"
sidebar_label: "Get message comments"
sidebar_class_name: api-method get
description: "Returns a list of the discussion message comments from a project with the ID specified in the request."
---

**GET** `/api/2.0/project/message/{messageid:[0-9]+}/comment`

Returns a list of the discussion message comments from a project with the ID specified in the request.

## Request body

### messageid

**type:** `integer`

Message ID

**Example**: `0`

## Request example

```json
{
  "messageid": 0
}
```

## Returns

Message comments. A request that is not authenticated returns `401`.

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
