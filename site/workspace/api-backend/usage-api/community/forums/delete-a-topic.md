---
title: "Delete a topic"
sidebar_label: "Delete a topic"
sidebar_class_name: api-method delete
description: "Deletes a topic with the ID specified in the request."
---

**DELETE** `/api/2.0/community/forum/topic/{topicid}`

Deletes a topic with the ID specified in the request.

## Path parameters

### topicid

**type:** `integer`

Topic ID

**Example**: `0`

## Returns

Topic. A request that is not authenticated returns `401`.

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
