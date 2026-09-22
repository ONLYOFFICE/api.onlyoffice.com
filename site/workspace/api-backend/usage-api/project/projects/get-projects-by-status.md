---
title: "Get projects by status"
sidebar_label: "Get projects by status"
sidebar_class_name: api-method get
description: "Returns a list of all the projects with a status specified in the request."
---

**GET** `/api/2.0/project/{status:(open|paused|closed)}`

Returns a list of all the projects with a status specified in the request.

## Request body

### status

**type:** `integer`

Project status ("Open", "Paused", or "Closed")

**Example**: `0`

## Request example

```json
{
  "status": 0
}
```

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
