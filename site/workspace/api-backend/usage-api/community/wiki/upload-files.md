---
title: "Upload files"
sidebar_label: "Upload files"
sidebar_class_name: api-method post
description: "Uploads the selected files to the wiki page 'Files' section."
---

**POST** `/api/2.0/community/wiki/file`

Uploads the selected files to the wiki page 'Files' section.

## Request body

### files

**type:** `string[]`

List of files to upload

## Request example

```json
{
  "files": [
    "string"
  ]
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
