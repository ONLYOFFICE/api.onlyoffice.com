---
title: "Update the trash bin auto-clearing setting"
sidebar_label: "Update the trash bin auto-clearing setting"
sidebar_class_name: api-method put
description: "Updates the trash bin auto-clearing setting."
---

**PUT** `/api/2.0/files/settings/autocleanup`

Updates the trash bin auto-clearing setting.

## Request body

### set

**type:** `boolean`

Enables the auto-clearing or not

**Example**: `true`

### gap

**type:** `integer`

A time interval when the auto-clearing will be performed (one week, two weeks, one month, two months, three months)

**Example**: `0`

## Request example

```json
{
  "set": true,
  "gap": 0
}
```

## Returns

The auto-clearing setting properties. A request that is not authenticated returns `401`.

### IsAutoCleanUp

**type:** `boolean`

**Example**: `true`

### Gap

**type:** `"OneWeek" | "TwoWeeks" | "OneMonth" | "TwoMonths" | "ThreeMonths"`

[1 - OneWeek, 2 - TwoWeeks, 3 - OneMonth, 4 - TwoMonths, 5 - ThreeMonths]

**Example**: `"OneWeek"`

## Response example

```json
{
  "IsAutoCleanUp": true,
  "Gap": "OneWeek"
}
```
