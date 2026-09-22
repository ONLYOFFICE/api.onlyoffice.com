---
title: "Get the portal settings"
sidebar_label: "Get the portal settings"
sidebar_class_name: api-method get
description: "Returns a list of all the available portal settings with the current values for each parameter."
---

**GET** `/api/2.0/settings/`

Returns a list of all the available portal settings with the current values for each parameter.

## Returns

Settings. A request that is not authenticated returns `401`.

### Timezone

**type:** `string`

**Example**: `"UTC"`

### TrustedDomains

**type:** `string[]`

### TrustedDomainsType

**type:** `"None" | "Custom" | "All"`

[0 - None, 1 - Custom, 2 - All]

**Example**: `0`

### Culture

**type:** `string`

**Example**: `"en-US"`

### UtcOffset

**type:** `string`

**Example**: `"-08:30:00"`

### UtcHoursOffset

**type:** `number`

**Example**: `-8.5`

## Response example

```json
{
  "Timezone": "UTC",
  "TrustedDomains": [
    "mydomain.com"
  ],
  "TrustedDomainsType": 0,
  "Culture": "en-US",
  "UtcOffset": "-08:30:00",
  "UtcHoursOffset": -8.5
}
```
