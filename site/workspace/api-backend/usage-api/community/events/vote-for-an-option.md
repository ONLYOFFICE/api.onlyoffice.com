---
title: "Vote for an option"
sidebar_label: "Vote for an option"
sidebar_class_name: api-method post
description: "Sends a vote for a certain option in a poll-type event with the ID specified in the request."
---

**POST** `/api/2.0/community/event/{feedid}/vote`

Sends a vote for a certain option in a poll-type event with the ID specified in the request.

**Note**: If an event is not a poll, then you'll get an error.

## Path parameters

### feedid

**type:** `integer`

Event ID

**Example**: `0`

## Request body

### variants

**type:** `integer[]`

Options

## Request example

```json
{
  "variants": [
    0
  ]
}
```

## Returns

Event. A request that is not authenticated returns `401`.

### Text

**type:** `string`

**Example**: `"Text of feed"`

### Poll

**type:** `PollWrapper`

### Id

**type:** `integer`

**Example**: `10`

### Title

**type:** `string`

**Example**: `"Manager"`

### Created

**type:** `string`

**Example**: `"2020-12-07T13:56:02.2729203Z"`

### Updated

**type:** `string`

**Example**: `"2020-12-07T13:56:02.2729203Z"`

### Type

**type:** `"None" | "News" | "Order" | "Advert" | "AllNews" | "Poll" | "All"`

[0 - None, 1 - News, 2 - Order, 4 - Advert, 7 - AllNews, 8 - Poll, 15 - All]

**Example**: `1`

### CreatedBy

**type:** `EmployeeWraper`

## Response example

```json
{
  "Text": "Text of feed",
  "Poll": {
    "PollType": 0,
    "EndDate": "2020-12-07T13:56:02.2859248Z",
    "StartDate": "2020-12-07T13:56:02.2859248Z",
    "Voted": false,
    "Votes": [
      {
        "Id": 133,
        "Name": "Variant 1",
        "Votes": 100
      }
    ]
  },
  "Id": 10,
  "Title": "Manager",
  "Created": "2020-12-07T13:56:02.2729203Z",
  "Updated": "2020-12-07T13:56:02.2729203Z",
  "Type": 1,
  "CreatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  }
}
```
