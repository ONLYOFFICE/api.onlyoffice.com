---
title: "Search pages by name"
sidebar_label: "Search pages by name"
sidebar_class_name: api-method get
description: "Returns a list of wiki pages with the name matching the search query specified in the request."
---

**GET** `/api/2.0/community/wiki/search/byname/{name}`

Returns a list of wiki pages with the name matching the search query specified in the request.

## Path parameters

### name

**type:** `string`

Search query

**Example**: `"string"`

## Returns

List of pages. A request that is not authenticated returns `401`.

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
