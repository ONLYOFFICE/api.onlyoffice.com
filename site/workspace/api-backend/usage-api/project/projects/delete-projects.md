---
title: "Delete projects"
sidebar_label: "Delete projects"
sidebar_class_name: api-method delete
description: "Deletes the projects with the IDs specified in the request from the portal."
---

**DELETE** `/api/2.0/project/`

Deletes the projects with the IDs specified in the request from the portal.

## Request body

### projectids

**type:** `integer[]`

List of project IDs

## Request example

```json
{
  "projectids": [
    0
  ]
}
```

## Returns

Deleted projects. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "CanEdit": false,
    "CanDelete": false,
    "Security": {
      "CanCreateMilestone": false,
      "CanCreateMessage": false,
      "CanCreateTask": false,
      "CanCreateTimeSpend": false,
      "CanEditTeam": false,
      "CanReadFiles": false,
      "CanReadMilestones": false,
      "CanReadMessages": false,
      "CanReadTasks": false,
      "CanLinkContact": false,
      "CanReadContacts": false,
      "CanEdit": false,
      "CanDelete": false,
      "IsInTeam": false
    },
    "ProjectFolder": "13234",
    "IsPrivate": false,
    "TaskCount": 0,
    "TaskCountTotal": 0,
    "MilestoneCount": 0,
    "DiscussionCount": 0,
    "ParticipantCount": 0,
    "TimeTrackingTotal": "TimeTrackingTotal",
    "DocumentsCount": 0,
    "IsFollow": "0",
    "Tags": [
      "Tags1,Tags2"
    ],
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
