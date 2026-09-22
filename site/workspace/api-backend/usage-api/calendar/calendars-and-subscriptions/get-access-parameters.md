---
title: "Get access parameters"
sidebar_label: "Get access parameters"
sidebar_class_name: api-method get
description: "Returns the sharing access parameters of the calendar with the ID specified in the request."
---

**GET** `/api/2.0/calendar/{calendarId}/sharing`

Returns the sharing access parameters of the calendar with the ID specified in the request.

## Path parameters

### calendarId

**type:** `integer`

Calendar ID

**Example**: `0`

## Returns

Sharing access parameters. A request that is not authenticated returns `401`.

### AvailableOptions

**type:** `AccessOption[]`

### Items

**type:** `PublicItemWrapper[]`

## Response example

```json
{
  "AvailableOptions": [
    {
      "Id": "read",
      "Name": "Read only",
      "Default": true,
      "DefaultStyle": "read"
    }
  ],
  "Items": [
    {
      "ItemId": "2fdfe577-3c26-4736-9df9-b5a683bb8520",
      "ItemName": "Everyone",
      "IsGroup": true,
      "CanEdit": true,
      "SharingOption": {
        "Id": "read",
        "Name": "Read only",
        "Default": true,
        "DefaultStyle": "read"
      }
    }
  ]
}
```
