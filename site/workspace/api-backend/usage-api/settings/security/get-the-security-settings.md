---
title: "Get the security settings"
sidebar_label: "Get the security settings"
sidebar_class_name: api-method get
description: "Returns the security settings for the modules specified in the request."
---

**GET** `/api/2.0/settings/security`

Returns the security settings for the modules specified in the request.

## Request body

### ids

**type:** `string[]`

List of module IDs

## Request example

```json
{
  "ids": [
    "string"
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
