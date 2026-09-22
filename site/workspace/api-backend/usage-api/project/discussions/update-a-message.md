---
title: "Update a message"
sidebar_label: "Update a message"
sidebar_class_name: api-method put
description: "Updates the selected discussion message from a project with the ID specified in the request."
---

**PUT** `/api/2.0/project/message/{messageid:[0-9]+}`

Updates the selected discussion message from a project with the ID specified in the request.

## Request body

### messageid

**type:** `integer`

Message ID

**Example**: `0`

### projectid

**type:** `integer`

Project ID

**Example**: `0`

### title

**type:** `string`

Discussion title

**Example**: `"string"`

### content

**type:** `string`

New message text

**Example**: `"string"`

### participants

**type:** `string`

New user IDs (GUIDs) separated with ','

**Example**: `"string"`

### notify

**type:** `boolean[]`

Specifies whether to notify participants about a message or not

## Request example

```json
{
  "messageid": 0,
  "projectid": 0,
  "title": "string",
  "content": "string",
  "participants": "string",
  "notify": [
    true
  ]
}
```

## Returns

Updated message. A request that is not authenticated returns `401`.

### CanEditFiles

**type:** `boolean`

**Example**: `true`

### CanReadFiles

**type:** `boolean`

**Example**: `true`

### Subscribers

**type:** `EmployeeWraperFull[]`

### Files

**type:** `FileWrapper[]`

### Comments

**type:** `CommentInfo[]`

### Project

**type:** `ProjectWrapperFull`

### ProjectOwner

**type:** `SimpleProjectWrapper`

### Text

**type:** `string`

**Example**: `"Hello, this is sample message"`

### CanCreateComment

**type:** `boolean`

**Example**: `false`

### CanEdit

**type:** `boolean`

**Example**: `true`

### CommentsCount

**type:** `integer`

**Example**: `5`

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
  "CanEditFiles": true,
  "CanReadFiles": true,
  "Subscribers": [
    {
      "FirstName": "Mike",
      "LastName": "Zanyatski",
      "UserName": "Mike.Zanyatski",
      "Email": "my@domain.com",
      "Birthday": "2008-04-10T06-30-00.000Z",
      "Sex": "male",
      "Status": 1,
      "ActivationStatus": 0,
      "Terminated": "2008-04-10T06-30-00.000Z",
      "Department": "Marketing",
      "WorkFrom": "2008-04-10T06-30-00.000Z",
      "Groups": [
        {
          "Name": "Group Name",
          "Id": "00000000-0000-0000-0000-000000000000",
          "Manager": "Jake.Zazhitski"
        }
      ],
      "Location": "Palo Alto",
      "Notes": "Notes to worker",
      "Lead": "055312F1-1D71-4786-BB5B-D5910316E53C",
      "AvatarMedium": "url to medium avatar",
      "Avatar": "url to big avatar",
      "IsAdmin": false,
      "IsLDAP": false,
      "ListAdminModules": [
        "projects,crm"
      ],
      "IsOwner": false,
      "IsVisitor": false,
      "CultureName": "en-EN",
      "IsSSO": false,
      "QuotaLimit": 0,
      "UsedSpace": 0,
      "DocsSpace": 0,
      "MailSpace": 0,
      "TalkSpace": 0,
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    }
  ],
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
  "ProjectOwner": {
    "Id": 123,
    "Title": "Sample project",
    "Status": 0,
    "IsPrivate": false
  },
  "Text": "Hello, this is sample message",
  "CanCreateComment": false,
  "CanEdit": true,
  "CommentsCount": 5,
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
