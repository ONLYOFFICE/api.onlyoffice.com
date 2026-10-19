---
title: "Get project tags"
sidebar_label: "Get project tags"
sidebar_class_name: api-method get
description: "Returns a list of all the available project tags."
---

**GET** `/api/2.0/project/tag`

Returns a list of all the available project tags.

## Returns

List of tags. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
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
