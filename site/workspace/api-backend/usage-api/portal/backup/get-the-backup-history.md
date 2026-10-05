---
title: "Get the backup history"
sidebar_label: "Get the backup history"
sidebar_class_name: api-method get
description: "Returns the history of the started backup."
---

**GET** `/api/2.0/portal/getbackuphistory`

Returns the history of the started backup.

## Returns

Backup history. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": "38c0f464-f1e7-493e-8d95-dc4ee8ee834a",
    "FileName": "FileName",
    "StorageType": 1,
    "CreatedOn": "2019-07-26T00:00:00",
    "ExpiresOn": "2019-07-26T00:00:00"
  }
]
```
