---
title: "Get event comments"
sidebar_label: "Get event comments"
sidebar_class_name: api-method get
description: "Returns a list of all the comments on the event with the ID specified in the request."
---

**GET** `/api/2.0/community/event/{feedid}/comment`

Returns a list of all the comments on the event with the ID specified in the request.

## Path parameters

### feedid

**type:** `integer`

Event ID

**Example**: `0`

## Returns

List of comments. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Text": "comment text",
    "Created": "2020-12-07T13:56:02.2899133Z",
    "Updated": "2020-12-07T13:56:02.2899133Z",
    "Id": 10,
    "ParentId": 123,
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
