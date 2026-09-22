---
title: "Get entity files"
sidebar_label: "Get entity files"
sidebar_class_name: api-method get
description: "Returns a list of all the files for the entity with the ID and type specified in the request."
---

**GET** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/{entityid:[0-9]+}/files`

Returns a list of all the files for the entity with the ID and type specified in the request.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Entity ID

**Example**: `0`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0
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
