---
title: "Get filtered messages"
sidebar_label: "Get filtered messages"
sidebar_class_name: api-method get
description: "Returns a list with the detailed information about all the messages matching the filter parameters specified in the request."
---

**GET** `/api/2.0/project/message/filter`

Returns a list with the detailed information about all the messages matching the filter parameters specified in the request.

## Request body

### projectid

**type:** `integer`

Project ID

**Example**: `0`

### tag

**type:** `integer`

Project tag

**Example**: `0`

### departament

**type:** `string`

Departament GUID

**Example**: `"string"`

### participant

**type:** `string`

Participant GUID

**Example**: `"string"`

### createdStart

**type:** `string`

Minimum value of message creation date

**Example**: `"string"`

### createdStop

**type:** `string`

Maximum value of message creation date

**Example**: `"string"`

### lastId

**type:** `integer`

Last message ID

**Example**: `0`

### myProjects

**type:** `boolean`

Specifies whether to return messages only from my projects or not

**Example**: `true`

### follow

**type:** `boolean`

Specifies whether to return messages only from followed discussions or not

**Example**: `true`

### status

**type:** `integer[]`

Message status ("Open" or "Archived")

## Request example

```json
{
  "projectid": 0,
  "tag": 0,
  "departament": "string",
  "participant": "string",
  "createdStart": "string",
  "createdStop": "string",
  "lastId": 0,
  "myProjects": true,
  "follow": true,
  "status": [
    0
  ]
}
```

## Returns

List of messages. A request that is not authenticated returns `401`.

## Response example

```json
[
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
]
```
