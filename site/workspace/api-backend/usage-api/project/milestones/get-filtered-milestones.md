---
title: "Get filtered milestones"
sidebar_label: "Get filtered milestones"
sidebar_class_name: api-method get
description: "Returns a list of all the milestones matching the parameters specified in the request."
---

**GET** `/api/2.0/project/milestone/filter`

Returns a list of all the milestones matching the parameters specified in the request.

## Request body

### projectid

**type:** `integer`

Project ID

**Example**: `0`

### tag

**type:** `integer`

Milestone tag

**Example**: `0`

### status

**type:** `integer[]`

Milestone status ("Open" or "Closed")

### deadlineStart

**type:** `string`

Minimum value of milestone deadline

**Example**: `"string"`

### deadlineStop

**type:** `string`

Maximum value of milestone deadline

**Example**: `"string"`

### taskResponsible

**type:** `string[]`

Milestone responsible GUID

### lastId

**type:** `integer`

Last milestone ID

**Example**: `0`

### myProjects

**type:** `boolean`

Specifies whether to return milestones only from my projects or not

**Example**: `true`

### milestoneResponsible

**type:** `string`

Milestone responsible GUID

**Example**: `"string"`

## Request example

```json
{
  "projectid": 0,
  "tag": 0,
  "status": [
    0
  ],
  "deadlineStart": "string",
  "deadlineStop": "string",
  "taskResponsible": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "lastId": 0,
  "myProjects": true,
  "milestoneResponsible": "string"
}
```

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
