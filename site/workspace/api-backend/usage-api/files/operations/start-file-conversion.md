---
title: "Start file conversion"
sidebar_label: "Start file conversion"
sidebar_class_name: api-method put
description: "Starts a conversion operation of a file with the ID specified in the request."
---

**PUT** `/api/2.0/files/file/{fileId}/checkconversion`

Starts a conversion operation of a file with the ID specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Returns

Operation result. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": "d5490cba-a5e6-40db-acb2-94203dba12d6",
    "OperationType": 6,
    "Progress": 30,
    "Source": "source",
    "File": {
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
    },
    "Error": "",
    "Processed": "1"
  }
]
```
