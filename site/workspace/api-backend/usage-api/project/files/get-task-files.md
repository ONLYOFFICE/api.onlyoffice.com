---
title: "Get task files"
sidebar_label: "Get task files"
sidebar_class_name: api-method get
description: "Returns a list of all the files attached to the task with the ID specified in the request."
---

**GET** `/api/2.0/project/task/{taskid:[0-9]+}/files`

Returns a list of all the files attached to the task with the ID specified in the request.

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

List of files. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Name": "File name",
    "UpdatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Updated": "2020-12-08T17:37:03.3424957Z",
    "Location": "4\\\\46\\\\File name"
  }
]
```
