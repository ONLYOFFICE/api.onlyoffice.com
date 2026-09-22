---
title: "Update a topic post"
sidebar_label: "Update a topic post"
sidebar_class_name: api-method put
description: "Updates a post in the selected topic changing the post subject or/and content specified in the request."
---

**PUT** `/api/2.0/community/forum/topic/{topicid}/{postid}`

Updates a post in the selected topic changing the post subject or/and content specified in the request.

## Path parameters

### topicid

**type:** `integer`

Topic ID

**Example**: `0`

### postid

**type:** `integer`

Post ID

**Example**: `0`

## Request body

### subject

**type:** `string`

New post subject (required)

**Example**: `"string"`

### content

**type:** `string`

New post text

**Example**: `"string"`

## Request example

```json
{
  "subject": "string",
  "content": "string"
}
```

## Returns

Updated post. A request that is not authenticated returns `401`.

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
