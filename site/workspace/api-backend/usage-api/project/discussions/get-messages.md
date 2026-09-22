---
title: "Get messages"
sidebar_label: "Get messages"
sidebar_class_name: api-method get
description: "Returns a list of all the discussion messages within a project with the ID specified in the request."
---

**GET** `/api/2.0/project/{projectid:[0-9]+}/message`

Returns a list of all the discussion messages within a project with the ID specified in the request.

## Request body

### projectid

**type:** `integer`

Project ID

**Example**: `0`

## Request example

```json
{
  "projectid": 0
}
```

## Returns

List of messages. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "ProjectOwner": {
      "Id": 123,
      "Title": "Sample project",
      "Status": 0,
      "IsPrivate": false
    },
    "Text": "Hello, this is sample message",
    "CanCreateComment": false,
    "CanEdit": true,
    "CommentsCount": 5,
    "Created": "2020-12-22T04:11:56.5658524Z",
    "CreatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "CreatedById": "00000000-0000-0000-0000-000000000000",
    "Updated": "2020-12-22T04:11:56.5658524Z",
    "UpdatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "UpdatedById": "00000000-0000-0000-0000-000000000000",
    "Id": 10,
    "Title": "Sample Title",
    "Description": "Sample description",
    "Status": 0,
    "Responsible": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "ResponsibleId": "00000000-0000-0000-0000-000000000000"
  }
]
```
