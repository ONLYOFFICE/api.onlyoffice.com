---
title: "Change the archive format"
sidebar_label: "Change the archive format"
sidebar_class_name: api-method put
description: "Changes the format of the downloaded archive from .zip to .tar.gz."
---

**PUT** `/api/2.0/files/settings/downloadtargz`

Changes the format of the downloaded archive from .zip to .tar.gz.

## Request body

### set

**type:** `boolean`

Turns the parameter on or off

**Example**: `true`

## Request example

```json
{
  "set": true
}
```

## Returns

Archive. A request that is not authenticated returns `401`.
