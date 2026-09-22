---
title: "Set the security settings to modules"
sidebar_label: "Set the security settings to modules"
sidebar_class_name: api-method put
description: "Sets the security settings to the modules with the IDs specified in the request."
---

**PUT** `/api/2.0/settings/security/access`

Sets the security settings to the modules with the IDs specified in the request.

## Request body

### items

**type:** `object[]`

Modules with security information

## Request example

```json
{
  "items": [
    {}
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
