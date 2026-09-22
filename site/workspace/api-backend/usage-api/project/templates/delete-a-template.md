---
title: "Delete a template"
sidebar_label: "Delete a template"
sidebar_class_name: api-method delete
description: "Deletes a template with the ID specified in the request from the portal."
---

**DELETE** `/api/2.0/project/template/{id:[0-9]+}`

Deletes a template with the ID specified in the request from the portal.

## Request body

### id

**type:** `integer`

Template ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

Deleted template. A request that is not authenticated returns `401`.

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
