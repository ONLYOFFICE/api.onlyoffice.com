---
title: "Get the space usage"
sidebar_label: "Get the space usage"
sidebar_class_name: api-method get
description: "Returns the space usage quota for the portal with the specified space usage for each module."
---

**GET** `/api/2.0/settings/quota`

Returns the space usage quota for the portal with the specified space usage for each module.

## Returns

Space usage and limits for upload. A request that is not authenticated returns `401`.

### StorageSize

**type:** `integer`

**Example**: `1073741824`

### MaxFileSize

**type:** `integer`

**Example**: `26214400`

### UsedSize

**type:** `integer`

**Example**: `262144000`

### MaxUsersCount

**type:** `integer`

**Example**: `0`

### UsersCount

**type:** `integer`

**Example**: `0`

### AvailableSize

**type:** `integer`

**Example**: `0`

### AvailableUsersCount

**type:** `integer`

**Example**: `0`

### StorageUsage

**type:** `QuotaUsage[]`

### UserStorageSize

**type:** `integer`

**Example**: `0`

### UserUsedSize

**type:** `integer`

**Example**: `0`

### UserAvailableSize

**type:** `integer`

**Example**: `0`

### MaxVisitors

**type:** `integer`

**Example**: `0`

### VisitorsCount

**type:** `integer`

**Example**: `0`

## Response example

```json
{
  "StorageSize": 1073741824,
  "MaxFileSize": 26214400,
  "UsedSize": 262144000,
  "MaxUsersCount": 0,
  "UsersCount": 0,
  "AvailableSize": 0,
  "AvailableUsersCount": 0,
  "StorageUsage": [
    {
      "Path": "string",
      "Size": 0
    }
  ],
  "UserStorageSize": 0,
  "UserUsedSize": 0,
  "UserAvailableSize": 0,
  "MaxVisitors": 0,
  "VisitorsCount": 0
}
```
