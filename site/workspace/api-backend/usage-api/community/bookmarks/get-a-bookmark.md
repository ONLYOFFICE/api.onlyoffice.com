---
title: "Get a bookmark"
sidebar_label: "Get a bookmark"
sidebar_class_name: api-method get
description: "Returns the detailed information on the bookmark with the ID specified in the request."
---

**GET** `/api/2.0/community/bookmark/{id}`

Returns the detailed information on the bookmark with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Bookmark ID

**Example**: `0`

## Returns

Bookmark information. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `11`

### Title

**type:** `string`

**Example**: `"Google inc."`

### Url

**type:** `string`

**Example**: `"http://www.google.com"`

### Thumbnail

**type:** `string`

**Example**: `"Url to thumbnail"`

### Created

**type:** `string`

**Example**: `"2020-12-06T07:36:14.8181893Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-06T07:36:14.8181893Z"`

### Description

**type:** `string`

**Example**: `"Google"`

### CreatedBy

**type:** `EmployeeWraper`

## Response example

```json
{
  "Id": 11,
  "Title": "Google inc.",
  "Url": "http://www.google.com",
  "Thumbnail": "Url to thumbnail",
  "Created": "2020-12-06T07:36:14.8181893Z",
  "Updated": "2020-12-06T07:36:14.8181893Z",
  "Description": "Google",
  "CreatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  }
}
```
