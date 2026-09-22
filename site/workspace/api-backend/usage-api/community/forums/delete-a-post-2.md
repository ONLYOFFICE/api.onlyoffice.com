---
title: "Delete a post"
sidebar_label: "Delete a post"
sidebar_class_name: api-method delete
description: "Deletes a post with the ID specified in the request."
---

**DELETE** `/api/2.0/community/forum/post/{postid}`

Deletes a post with the ID specified in the request.

## Path parameters

### postid

**type:** `integer`

Post ID

**Example**: `0`

## Returns

Post. A request that is not authenticated returns `401`.

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
