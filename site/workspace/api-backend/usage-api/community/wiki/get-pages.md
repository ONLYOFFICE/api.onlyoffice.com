---
title: "Get pages"
sidebar_label: "Get pages"
sidebar_class_name: api-method get
description: "Returns a list of all the pages from the wiki or wiki category specified in the request."
---

**GET** `/api/2.0/community/wiki`

Returns a list of all the pages from the wiki or wiki category specified in the request.

## Request body

### category

**type:** `string`

Category name

**Example**: `"string"`

## Request example

```json
{
  "category": "string"
}
```

## Returns

Pages. A request that is not authenticated returns `401`.

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
