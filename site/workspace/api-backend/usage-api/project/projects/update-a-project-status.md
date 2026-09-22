---
title: "Update a project status"
sidebar_label: "Update a project status"
sidebar_class_name: api-method put
description: "Updates a status of a project with the ID specified in the request."
---

**PUT** `/api/2.0/project/{id:[0-9]+}/status`

Updates a status of a project with the ID specified in the request.

## Request body

### id

**type:** `integer`

Project ID

**Example**: `0`

### status

**type:** `integer`

New project status ("Open", "Paused", or "Closed")

**Example**: `0`

## Request example

```json
{
  "id": 0,
  "status": 0
}
```

## Returns

Updated project. A request that is not authenticated returns `401`.

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
