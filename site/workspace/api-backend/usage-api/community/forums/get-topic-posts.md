---
title: "Get topic posts"
sidebar_label: "Get topic posts"
sidebar_class_name: api-method get
description: "Returns a list of all the posts of the selected forum topic with the dates of creation and update, post texts, and authors."
---

**GET** `/api/2.0/community/forum/topic/{topicid}`

Returns a list of all the posts of the selected forum topic with the dates of creation and update, post texts, and authors.

## Path parameters

### topicid

**type:** `integer`

Topic ID

**Example**: `0`

## Returns

List of topic posts. A request that is not authenticated returns `401`.

### Posts

**type:** `ForumTopicPostWrapper[]`

### Id

**type:** `integer`

**Example**: `10`

### Title

**type:** `string`

**Example**: `"Sample topic"`

### Created

**type:** `string`

**Example**: `"2020-12-07T13:56:02.3259212Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-07T13:56:02.3259212Z"`

### Text

**type:** `string`

**Example**: `"This is sample post"`

### UpdatedBy

**type:** `EmployeeWraper`

### ThreadTitile

**type:** `string`

### Status

**type:** `"Normal" | "Closed" | "Sticky"`

[0 - Normal, 1 - Closed, 2 - Sticky]

**Example**: `0`

### Type

**type:** `"Informational" | "Poll"`

[0 - Informational, 1 - Poll]

**Example**: `0`

### Tags

**type:** `string[]`

## Response example

```json
{
  "Posts": [
    {
      "Id": 123,
      "Subject": "Sample subject",
      "Text": "Post text",
      "Created": "2020-12-07T13:56:02.3269198Z",
      "Updated": "2020-12-07T13:56:02.3269198Z",
      "CreatedBy": {
        "Id": "00000000-0000-0000-0000-000000000000",
        "DisplayName": "Mike Zanyatski",
        "Title": "Manager",
        "AvatarSmall": "url to small avatar",
        "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
      },
      "ThreadTitle": "Title",
      "Attachments": [
        {
          "Created": "2020-12-07T13:56:02.3269198Z",
          "Updated": "2020-12-07T13:56:02.3269198Z",
          "Name": "picture.jpg",
          "ContentType": "image/jpeg",
          "Size": 122345,
          "Path": "url to file"
        }
      ]
    }
  ],
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
```
