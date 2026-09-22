---
title: "Delete a category"
sidebar_label: "Delete a category"
sidebar_class_name: api-method delete
description: "Deletes a category with the ID specified in the request."
---

**DELETE** `/api/2.0/community/forum/category/{categoryid}`

Deletes a category with the ID specified in the request.

## Path parameters

### categoryid

**type:** `integer`

Category ID

**Example**: `0`

## Returns

Category. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `0`

### Title

**type:** `string`

**Example**: `"Sample title"`

### Created

**type:** `string`

**Example**: `"2020-12-07T13:56:02.3459179Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-07T13:56:02.3459179Z"`

### Description

**type:** `string`

**Example**: `"Sample category"`

### Threads

**type:** `ForumThreadWrapper[]`

## Response example

```json
{
  "Id": 0,
  "Title": "Sample title",
  "Created": "2020-12-07T13:56:02.3459179Z",
  "Updated": "2020-12-07T13:56:02.3459179Z",
  "Description": "Sample category",
  "Threads": [
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
  ]
}
```
