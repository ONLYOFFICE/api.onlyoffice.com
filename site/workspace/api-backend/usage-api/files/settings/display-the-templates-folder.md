---
title: "Display the \"Templates\" folder"
sidebar_label: "Display the \"Templates\" folder"
sidebar_class_name: api-method put
description: "Displays the \"Templates\" folder."
---

**PUT** `/api/2.0/files/settings/templates`

Displays the "Templates" folder.

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

Bool value: true if the parameter is enabled. A request that is not authenticated returns `401`.
