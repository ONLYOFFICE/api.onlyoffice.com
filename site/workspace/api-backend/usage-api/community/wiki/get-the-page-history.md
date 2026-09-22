---
title: "Get the page history"
sidebar_label: "Get the page history"
sidebar_class_name: api-method get
description: "Returns a list of history changes for a wiki page with the name specified in the request."
---

**GET** `/api/2.0/community/wiki/{page}/story`

Returns a list of history changes for a wiki page with the name specified in the request.

## Path parameters

### page

**type:** `string`

Page name

**Example**: `"string"`

## Returns

List of history changes. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Name": "Page name",
    "Content": "Page content",
    "UpdatedBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "Updated": "2020-12-08T17:37:03.3164965Z"
  }
]
```
