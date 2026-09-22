---
title: "Create a page comment"
sidebar_label: "Create a page comment"
sidebar_class_name: api-method post
description: "Creates a comment on the selected wiki page with the content specified in the request."
---

**POST** `/api/2.0/community/wiki/{page}/comment`

Creates a comment on the selected wiki page with the content specified in the request.

## Path parameters

### page

**type:** `string`

Page name

**Example**: `"string"`

## Request body

### content

**type:** `string`

Comment text

**Example**: `"string"`

### parentId

**type:** `string`

Comment parent ID

**Example**: `"string"`

## Request example

```json
{
  "content": "string",
  "parentId": "string"
}
```

## Returns

Comment information. A request that is not authenticated returns `401`.

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
