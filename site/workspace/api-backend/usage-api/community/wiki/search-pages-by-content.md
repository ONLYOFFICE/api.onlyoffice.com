---
title: "Search pages by content"
sidebar_label: "Search pages by content"
sidebar_class_name: api-method get
description: "Returns a list of wiki pages with the content matching the search query specified in the request."
---

**GET** `/api/2.0/community/wiki/search/bycontent/{content}`

Returns a list of wiki pages with the content matching the search query specified in the request.

## Path parameters

### content

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
