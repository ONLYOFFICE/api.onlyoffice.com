---
title: "Add a bookmark"
sidebar_label: "Add a bookmark"
sidebar_class_name: api-method post
description: "Adds a bookmark with the title, description and tags specified in the request."
---

**POST** `/api/2.0/community/bookmark`

Adds a bookmark with the title, description and tags specified in the request.

## Request body

### url

**type:** `string`

Absolute URL to the bookmark page

**Example**: `"string"`

### title

**type:** `string`

Bookmark title

**Example**: `"string"`

### description

**type:** `string`

Bookmark description

**Example**: `"string"`

### tags

**type:** `string`

Bookmark tags separated with semicolon

**Example**: `"string"`

## Request example

```json
{
  "url": "string",
  "title": "string",
  "description": "string",
  "tags": "string"
}
```

## Returns

Newly added bookmark. A request that is not authenticated returns `401`.

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
