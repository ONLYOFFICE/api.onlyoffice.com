---
title: "Set the module security settings"
sidebar_label: "Set the module security settings"
sidebar_class_name: api-method put
description: "Sets the security settings to the module with the ID specified in the request."
---

**PUT** `/api/2.0/settings/security`

Sets the security settings to the module with the ID specified in the request.

## Request body

### id

**type:** `string`

Module ID

**Example**: `"string"`

### enabled

**type:** `boolean`

Specifies if the selected module is enabled or not

**Example**: `true`

### subjects

**type:** `string[]`

List of user/group IDs

## Request example

```json
{
  "id": "string",
  "enabled": true,
  "subjects": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

## Returns

Security settings. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "WebItemId": "00000000-0000-0000-0000-000000000000",
    "Users": [
      {
        "Id": "00000000-0000-0000-0000-000000000000",
        "DisplayName": "Mike Zanyatski",
        "Title": "Manager",
        "AvatarSmall": "url to small avatar",
        "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
      }
    ],
    "Groups": [
      {
        "Name": "Group Name",
        "Id": "00000000-0000-0000-0000-000000000000",
        "Manager": "Jake.Zazhitski"
      }
    ],
    "Enabled": true,
    "IsSubItem": false
  }
]
```
