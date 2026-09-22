---
title: "Remove a user from the team"
sidebar_label: "Remove a user from the team"
sidebar_class_name: api-method delete
description: "Removes a user with the ID specified in the request from the selected project team."
---

**DELETE** `/api/2.0/project/{projectid:[0-9]+}/team`

Removes a user with the ID specified in the request from the selected project team.

## Request body

### projectid

**type:** `integer`

Project ID

**Example**: `0`

### userId

**type:** `string`

User ID

**Example**: `"string"`

## Request example

```json
{
  "projectid": 0,
  "userId": "string"
}
```

## Returns

List of team members. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "CanReadFiles": true,
    "CanReadMilestones": true,
    "CanReadMessages": true,
    "CanReadTasks": true,
    "CanReadContacts": true,
    "IsAdministrator": true,
    "IsRemovedFromTeam": true,
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
]
```
