---
title: "Add a thread to a category"
sidebar_label: "Add a thread to a category"
sidebar_class_name: api-method post
description: "Adds a thread to the category with the ID specified in the request."
---

**POST** `/api/2.0/community/forum`

Adds a thread to the category with the ID specified in the request.

## Request body

### categoryId

**type:** `integer`

Category ID (-1 for a new category)

**Example**: `0`

### categoryName

**type:** `string`

Category name

**Example**: `"string"`

### threadName

**type:** `string`

Thread name

**Example**: `"string"`

### threadDescription

**type:** `string`

Thread description

**Example**: `"string"`

## Request example

```json
{
  "categoryId": 0,
  "categoryName": "string",
  "threadName": "string",
  "threadDescription": "string"
}
```

## Returns

Added thread. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `10`

### Title

**type:** `string`

**Example**: `"The Thread"`

### Description

**type:** `string`

**Example**: `"Sample thread"`

### Created

**type:** `string`

**Example**: `"2020-12-07T13:56:02.3249197Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-07T13:56:02.3249197Z"`

### RecentTopicId

**type:** `integer`

**Example**: `1234`

### RecentTopicTitle

**type:** `string`

**Example**: `"Sample topic"`

### UpdatedBy

**type:** `EmployeeWraper`

## Response example

```json
{
  "Id": 10,
  "Title": "The Thread",
  "Description": "Sample thread",
  "Created": "2020-12-07T13:56:02.3249197Z",
  "Updated": "2020-12-07T13:56:02.3249197Z",
  "RecentTopicId": 1234,
  "RecentTopicTitle": "Sample topic",
  "UpdatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  }
}
```
