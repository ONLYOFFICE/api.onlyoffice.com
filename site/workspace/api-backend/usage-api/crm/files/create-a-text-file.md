---
title: "Create a text file"
sidebar_label: "Create a text file"
sidebar_class_name: api-method post
description: "Creates a text (.txt) file in the selected folder with the title and contents specified in the request."
---

**POST** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/{entityid:[0-9]+}/files/text`

Creates a text (.txt) file in the selected folder with the title and contents specified in the request.

## Request body

### entityType

**type:** `string`

Related entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Related entity ID

**Example**: `0`

### title

**type:** `string`

File title

**Example**: `"string"`

### content

**type:** `string`

File contents

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0,
  "title": "string",
  "content": "string"
}
```

## Returns

File information. A request that is not authenticated returns `401`.

### Name

**type:** `string`

**Example**: `"File name"`

### UpdatedBy

**type:** `EmployeeWraper`

### Updated

**type:** `string`

**Example**: `"2020-12-08T17:37:03.3424957Z"`

### Location

**type:** `string`

**Example**: `"4\\\\46\\\\File name"`

## Response example

```json
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
```
