---
title: "Get default access parameters"
sidebar_label: "Get default access parameters"
sidebar_class_name: api-method get
description: "Returns the default values for the sharing access parameters."
---

**GET** `/api/2.0/calendar/sharing`

Returns the default values for the sharing access parameters.

## Returns

Default sharing access parameters. A request that is not authenticated returns `401`.

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
