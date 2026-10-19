---
title: "Get followed projects"
sidebar_label: "Get followed projects"
sidebar_class_name: api-method get
description: "Returns a list of all the projects which the current user is following."
---

**GET** `/api/2.0/project/@follow`

Returns a list of all the projects which the current user is following.

## Returns

List of projects. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "CanEdit": false,
    "IsPrivate": false,
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
