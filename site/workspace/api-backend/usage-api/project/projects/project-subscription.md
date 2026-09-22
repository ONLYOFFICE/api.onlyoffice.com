---
title: "Project subscription"
sidebar_label: "Project subscription"
sidebar_class_name: api-method put
description: "Subscribes to or unsubscribes from the notifications about the actions performed in the project with the ID specified in the request."
---

**PUT** `/api/2.0/project/{projectid:[0-9]+}/follow`

Subscribes to or unsubscribes from the notifications about the actions performed in the project with the ID specified in the request.

## Request body

### projectId

**type:** `integer`

Project ID

**Example**: `0`

## Request example

```json
{
  "projectId": 0
}
```

## Returns

Project. A request that is not authenticated returns `401`.

### CanEdit

**type:** `boolean`

**Example**: `false`

### IsPrivate

**type:** `boolean`

**Example**: `false`

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
  "IsPrivate": false,
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
