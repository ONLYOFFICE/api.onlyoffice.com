---
title: "Create the backup schedule"
sidebar_label: "Create the backup schedule"
sidebar_class_name: api-method post
description: "Creates the backup schedule for the current portal with the parameters specified in the request."
---

**POST** `/api/2.0/portal/createbackupschedule`

Creates the backup schedule for the current portal with the parameters specified in the request.

## Request body

### storageType

**type:** `integer`

Storage type ("Documents", "ThridpartyDocuments", "CustomCloud", "Local", "DataStore", or "ThirdPartyConsumer")

**Example**: `0`

### storageParams

**type:** `object[]`

Storage parameters

### backupsStored

**type:** `integer`

Maximum number of backup stored copies

**Example**: `0`

### cronParams

**type:** `object`

Cron parameters

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
  "backupsStored": 0,
  "backupMail": true
}
```
