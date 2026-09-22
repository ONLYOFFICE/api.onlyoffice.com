---
title: "Get tags by a tag name"
sidebar_label: "Get tags by a tag name"
sidebar_class_name: api-method get
description: "Returns a list of all the tags by the tag name specified in the request."
---

**GET** `/api/2.0/project/tag/search`

Returns a list of all the tags by the tag name specified in the request.

## Request body

### tagName

**type:** `string`

Tag name

**Example**: `"string"`

## Request example

```json
{
  "tagName": "string"
}
```

## Returns

List of tags. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 10,
    "Title": "Sample Title",
    "Description": "Sample description",
    "Status": 0,
    "Responsible": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "ResponsibleId": "00000000-0000-0000-0000-000000000000"
  }
]
```
