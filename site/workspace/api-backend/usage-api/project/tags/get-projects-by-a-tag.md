---
title: "Get projects by a tag"
sidebar_label: "Get projects by a tag"
sidebar_class_name: api-method get
description: "Returns the detailed list of all the projects with a tag specified in the request."
---

**GET** `/api/2.0/project/tag/{tag}`

Returns the detailed list of all the projects with a tag specified in the request.

## Path parameters

### tag

**type:** `string`

Tag name

**Example**: `"string"`

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
