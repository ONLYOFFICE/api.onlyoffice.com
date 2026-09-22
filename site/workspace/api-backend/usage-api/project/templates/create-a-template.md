---
title: "Create a template"
sidebar_label: "Create a template"
sidebar_class_name: api-method post
description: "Creates a new template with the title and description specified in the request."
---

**POST** `/api/2.0/project/template`

Creates a new template with the title and description specified in the request.

## Request body

### title

**type:** `string`

Template title

**Example**: `"string"`

### description

**type:** `string`

JSON template structure in the following format: `{"tasks": [{"title": "Task without milestone"}], "milestones": [{"title": "milestone title", "duration": 0.5, "tasks": [{"title": "milestone task"}]}]}`

**Example**: `"string"`

## Request example

```json
{
  "title": "string",
  "description": "string"
}
```

## Returns

Newly created template. A request that is not authenticated returns `401`.

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
