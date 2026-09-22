---
title: "Update a task milestone"
sidebar_label: "Update a task milestone"
sidebar_class_name: api-method put
description: "Updates a milestone of a task with the ID specified in the request."
---

**PUT** `/api/2.0/project/task/{taskid:[0-9]+}/milestone`

Updates a milestone of a task with the ID specified in the request.

## Request body

### taskid

**type:** `integer`

Task ID

**Example**: `0`

### milestoneid

**type:** `integer`

Milestone ID

**Example**: `0`

## Request example

```json
{
  "taskid": 0,
  "milestoneid": 0
}
```

## Returns

Updated task. A request that is not authenticated returns `401`.

### Files

**type:** `FileWrapper[]`

### Comments

**type:** `CommentInfo[]`

### CommentsCount

**type:** `integer`

**Example**: `1`

### IsSubscribed

**type:** `boolean`

**Example**: `false`

### CanEditFiles

**type:** `boolean`

**Example**: `false`

### CanCreateComment

**type:** `boolean`

**Example**: `false`

### Project

**type:** `ProjectWrapperFull`

### TimeSpend

**type:** `number`

**Example**: `3.5`

### CanEdit

**type:** `boolean`

**Example**: `false`

### CanCreateSubtask

**type:** `boolean`

**Example**: `false`

### CanCreateTimeSpend

**type:** `boolean`

**Example**: `false`

### CanDelete

**type:** `boolean`

**Example**: `false`

### CanReadFiles

**type:** `boolean`

**Example**: `false`

### Deadline

**type:** `string`

**Example**: `"2020-12-22T04:11:56.5768573Z"`

### StartDate

**type:** `string`

**Example**: `"2020-12-22T04:11:56.5768573Z"`

### MilestoneId

**type:** `integer`

**Example**: `123`

### Priority

**type:** `"Normal" | "High" | "Low"`

[0 - Normal, 1 - High, -1 - Low]

**Example**: `1`

### ProjectOwner

**type:** `SimpleProjectWrapper`

### Progress

**type:** `integer`

**Example**: `55`

### Subtasks

**type:** `SubtaskWrapper[]`

### Links

**type:** `TaskLinkWrapper[]`

### Responsibles

**type:** `EmployeeWraper[]`

### ResponsibleIds

**type:** `string[]`

### Milestone

**type:** `SimpleMilestoneWrapper`

### CustomTaskStatus

**type:** `integer[]`

### Created

**type:** `string`

**Example**: `"2020-12-22T04:11:56.5658524Z"`

### CreatedBy

**type:** `EmployeeWraper`

### CreatedById

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### Updated

**type:** `string`

**Example**: `"2020-12-22T04:11:56.5658524Z"`

### UpdatedBy

**type:** `EmployeeWraper`

### UpdatedById

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### Id

**type:** `integer`

**Example**: `10`

### Title

**type:** `string`

**Example**: `"Sample Title"`

### Description

**type:** `string`

**Example**: `"Sample description"`

### Status

**type:** `integer`

**Example**: `0`

### Responsible

**type:** `EmployeeWraper`

### ResponsibleId

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

## Response example

```json
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
```
