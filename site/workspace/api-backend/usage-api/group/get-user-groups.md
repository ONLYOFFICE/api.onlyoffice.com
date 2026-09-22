---
title: "Get user groups"
sidebar_label: "Get user groups"
sidebar_class_name: api-method get
description: "Returns a list of groups for the user with the ID specified in the request."
---

**GET** `/api/2.0/group/user/{userid}`

Returns a list of groups for the user with the ID specified in the request.

## Path parameters

### userid

**type:** `string`

User ID

**Example**: `"string"`

## Returns

Group. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Name": "Group Name",
    "Id": "00000000-0000-0000-0000-000000000000",
    "Manager": "Jake.Zazhitski"
  }
]
```
