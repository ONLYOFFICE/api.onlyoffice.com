---
title: "Add a milestone"
sidebar_label: "Add a milestone"
sidebar_class_name: api-method post
description: "Adds a new milestone using the parameters (project ID, milestone title, deadline, etc) specified in the request."
---

**POST** `/api/2.0/project/{id:[0-9]+}/milestone`

Adds a new milestone using the parameters (project ID, milestone title, deadline, etc) specified in the request.

## Request body

### id

**type:** `integer`

Project ID

**Example**: `0`

### title

**type:** `string`

Milestone title

**Example**: `"string"`

### deadline

**type:** `string`

Milestone deadline

**Example**: `"string"`

### isKey

**type:** `boolean`

Specifies if this is a key milestone or not

**Example**: `true`

### isNotify

**type:** `boolean`

Specifies whether to remind me 48 hours before the milestone due date or not

**Example**: `true`

### description

**type:** `string`

Milestone description

**Example**: `"string"`

### responsible

**type:** `string`

Milestone responsible

**Example**: `"string"`

### notifyResponsible

**type:** `boolean`

Specifies whether to notify responsible about the milestone actions or not

**Example**: `true`

## Request example

```json
{
  "id": 0,
  "title": "string",
  "deadline": "string",
  "isKey": true,
  "isNotify": true,
  "description": "string",
  "responsible": "string",
  "notifyResponsible": true
}
```

## Returns

Added milestone. A request that is not authenticated returns `401`.

### ProjectOwner

**type:** `SimpleProjectWrapper`

### Deadline

**type:** `string`

**Example**: `"2020-12-22T04:11:56.4458522Z"`

### IsKey

**type:** `boolean`

**Example**: `false`

### IsNotify

**type:** `boolean`

**Example**: `false`

### CanEdit

**type:** `boolean`

**Example**: `false`

### CanDelete

**type:** `boolean`

**Example**: `false`

### ActiveTaskCount

**type:** `integer`

**Example**: `15`

### ClosedTaskCount

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
```
