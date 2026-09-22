---
title: "Change a user status"
sidebar_label: "Change a user status"
sidebar_class_name: api-method put
description: "Changes a status for the users with the IDs specified in the request."
---

**PUT** `/api/2.0/people/status/{status}`

Changes a status for the users with the IDs specified in the request.

## Path parameters

### status

**type:** `"Active" | "Terminated" | "LeaveOfAbsence" | "Default" | "All"`

New user status ("Active", "Terminated", "LeaveOfAbsence", "All", or "Default"

**Example**: `"Active"`

## Request body

### userIds

**type:** `string[]`

List of user IDs

## Request example

```json
{
  "userIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

## Returns

User list. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
