---
title: "Search users by status filter"
sidebar_label: "Search users by status filter"
sidebar_class_name: api-method get
description: "Returns a list of users matching the status filter and search query."
---

**GET** `/api/2.0/people/status/{status}/search`

Returns a list of users matching the status filter and search query.

## Path parameters

### status

**type:** `"Active" | "Terminated" | "LeaveOfAbsence" | "Default" | "All"`

User status ("Active", "Terminated", "LeaveOfAbsence", "All", or "Default")

**Example**: `"Active"`

## Request body

### query

**type:** `string`

Search query

**Example**: `"string"`

## Request example

```json
{
  "query": "string"
}
```

## Returns

List of users. A request that is not authenticated returns `401`.

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
