---
title: "Update the project settings"
sidebar_label: "Update the project settings"
sidebar_class_name: api-method put
description: "Updates the project settings with the parameters specified in the request."
---

**PUT** `/api/2.0/project/settings`

Updates the project settings with the parameters specified in the request.

## Request body

### everebodyCanCreate

**type:** `boolean[]`

Specifies if all the portal users can create projects or not

### hideEntitiesInPausedProjects

**type:** `boolean[]`

Specifies if the entities will be hidden in the paused projects or not

### startModule

**type:** `integer[]`

Module type: Projects, Tasks, Discussions, TimeTracking

### folderId

**type:** `object`

Folder ID

## Request example

```json
{
  "everebodyCanCreate": [
    true
  ],
  "hideEntitiesInPausedProjects": [
    true
  ],
  "startModule": [
    0
  ],
  "folderId": {}
}
```

## Returns

Updated project settings. A request that is not authenticated returns `401`.

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
