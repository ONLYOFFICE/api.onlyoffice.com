---
title: "Start the restoring process"
sidebar_label: "Start the restoring process"
sidebar_class_name: api-method post
description: "Starts the data restoring process for the current portal with the parameters specified in the request."
---

**POST** `/api/2.0/portal/startrestore`

Starts the data restoring process for the current portal with the parameters specified in the request.

## Request body

### backupId

**type:** `string`

Backup ID

**Example**: `"string"`

### storageType

**type:** `integer`

Storage type ("Documents", "ThridpartyDocuments", "CustomCloud", "Local", "DataStore", or "ThirdPartyConsumer")

**Example**: `0`

### storageParams

**type:** `object[]`

Storage parameters

### notify

**type:** `boolean`

Specifies whether to notify the users about the backup or not

**Example**: `true`

## Request example

```json
{
  "backupId": "string",
  "storageType": 0,
  "storageParams": [
    {}
  ],
  "notify": true
}
```

## Returns

Restoring progress. A request that is not authenticated returns `401`.

### IsCompleted

**type:** `boolean`

**Example**: `false`

### Progress

**type:** `integer`

**Example**: `44`

### Error

**type:** `string`

### Link

**type:** `string`

**Example**: `"Link"`

## Response example

```json
{
  "IsCompleted": false,
  "Progress": 44,
  "Link": "Link"
}
```
