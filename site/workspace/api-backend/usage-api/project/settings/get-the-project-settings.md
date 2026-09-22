---
title: "Get the project settings"
sidebar_label: "Get the project settings"
sidebar_class_name: api-method get
description: "Returns the common project settings."
---

**GET** `/api/2.0/project/settings`

Returns the common project settings.

## Returns

Project common settings. A request that is not authenticated returns `401`.

### EverebodyCanCreate

**type:** `boolean`

**Example**: `true`

### HideEntitiesInPausedProjects

**type:** `boolean`

**Example**: `true`

### StartModuleType

**type:** `"Projects" | "Tasks" | "Discussions" | "TimeTracking"`

[0 - Projects, 1 - Tasks, 2 - Discussions, 3 - TimeTracking]

**Example**: `1`

## Response example

```json
{
  "EverebodyCanCreate": true,
  "HideEntitiesInPausedProjects": true,
  "StartModuleType": 1
}
```
