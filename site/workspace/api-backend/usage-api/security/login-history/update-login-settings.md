---
title: "Update login settings"
sidebar_label: "Update login settings"
sidebar_class_name: api-method put
description: "Updates the login settings with the parameters specified in the request."
---

**PUT** `/api/2.0/security/loginsettings`

Updates the login settings with the parameters specified in the request.

## Request body

### attemptsCount

**type:** `integer`

Maximum number of the user attempts to log in

**Example**: `0`

### blockTime

**type:** `integer`

The time for which the user will be blocked after unsuccessful login attempts

**Example**: `0`

### checkPeriod

**type:** `integer`

The time to wait for a response from the server

**Example**: `0`

## Request example

```json
{
  "attemptsCount": 0,
  "blockTime": 0,
  "checkPeriod": 0
}
```

## Returns

Updated login settings. A request that is not authenticated returns `401`.

### AttemptCount

**type:** `integer`

**Example**: `0`

### BlockTime

**type:** `integer`

**Example**: `0`

### CheckPeriod

**type:** `integer`

**Example**: `0`

## Response example

```json
{
  "AttemptCount": 0,
  "BlockTime": 0,
  "CheckPeriod": 0
}
```
