---
title: "Add a topic to a thread"
sidebar_label: "Add a topic to a thread"
sidebar_class_name: api-method post
description: "Adds a new topic to the existing thread with a subject, content and topic type specified in the request."
---

**POST** `/api/2.0/community/forum/{threadid}`

Adds a new topic to the existing thread with a subject, content and topic type specified in the request.

## Path parameters

### threadid

**type:** `integer`

Thread ID

**Example**: `0`

## Request body

### subject

**type:** `string`

Topic subject

**Example**: `"string"`

### content

**type:** `string`

Topic text

**Example**: `"string"`

### topicType

**type:** `integer`

Topic type

**Example**: `0`

## Request example

```json
{
  "subject": "string",
  "content": "string",
  "topicType": 0
}
```

## Returns

Added topic. A request that is not authenticated returns `401`.

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
