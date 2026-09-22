---
title: "Add a bookmark comment by bookmark ID"
sidebar_label: "Add a bookmark comment by bookmark ID"
sidebar_class_name: api-method post
description: "Adds a comment to the bookmark with the ID specified in the request."
---

**POST** `/api/2.0/community/bookmark/{id}/comment`

Adds a comment to the bookmark with the ID specified in the request. The parent bookmark ID can be also specified if needed.

**Note**: Send parentId=00000000-0000-0000-0000-000000000000 or doesn't send it at all if you want your comment to be on the root level.

## Path parameters

### id

**type:** `integer`

Bookmark ID

**Example**: `0`

## Request body

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
  "content": "string",
  "parentId": "string"
}
```

## Returns

List of bookmark comments. A request that is not authenticated returns `401`.

### Text

**type:** `string`

**Example**: `"comment text"`

### Created

**type:** `string`

**Example**: `"2020-12-06T07:36:14.8151911Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-06T07:36:14.8151911Z"`

### Id

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### ParentId

**type:** `string`

**Example**: `"00000000-0000-0000-0000-000000000000"`

### CreatedBy

**type:** `EmployeeWraper`

## Response example

```json
{
  "Text": "comment text",
  "Created": "2020-12-06T07:36:14.8151911Z",
  "Updated": "2020-12-06T07:36:14.8151911Z",
  "Id": "00000000-0000-0000-0000-000000000000",
  "ParentId": "00000000-0000-0000-0000-000000000000",
  "CreatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  }
}
```
