---
title: "Get generated reports"
sidebar_label: "Get generated reports"
sidebar_class_name: api-method get
description: "Returns the generated report files."
---

**GET** `/api/2.0/project/report/files`

Returns the generated report files.

## Returns

Generated report files. A request that is not authenticated returns `401`.

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
