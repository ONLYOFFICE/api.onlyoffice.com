---
title: "Add an event comment by feed ID"
sidebar_label: "Add an event comment by feed ID"
sidebar_class_name: api-method post
description: "Adds a comment to the event with the ID specified in the request."
---

**POST** `/api/2.0/community/event/{feedid}/comment`

Adds a comment to the event with the ID specified in the request. The parent event ID can be also specified if needed.

**Note**: Send parentId=0 or doesn't send it at all if you want your comment to be on the root level.

## Path parameters

### feedid

**type:** `integer`

Feed ID

**Example**: `0`

## Request body

### content

**type:** `string`

Comment text

**Example**: `"string"`

### parentId

**type:** `integer`

Comment parent ID

**Example**: `0`

## Request example

```json
{
  "content": "string",
  "parentId": 0
}
```

## Returns

Comment. A request that is not authenticated returns `401`.

### Text

**type:** `string`

**Example**: `"comment text"`

### Created

**type:** `string`

**Example**: `"2020-12-07T13:56:02.2899133Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-07T13:56:02.2899133Z"`

### Id

**type:** `integer`

**Example**: `10`

### ParentId

**type:** `integer`

**Example**: `123`

### CreatedBy

**type:** `EmployeeWraper`

## Response example

```json
{
  "Text": "comment text",
  "Created": "2020-12-07T13:56:02.2899133Z",
  "Updated": "2020-12-07T13:56:02.2899133Z",
  "Id": 10,
  "ParentId": 123,
  "CreatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  }
}
```
