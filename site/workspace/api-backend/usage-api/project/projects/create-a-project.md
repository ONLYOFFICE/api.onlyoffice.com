---
title: "Create a project"
sidebar_label: "Create a project"
sidebar_class_name: api-method post
description: "Creates a new project using all the necessary (title, description, responsible ID, etc) and some optional parameters specified in the request."
---

**POST** `/api/2.0/project/`

Creates a new project using all the necessary (title, description, responsible ID, etc) and some optional parameters specified in the request.

## Request body

### title

**type:** `string`

Project title

**Example**: `"string"`

### description

**type:** `string`

Project description

**Example**: `"string"`

### responsibleId

**type:** `string`

Project responsible ID

**Example**: `"string"`

### tags

**type:** `string`

Project tags

**Example**: `"string"`

### private

**type:** `boolean`

Specifies if this project is private or not

**Example**: `true`

### participants

**type:** `string[]`

Project participants

### notify

**type:** `boolean[]`

Specifies whether to notify a project manager about the project actions or not

### tasks

**type:** `Task[]`

Project tasks

### milestones

**type:** `Milestone[]`

Project milestones

### notifyResponsibles

**type:** `boolean[]`

Specifies whether to notify responsibles about the project actions or not

## Request example

```json
{
  "title": "string",
  "description": "string",
  "responsibleId": "string",
  "tags": "string",
  "private": true,
  "participants": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "notify": [
    true
  ],
  "tasks": [
    {}
  ],
  "milestones": [
    {}
  ],
  "notifyResponsibles": [
    true
  ]
}
```

## Returns

Newly created project. A request that is not authenticated returns `401`.

### CanEdit

**type:** `boolean`

**Example**: `false`

### CanDelete

**type:** `boolean`

**Example**: `false`

### Security

**type:** `ProjectSecurityInfo`

### ProjectFolder

**type:** `object`

**Example**: `"13234"`

### IsPrivate

**type:** `boolean`

**Example**: `false`

### TaskCount

**type:** `integer`

**Example**: `0`

### TaskCountTotal

**type:** `integer`

**Example**: `0`

### MilestoneCount

**type:** `integer`

**Example**: `0`

### DiscussionCount

**type:** `integer`

**Example**: `0`

### ParticipantCount

**type:** `integer`

**Example**: `0`

### TimeTrackingTotal

**type:** `string`

**Example**: `"TimeTrackingTotal"`

### DocumentsCount

**type:** `integer`

**Example**: `0`

### IsFollow

**type:** `boolean`

**Example**: `"0"`

### Tags

**type:** `string[]`

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
```
