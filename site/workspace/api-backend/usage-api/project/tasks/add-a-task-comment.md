---
title: "Add a task comment"
sidebar_label: "Add a task comment"
sidebar_class_name: api-method post
description: "Adds a comment to the selected task with the comment text and parent comment ID specified in the request."
---

**POST** `/api/2.0/project/task/{taskid:[0-9]+}/comment`

Adds a comment to the selected task with the comment text and parent comment ID specified in the request.

## Request body

### taskid

**type:** `integer`

Task ID

**Example**: `0`

### content

**type:** `string`

Comment text

**Example**: `"string"`

### parentid

**type:** `string`

Parent comment ID

**Example**: `"string"`

## Request example

```json
{
  "taskid": 0,
  "content": "string",
  "parentid": "string"
}
```

## Returns

List of comments. A request that is not authenticated returns `401`.

### Id

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### ParentId

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### Page

**type:** `string`

**Example**: `"Some page"`

### Content

**type:** `string`

**Example**: `"Comment content"`

### Author

**type:** `EmployeeWraper`

### LastModified

**type:** `string`

**Example**: `"2020-12-08T17:37:03.3304954Z"`

### Inactive

**type:** `boolean`

**Example**: `false`

## Response example

```json
{
  "Id": "00000000-0000-0000-0000-000000000000",
  "ParentId": "00000000-0000-0000-0000-000000000000",
  "Page": "Some page",
  "Content": "Comment content",
  "Author": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "LastModified": "2020-12-08T17:37:03.3304954Z",
  "Inactive": false
}
```
