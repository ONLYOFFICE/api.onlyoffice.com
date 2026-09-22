---
title: "Get thread topics"
sidebar_label: "Get thread topics"
sidebar_class_name: api-method get
description: "Returns a list of all the thread topics with the topic titles, dates of creation and update, post texts, and authors."
---

**GET** `/api/2.0/community/forum/{threadid}`

Returns a list of all the thread topics with the topic titles, dates of creation and update, post texts, and authors.

## Path parameters

### threadid

**type:** `integer`

Thread ID

**Example**: `0`

## Returns

List of thread topics. A request that is not authenticated returns `401`.

### Topics

**type:** `ForumTopicWrapper[]`

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
  "Topics": [
    {
      "Id": 10,
      "Title": "Sample topic",
      "Created": "2020-12-07T13:56:02.3259212Z",
      "Updated": "2020-12-07T13:56:02.3259212Z",
      "Text": "This is sample post",
      "UpdatedBy": {
        "Id": "00000000-0000-0000-0000-000000000000",
        "DisplayName": "Mike Zanyatski",
        "Title": "Manager",
        "AvatarSmall": "url to small avatar",
        "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
      },
      "Status": 0,
      "Type": 0,
      "Tags": [
        "Tag1,Tag2"
      ]
    }
  ],
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
