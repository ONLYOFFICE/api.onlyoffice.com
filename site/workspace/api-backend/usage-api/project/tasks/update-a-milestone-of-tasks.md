---
title: "Update a milestone of tasks"
sidebar_label: "Update a milestone of tasks"
sidebar_class_name: api-method put
description: "Updates a milestone of the tasks with the IDs specified in the request."
---

**PUT** `/api/2.0/project/task/milestone`

Updates a milestone of the tasks with the IDs specified in the request.

## Request body

### taskids

**type:** `integer[]`

Task IDs

### milestoneid

**type:** `integer`

Milestone ID

**Example**: `0`

## Request example

```json
{
  "taskids": [
    0
  ],
  "milestoneid": 0
}
```

## Returns

Updated tasks. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Files": [
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
    ],
    "Comments": [
      {
        "CommentID": "12261949-db62-43c2-b956-91e12c412d5a",
        "UserID": "15985c13-ad91-4f2c-9286-cf991448e796",
        "UserFullName": "Administrator",
        "UserProfileLink": "/Products/People/Profile.aspx?user=administrator",
        "UserAvatarPath": "/skins/default/images/default_user_photo_size_82-82.png",
        "CommentBody": "das\\u000a",
        "Inactive": false,
        "IsRead": true,
        "IsEditPermissions": true,
        "IsResponsePermissions": true,
        "TimeStampStr": "15:39 Today",
        "Attachments": []
      }
    ],
    "CommentsCount": 1,
    "IsSubscribed": false,
    "CanEditFiles": false,
    "CanCreateComment": false,
    "Project": {
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
    },
    "TimeSpend": 3.5,
    "CanEdit": false,
    "CanCreateSubtask": false,
    "CanCreateTimeSpend": false,
    "CanDelete": false,
    "CanReadFiles": false,
    "Deadline": "2020-12-22T04:11:56.5768573Z",
    "StartDate": "2020-12-22T04:11:56.5768573Z",
    "MilestoneId": 123,
    "Priority": 1,
    "ProjectOwner": {
      "Id": 123,
      "Title": "Sample project",
      "Status": 0,
      "IsPrivate": false
    },
    "Progress": 55,
    "Subtasks": [
      {
        "CanEdit": false,
        "TaskId": 1234,
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
    ],
    "Links": [
      {
        "DependenceTaskId": 123,
        "ParentTaskId": 44,
        "LinkType": 1
      }
    ],
    "Responsibles": [
      {
        "Id": "00000000-0000-0000-0000-000000000000",
        "DisplayName": "Mike Zanyatski",
        "Title": "Manager",
        "AvatarSmall": "url to small avatar",
        "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
      }
    ],
    "ResponsibleIds": [
      "00000000-0000-0000-0000-000000000000"
    ],
    "Milestone": {
      "Id": 123,
      "Title": "Title",
      "Deadline": "2020-12-22T04:11:56.5768573Z"
    },
    "CustomTaskStatus": [
      1
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
