---
title: "Saves the Documents Firebase device token"
sidebar_label: "Saves the Documents Firebase device token"
sidebar_class_name: api-method post
description: "Saves the Firebase device token specified in the request for the Documents application."
---

**POST** `/api/2.0/settings/push/docregisterdevice`

Saves the Firebase device token specified in the request for the Documents application.

## Request body

### firebaseDeviceToken

**type:** `string`

Firebase device token

**Example**: `"string"`

## Request example

```json
{
  "firebaseDeviceToken": "string"
}
```

## Returns

FireBase user. A request that is not authenticated returns `401`.
