---
title: "Create a tag"
sidebar_label: "Create a tag"
sidebar_class_name: api-method post
description: "Creates a new tag with the data specified in the request."
---

**POST** `/api/2.0/project/tag`

Creates a new tag with the data specified in the request.

## Request body

### data

**type:** `string`

Tag data

**Example**: `"string"`

## Request example

```json
{
  "data": "string"
}
```

## Returns

Created tag. A request that is not authenticated returns `401`.

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
