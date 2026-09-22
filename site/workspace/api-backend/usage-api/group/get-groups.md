---
title: "Get groups"
sidebar_label: "Get groups"
sidebar_class_name: api-method get
description: "Returns the general information about all the groups, such as group ID and group manager."
---

**GET** `/api/2.0/group/`

Returns the general information about all the groups, such as group ID and group manager.

**Note**: This method returns partial group information.

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
