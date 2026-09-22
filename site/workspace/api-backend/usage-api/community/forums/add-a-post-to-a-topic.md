---
title: "Add a post to a topic"
sidebar_label: "Add a post to a topic"
sidebar_class_name: api-method post
description: "Adds a post to the selected topic with a post subject and content specified in the request."
---

**POST** `/api/2.0/community/forum/topic/{topicid}`

Adds a post to the selected topic with a post subject and content specified in the request.

## Path parameters

### topicid

**type:** `integer`

Topic ID

**Example**: `0`

## Request body

### parentPostId

**type:** `integer`

Parent post ID

**Example**: `0`

### subject

**type:** `string`

Post subject (required)

**Example**: `"string"`

### content

**type:** `string`

Post text

**Example**: `"string"`

## Request example

```json
{
  "parentPostId": 0,
  "subject": "string",
  "content": "string"
}
```

## Returns

New post. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `123`

### Subject

**type:** `string`

**Example**: `"Sample subject"`

### Text

**type:** `string`

**Example**: `"Post text"`

### Created

**type:** `string`

**Example**: `"2020-12-07T13:56:02.3269198Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-07T13:56:02.3269198Z"`

### CreatedBy

**type:** `EmployeeWraper`

### ThreadTitle

**type:** `string`

**Example**: `"Title"`

### Attachments

**type:** `ForumTopicPostAttachmentWrapper[]`

## Response example

```json
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
```
