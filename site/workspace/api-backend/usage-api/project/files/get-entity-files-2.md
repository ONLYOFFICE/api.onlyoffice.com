---
title: "Get entity files"
sidebar_label: "Get entity files"
sidebar_class_name: api-method get
description: "Returns a list of all the files for the entity with the type and ID specified in the request."
---

**GET** `/api/2.0/project/{entityID:[0-9]+}/entityfiles`

Returns a list of all the files for the entity with the type and ID specified in the request.

## Request body

### entityType

**type:** `integer`

Entity type

**Example**: `0`

### entityID

**type:** `integer`

Entity ID

**Example**: `0`

## Request example

```json
{
  "entityType": 0,
  "entityID": 0
}
```

## Returns

List of files. A request that is not authenticated returns `401`.

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
