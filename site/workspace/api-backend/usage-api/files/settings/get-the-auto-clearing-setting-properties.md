---
title: "Get the auto-clearing setting properties"
sidebar_label: "Get the auto-clearing setting properties"
sidebar_class_name: api-method get
description: "Returns the auto-clearing setting properties."
---

**GET** `/api/2.0/files/settings/autocleanup`

Returns the auto-clearing setting properties.

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
