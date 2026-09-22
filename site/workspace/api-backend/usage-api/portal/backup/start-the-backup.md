---
title: "Start the backup"
sidebar_label: "Start the backup"
sidebar_class_name: api-method post
description: "Starts the backup of the current portal with the parameters specified in the request."
---

**POST** `/api/2.0/portal/startbackup`

Starts the backup of the current portal with the parameters specified in the request.

## Request body

### storageType

**type:** `integer`

Storage type ("Documents", "ThridpartyDocuments", "CustomCloud", "Local", "DataStore", or "ThirdPartyConsumer")

**Example**: `0`

### storageParams

**type:** `object[]`

Storage parameters

### backupMail

**type:** `boolean`

Specifies if the mails will be included into the backup or not

**Example**: `true`

## Request example

```json
{
  "storageType": 0,
  "storageParams": [
    {}
  ],
  "backupMail": true
}
```

## Returns

Backup progress. A request that is not authenticated returns `401`.

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
