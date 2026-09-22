---
title: "Update a topic"
sidebar_label: "Update a topic"
sidebar_class_name: api-method put
description: "Updates a topic with the ID specified in the request, changing a topic subject, making it sticky, or closing it."
---

**PUT** `/api/2.0/community/forum/topic/{topicid}`

Updates a topic with the ID specified in the request, changing a topic subject, making it sticky, or closing it.

## Path parameters

### topicid

**type:** `integer`

Topic ID

**Example**: `0`

## Request body

### subject

**type:** `string`

New subject

**Example**: `"string"`

### sticky

**type:** `boolean`

Makes a topic sticky

**Example**: `true`

### closed

**type:** `boolean`

Closes a topic

**Example**: `true`

## Request example

```json
{
  "subject": "string",
  "sticky": true,
  "closed": true
}
```

## Returns

Updated topic. A request that is not authenticated returns `401`.

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
