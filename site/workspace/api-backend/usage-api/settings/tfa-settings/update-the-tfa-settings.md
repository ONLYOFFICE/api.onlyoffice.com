---
title: "Update the TFA settings"
sidebar_label: "Update the TFA settings"
sidebar_class_name: api-method put
description: "Updates the two-factor authentication settings with the type specified in the request."
---

**PUT** `/api/2.0/settings/tfaapp`

Updates the two-factor authentication settings with the type specified in the request.

## Request body

### type

**type:** `integer`

TFA type (None, Sms, or App)

**Example**: `0`

### trustedIps

**type:** `string[]`

List of trusted IP addresses

### mandatoryUsers

**type:** `string[]`

List of users required for the TFA verification

### mandatoryGroups

**type:** `string[]`

List of groups required for the TFA verification

## Request example

```json
{
  "type": 0,
  "trustedIps": [
    "string"
  ],
  "mandatoryUsers": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "mandatoryGroups": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

## Returns

True if an operation is successful. A request that is not authenticated returns `401`.
