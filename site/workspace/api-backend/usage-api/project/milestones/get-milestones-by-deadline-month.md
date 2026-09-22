---
title: "Get milestones by deadline month"
sidebar_label: "Get milestones by deadline month"
sidebar_class_name: api-method get
description: "Returns a list of all the milestones with the deadline month specified in the request."
---

**GET** `/api/2.0/project/milestone/{year}/{month}`

Returns a list of all the milestones with the deadline month specified in the request.

## Path parameters

### year

**type:** `integer`

Deadline year

**Example**: `0`

### month

**type:** `integer`

Deadline month

**Example**: `0`

## Returns

List of milestones. A request that is not authenticated returns `401`.

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
    "Deadline": "2020-12-22T04:11:56.4458522Z",
    "IsKey": false,
    "IsNotify": false,
    "CanEdit": false,
    "CanDelete": false,
    "ActiveTaskCount": 15,
    "ClosedTaskCount": 5,
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
