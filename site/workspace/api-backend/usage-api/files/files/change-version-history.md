---
title: "Change version history"
sidebar_label: "Change version history"
sidebar_class_name: api-method put
description: "Changes version history of a file with the ID specified in the request."
---

**PUT** `/api/2.0/files/file/{fileId}/history`

Changes version history of a file with the ID specified in the request.

## Path parameters

### fileId

**type:** `string`

File ID

**Example**: `"string"`

## Request body

### version

**type:** `integer`

History version

**Example**: `0`

### continueVersion

**type:** `boolean`

Specifies whether to continue the current version and mark it as a revision or create a new one

**Example**: `true`

## Request example

```json
{
  "version": 0,
  "continueVersion": true
}
```

## Returns

File history. A request that is not authenticated returns `401`.

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
