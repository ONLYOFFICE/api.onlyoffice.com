---
title: "Add a message comment"
sidebar_label: "Add a message comment"
sidebar_class_name: api-method post
description: "Adds a comment to the selected discussion message with the text specified in the request."
---

**POST** `/api/2.0/project/message/{messageid:[0-9]+}/comment`

Adds a comment to the selected discussion message with the text specified in the request. The parent comment ID can be also selected.

## Request body

### messageid

**type:** `integer`

Message ID

**Example**: `0`

### content

**type:** `string`

Comment text

**Example**: `"string"`

### parentId

**type:** `string`

Parent comment ID

**Example**: `"string"`

## Request example

```json
{
  "messageid": 0,
  "content": "string",
  "parentId": "string"
}
```

## Returns

Comment. A request that is not authenticated returns `401`.

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
