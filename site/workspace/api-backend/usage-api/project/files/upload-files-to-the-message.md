---
title: "Upload files to the message"
sidebar_label: "Upload files to the message"
sidebar_class_name: api-method post
description: "Uploads files specified in the request to the selected discussion message."
---

**POST** `/api/2.0/project/message/{messageid:[0-9]+}/files`

Uploads files specified in the request to the selected discussion message.

## Request body

### messageid

**type:** `integer`

Message ID

**Example**: `0`

### files

**type:** `integer[]`

File IDs

## Request example

```json
{
  "messageid": 0,
  "files": [
    0
  ]
}
```

## Returns

Message. A request that is not authenticated returns `401`.

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
