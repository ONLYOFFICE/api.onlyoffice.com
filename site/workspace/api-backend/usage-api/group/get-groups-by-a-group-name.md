---
title: "Get groups by a group name"
sidebar_label: "Get groups by a group name"
sidebar_class_name: api-method get
description: "Returns a list of all the groups by the group name specified in the request."
---

**GET** `/api/2.0/group/search`

Returns a list of all the groups by the group name specified in the request.

## Request body

### groupName

**type:** `string`

Group name

**Example**: `"string"`

## Request example

```json
{
  "groupName": "string"
}
```

## Returns

List of groups. A request that is not authenticated returns `401`.

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
