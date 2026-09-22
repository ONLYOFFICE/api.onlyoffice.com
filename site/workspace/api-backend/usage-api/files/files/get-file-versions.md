---
title: "Get file versions"
sidebar_label: "Get file versions"
sidebar_class_name: api-method get
description: "Returns the detailed information about all the available file versions with the ID specified in the request."
---

**GET** `/api/2.0/files/file/{fileId}/history`

Returns the detailed information about all the available file versions with the ID specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Returns

File information. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Name": "File name",
    "UpdatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Updated": "2020-12-08T17:37:03.3424957Z",
    "Location": "4\\\\46\\\\File name"
  }
]
```
