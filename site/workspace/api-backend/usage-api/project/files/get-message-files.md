---
title: "Get message files"
sidebar_label: "Get message files"
sidebar_class_name: api-method get
description: "Returns the detailed information about files attached to the discussion message with the ID specified in the request."
---

**GET** `/api/2.0/project/message/{messageid:[0-9]+}/files`

Returns the detailed information about files attached to the discussion message with the ID specified in the request.

## Request body

### messageid

**type:** `integer`

Message ID

**Example**: `0`

## Request example

```json
{
  "messageid": 0
}
```

## Returns

List of message files. A request that is not authenticated returns `401`.

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
