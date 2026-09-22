---
title: "Get a group"
sidebar_label: "Get a group"
sidebar_class_name: api-method get
description: "Returns the detailed information about the selected group: group name, category, description, manager, members, and parent group if it exists."
---

**GET** `/api/2.0/group/{groupid}`

Returns the detailed information about the selected group: group name, category, description, manager, members, and parent group if it exists.

**Note**: This method returns full group information.

## Path parameters

### groupid

**type:** `string`

Group ID

**Example**: `"string"`

## Returns

Group. A request that is not authenticated returns `401`.

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
