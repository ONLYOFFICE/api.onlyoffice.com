---
title: "Delete a thread"
sidebar_label: "Delete a thread"
sidebar_class_name: api-method delete
description: "Deletes a thread with the ID specified in the request."
---

**DELETE** `/api/2.0/community/forum/thread/{threadid}`

Deletes a thread with the ID specified in the request.

## Path parameters

### threadid

**type:** `integer`

Thread ID

**Example**: `0`

## Returns

Thread. A request that is not authenticated returns `401`.

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
