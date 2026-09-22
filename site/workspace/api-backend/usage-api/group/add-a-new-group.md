---
title: "Add a new group"
sidebar_label: "Add a new group"
sidebar_class_name: api-method post
description: "Adds a new group with the group manager, name, and members specified in the request."
---

**POST** `/api/2.0/group/`

Adds a new group with the group manager, name, and members specified in the request.

## Request body

### groupManager

**type:** `string`

Group manager

**Example**: `"string"`

### groupName

**type:** `string`

Group name

**Example**: `"string"`

### members

**type:** `string[]`

List of group members

## Request example

```json
{
  "groupManager": "string",
  "groupName": "string",
  "members": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

## Returns

Newly created group. A request that is not authenticated returns `401`.

### Description

**type:** `string`

**Example**: `"Description"`

### Name

**type:** `string`

**Example**: `"Sample group"`

### Parent

**type:** `string[]`

### Category

**type:** `string`

**Example**: `"74f31a85-991b-4e9b-b9e8-ae8e80d468f5"`

### Id

**type:** `string`

**Example**: `"fadd9f49-2431-4610-a518-3ca9b3843c88"`

### Manager

**type:** `EmployeeWraper`

### Members

**type:** `EmployeeWraper[]`

## Response example

```json
{
  "Description": "Description",
  "Name": "Sample group",
  "Parent": [
    "852d4b63-997a-4bae-aa7b-89bb87d85dbf"
  ],
  "Category": "74f31a85-991b-4e9b-b9e8-ae8e80d468f5",
  "Id": "fadd9f49-2431-4610-a518-3ca9b3843c88",
  "Manager": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "Members": [
    {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    }
  ]
}
```
